---
title: How to fetch data efficiently in Next.js
description: Fetching data the right way boosts your websites performance, giving your users a significantly better experience, and it’s easier than you realise
published: true
publishDate: 2023-02-27
# updatedDate: 2021-01-01
tags:
  - NextJS
  - performance
---

When you’re looking to improve the performance of any headless website, it’s important to control how much data you’re accessing at any one time.

Data delivered by APIs is, by design, lightweight providing as little information as possible.

But they can still provide a lot of data you don’t need and that can easily grow over time. If you want to keep your website performance high, reducing the data response time and size is critical.

Next.js has a few opinions about how data should be fetched, especially with the update to Next.js 13 so use this guide if you want to make sure you’re fetching data the best way possible.

In this guide, I’ll go over best data fetching practices to make sure you’re loading the exact data you need, and only when you need it.

## How to fetch data in Next.js

With the introduction of Next.js 13, there are now multiple ways of fetching data. How you approach this will be based on the version you’re using.

Co-located data fetching at the component level is preferred, as it allows you to be more efficient with your data requests, but otherwise the principles are the same.

As this is still in beta, I’ll cover how to approach both methods below.

### Components - Next.js 13 app folder (beta)

With Next.js 13 and the new `/app` folder approach, comes a new way of fetching data too.

Instead of loading data in your page and then passing it down to components below, you can now fetch data directly from components.

This is great for a few critical reasons:

- Next.js de-duplicates data fetching so if you request the datasource in two components, it’ll only be fetched once
- If you’re [loading components dynamically](https://www.notion.so/Load-components-on-demand-with-Next-Dynamic-c942403788cc4580ab25a66e2cda8e69?pvs=21), you’ll never load data for components that you aren’t using
- Data loaded in components is sequential, negating the need for `Promise.all` in most instances (see below)
- You can still fetch data for Static Site Generation or Server Side Rendering

You can use this in any component you wish with the common fetch syntax:

```jsx
// app/[blog]/page.js

async function getContent(slug) {
  const res = await fetch(`https://link.to/myapi/${slug}`)
  return res.json()
}

export default async function Page({ params: { slug } }) {
  const page = await getContent(slug)

  return (
    <>
      <h1>{page.title}</h1>
      {/* Page content goes here */}
    </>
  )
}
```

### Pages

The more traditional way of fetching data is to load it on the route page and then pass that data through to the components you might use.

A typical data fetching function might look like this:

```jsx
// pages/index.js

export default function Page({ data }) {
  // Render your data here
}

export async function getStaticProps() {
  const res = await fetch("https://link.to/myapi")
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}
```

When fetching data using the pages approach, you’ll have a few options on how you want to render this data.

**SSR, SSG & ISR**

When rendering your page you’ll want to decide whether you want to use Server Side Rendering (SSR), Static Site Generation (SSG) or Incremental Static Regeneration (ISR).

The main deciding factor here is how often does your data need to update.

- If you update content rarely, you should use `getStaticProps` which builds totally static pages and does not refresh data until you rebuild again (SSG)
- If you want to update content rarely but might use thousands of pages and want to improve build times, use `getStaticProps` with the `revalidate` prop, which will create static pages that can refresh content semi-regularly. (ISR)
- If you want content to update regularly and have lots of content then `getServerSideProps` will update your site without building static versions of every page, significantly reducing build times. (SSR)

Choosing Static or Server Side methodologies will depend on your needs, and can be set on a per-route basis so you can always pick the best approach for your content type.

```jsx
// pages/index.js

function Page({ data }) {
  // Render your data here
}

export async function getStaticProps() {
  // or getServerSideProps()
  const res = await fetch("https://link.to/myapi")
  const data = await res.json()

  // Pass data to the page via props
  return {
    props: { data },
    // revalidate: 3600 for ISR, this will fetch new data every hour
  }
}
```

## Why efficient data fetching matters

The above example shows a very simple way of fetching data but what happens when you need to load lots of data at once?

If you’re using a headless CMS then loading your blog page might look a little more complicated:

```jsx
// pages/blog.js

function Blog({ data }) {
  // Render your data here
}

export async function getStaticProps() {
  // Our main page content: title, description, and page specific SEO
  const page = await headlessApi("/cdn/pages/blog-root")

  // Our general layout content: header, footer, etc
  const layout = await headlessApi("/cdn/pages/layout")

  // An array of blog posts
  const posts = await headlessApi("/cdn/pages/", {
    type: "blog_post",
  })

  // Pass data to the page via props
  return {
    props: {
      page,
      layout,
      posts,
    },
  }
}
```

### Don’t await lots of data

Due to how Javascript works, using `async` `await` can cause issues if you use it multiple times in a row.

That’s because javascript is synchronous, and by asking it to `await` a request, it’s forced to do nothing until that response is returned.

You can see where this might be a problem in the above example.

1. Wait for our page content to fully load - `+300ms`
2. Then wait for our layout content to fully load - `+300ms`
3. Then wait for our posts to fully load - `+400ms`

We’re pausing at each request, meaning all our data might take `1000ms` to download and that’s before rendering any page content.

We can be much more efficient.

By updating our request to use `Promise.all` we can load all of our `await`s at once without having to wait for the previous one to complete.

```jsx
// Trigger all our awaits to start at the same time
const [page, layout, posts] = Promise.all([
	await headlessApi("/cdn/pages/blog-root")
	await headlessApi("/cdn/pages/layout")
	await headlessApi("/cdn/pages/", {
		type: "blog_post"
	})
])
```

Using Promise.all means our grouped requests will now only take as long as the longest response time, instead of adding every response time together:

- Wait for our page content to fully load - `300ms`
- Simultaneously wait for our layout content to fully load - `300ms`
- Simultaneously wait for our posts to fully load - `400ms`

Now our whole request only takes `400ms` instead of `1000ms` before. That’s significantly faster 🥳

### Exclude data you don’t need

One thing you may have noticed above is that we’re fetching all our blog posts. This is great for quickly accessing the data for each blog post and we’ll probably need to know the title, description, featured image and link to each blog post we want to display.

But most APIs will return more data than you actually need, which needs to be fetched, returned, and parsed and over time that data can add up — especially when you’re fetching big lists of data.

**Paginate your responses**

One of the more effective ways of reducing large lists of content is to paginate them. Most APIs will do this automatically for large content types, like blog posts.

```jsx
await headlessApi("/cdn/pages/", {
	type: "blog_post"
	per_page: 12,
	page: 1,
})
```

By reducing how many blog posts you’re looking up, you can significantly reduce the loading & parsing time for large lists of content.

<aside>
⚠️ Pagination is pretty standard functionality **and might be enabled by default** but check with your API docs for more info

</aside>

**Don’t load any data you don’t need**

It’s important to be super selective with what data you’re fetching. Don’t load what you aren’t using. This might mean that you have to be more selective about how everything gets put together but the end result is worth it!

**Exclude via the API**

Some APIs will allow you to exclude data you don’t need, so you can be a bit more selective in your results, returning only what you’re actually using. In the below example, you can see we’ve excluded unnecessary data fetches for the content, SEO title and SEO description:

```jsx
await headlessApi("/cdn/pages/", {
	type: "blog_post"
	exclude: "content, seo_title, seo_description"
})
```

This will save you a bit of data for each blog post, which can add up when querying lots of them!

<aside>
⚠️ This may or may not exist, depending on the API you're using. Refer to your API docs for more info

</aside>

**Using GraphQL**

GraphQL allows you to be very selective with the content you’re fetching, only returning exactly what you need. While it can take a little more to get set up, if you’re _really_ conscious about how much data you’re requesting this is the way to do it.

If GraphQL sounds like the right approach for your project, [here’s a guide to help you get started](https://www.apollographql.com/blog/apollo-client/next-js/next-js-getting-started/).
