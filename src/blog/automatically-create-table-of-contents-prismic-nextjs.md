---
title: How to create a Table of Contents automatically using Prismic & NextJS
description: A short guide on how to make a small change to your blog that will massively improve how your users will interact with your content
published: true
publishDate: 2022-08-21
# updatedDate: 2021-01-01
# tags:
---

I’ve been spending a lot of time recently recreating the Skyward website and one of the coolest, but also most underrated features that I’ve created is the table of contents on blog posts.

The best part? Once you’ve built it it requires no effort to maintain - it automatically finds the headings in your blog, turns them into links and creates the Table of Contents for you..

## Why is a table of contents important?

When you’re reading blog posts (like this one) how do you go about reading it? Most people will typically scan the page to get an understanding of if the page they’ve landed on is what they’re looking for.

Then they’ll dive deeper into the content, read through it, jump back and forth (especially if it’s a tutorial)

And finally, if the article is good enough, they might share it.

By providing links to headings throughout the blog post, a table of contents seamlessly covers everything a user might need, without being intrusive and blocking their ability to read the article.

## Why do we need to create contents automatically?

Going through and manually adding a table of contents is slow and prone to errors.

If you regularly add new content to existing blogs, it would be very easy to forget to manually update a table of contents.

Creating a table of contents also improves how easy it is to share links to specific parts of blog posts, helping more users and making your content more relevant.

Without a Table of Contents, you’re relying on your users doing all this on their own - so why not help them out?

## Planning our build

In order to achieve the results we desire, we’ll need to do a few things.

1. Create a blog post with content
   1. We need to make sure all heading tags have an `id` for linking
2. Create a sidebar for our Table of Contents
3. Create our Table of Contents
   1. We need to find all heading tags in our content and create links to them
   2. It would also be helpful to create a hierarchy so we can see which are primary and which are secondary headings
4. Review our results

## Create your blog post

To get started, you’ll need to create your blog post with some content.

I’m using Prismic here. Prismic works based off of an internal architecture called Slices. These allow content to be automatically added to the page in the order determined by the CMS - which is great for updating content without having to make code changes.

Here’s a basic blog post in Prismic, this is the page we’re starting with

`pages/blog/[uid].js`

```jsx
import { SliceZone } from "@prismicio/react";
import { createClient } from "../../prismic";
import { components } from "../../slices";

export default BlogPost = ({ data }) => (
	<Layout>
		<article>
			// Our blog content built up using one or more slices, though you could switch this for a single rich text field too
			<SliceZone slices={slices} components={components} />
		</article>
		<BlogSidebar slices={slices} /> //we'll get to this later
	</Layout>
)

// fetch data for our page
export const getStaticProps = async ({ params, previewData }) => {
  const client = createClient({ previewData });

  const post = await client.getByUID("blogPost", params.uid, {});

  return {
    props: post,
  };
};

// Statically generate our paths
export const getStaticPaths = async () => {
  const client = createClient();
  const documents = await client.getAllByType("blogPost");

  const paths = await documents.map((document) => ({
    params: { uid: document.uid },
  }));

  return { paths, fallback: false };
};

export default BlogPost;
```

We’ll also need a slice that can handle page content

`slices/BlogContent.js`

```jsx
import { PrismicRichText } from "@prismicio/react"

// This just outputs the rich text content of the prismic field
const Content = ({ content }) => <PrismicRichText field={content} />

export default Content
```

### Add IDs to our headings

In order to be able to link to our headings, we need to create headings with IDs.

By default, Prismic simply outputs your headings, so to add IDs to them you’ll need to use the HTML serializer.

// Pull up the html serializer content from below

Side note: The HTML serializer is great for using custom `<Link>` or `<Image>` components in your content

Here, we just want to take our `<h1>` and replace it with `<h1 id={someID}>`

To add an ID to our heading components we need to first create the ID.

```jsx
export const createID = (string) => (
	string
    .toLowerCase() //lowercase for consistency
    .replace(/[^\w\s]/gi, "") //remove special chars
    .replace(/\s+/g, "-"); //replace spaces with hyphens
)
```

Using the function above, we’ll turn a string `like this!` Into an ID safe string `like-this`. Note that we’ll reuse this function later, so let’s save it in a global space like `../utils/createId`.

Now we have the ID we can figure out how to add it to our content component.

In Prismic, we can specify exactly what we want to return from our Rich Text fields by passing a `components` function to our `PrismicRichText` component, like so

```jsx
import { PrismicRichText } from "@prismicio/react"
import { createId } from "../utils/createId"

const Content = ({ content }) => (
  <PrismicRichText field={content} components={components} />
)

// we need to figure out what goes here so we can limit what's returned to only the links we need
const components = () => {}

export default Content
```

`PrismicRichText` uses our components function every time if finds a component. Behind the scenes it is effectively doing this.

```jsx
// we don't need to add this code anywhere, it's just pseudo code
for (element in your_custom_rich_text_field) {
  return element
}
```

Where it loops through every element you’ve used in your Rich Text field, like `p` `strong` `h1` `h2` `image` etc and returning the relevant content in the appropriate format.

If you want to dig deeper into the HTML serializer you can read [how to do that here](https://prismic.io/docs/core-concepts/html-serializer) - what we need to know for now is that we can override what we get returned.

So now we know how it works, we can create our serializer to return exactly what we need

```jsx
// Add our custom HTML serializer for our page content
const components = (type, element, content) => {
  if (type === Element.heading1) {
    // we overwrite the default functionality, returning a h1 with an id
    return <h1 id={`#${createId(content)}`}>{content}</h1>
  }

  if (type === Element.heading2) {
    return <h2 id={`#${createId(content)}`}>{content}</h2>
  }

  if (type === Element.heading3) {
    return <h3 id={`#${createId(content)}`}>{content}</h3>
  }

  if (type === Element.heading4) {
    return <h4 id={`#${createId(content)}`}>{content}</h4>
  }

  //returning null at the end falls back to the default behaviour
  return null
}
```

With this in place you should now be able to inspect your blog headings and see that `id`s are present.

This also allows you to link to your headings! If you copy the generated id and add it to the end of your url, you should jump to that section of the page.

It’s not very useful without real links though, so let’s create those too!

## Create a sidebar

Next up we can create our sidebar.

This can be as simple or as complex as you’d like - I went for a simple sidebar that shows just the table of contents and a newsletter form (if there’s space).

I plan on making this sidebar sticky, so it follows us down the page. That limits how much vertical space we have to work with, so I can’t add in much more than this.

Our general sidebar layout is pretty straightforward

```jsx
export const BlogSidebar = ({ slices }) => (
  <aside>
    <h2>Table of Contents</h2>
    // Our contents will go here // We still need to build this component
    <Contents slices={slices} />
  </aside>
)
```

The hard part is figuring out our contents…

## Create our dynamic Table of Contents

So in order to create our contents we need to go through our page content and find all our headings.

We’re already passing our page content as `data` above, so now we need to find our headings.

**Step 1: Loop through our individual page slices and find our content fields**

```jsx
const Contents = ({ slices }) => {
  return slices.map((slice) => {
    // we only have one Rich Text slice type named "content"
    if (slice.slice_type === "content") {
      // Pass our rich text for link generation
      // Then Return our links
      // We still need to build this component
      return <ContentLinks field={slice.primary.content} />
    }
    // we don't need anything else from other slices, so we just ignore them
    return null
  })
}
```

Note that this doesn’t need to be done if you’re just using a single Rich Text field for your entire post. I’m using slices with Rich Text, Images, and other content types. We only care about ones with Rich Text in as they’re the only ones which can hold headings.

If you aren’t using slices, you can just pass in your single rich text field.

**Step 2: Find our Links**

Next up we want to find our links in our content. This means we need to find our `h1`, `h2`, `h3` & `h4` elements which will form the basis of our links.

Remember, we can specify exactly what we want to return from our Rich Text fields by passing a `components` function to our `PrismicRichText` component

```jsx
const ContentLinks = ({ field }) => {
  // This returns your rich text field, usually that means every rich text element
  return <PrismicRichText field={field} components={components} />
}
```

We’ve already explained how the serializer works, so we can go ahead and add our links. This time though, we _don’t_ want to fallback to the default functionality. We only want the headings.

```jsx
const ContentLinks = ({ field }) => {
  return <PrismicRichText field={field} components={components} />
}

const components = (type, element, content) => {
  // We return a basic p tag for all our heading tags, instead of the default heading
  if (type === Element.heading1) {
    return <p>{content}</p>
  }

  if (type === Element.heading2) {
    return <p>{content}</p>
  }

  if (type === Element.heading3) {
    return <p>{content}</p>
  }

  if (type === Element.heading4) {
    return <p>{content}</p>
  }

  // for everything else, we return nothing
  return ""
}
```

If you run this now, you should see that you’re getting a list of your headings as `<p>` tags. This is the basis of our table of contents! Now we just need to add links to make them work.

### Generating our links

Now we have our headings separated our from our content, it’s finally time to make our links!

First, we’ll need to find the IDs from our headings so we can link to them.

Remember that createID function we used earlier to create id’s on our heading tags? Now we can reuse that same function to create the same id’s again, but this time we’ll be outputting the contents into a link.

Here’s that function again for reference

```jsx
// This is the same function used earlier to create the IDs on the heading content
const createID = (string) => (
	string
    .toLowerCase() //lowercase for consistency
    .replace(/[^\w\s]/gi, "") //remove special chars
    .replace(/\s+/g, "-"); //replace spaces with hyphens
)
```

Now we can use it to create our anchor link

```jsx
const components = (type, element, content) => {
	if(type === Element.heading1) {
		return (
			<a href={`#${createId(content)}`}>
				<p>{content}</p>
			</a>
		)
	}

	// we can repeat this for all other headings
	if(type === Element.heading2) {...}
	if(type === Element.heading3) {...}
	if(type === Element.heading4) {...}

	// and return empty again for anything that's not a heading
	return ""
}
```

And now we finally have a table of contents with links!

One thing you might want to do additionally is adding in styling to create a hierarchy in your table of contents

```jsx
const components = (type, element, content) => {
	if(type === Element.heading1) {
		return (
			<a href={`#${createId(content)}`}>
				<p>{content}</p>
			</a>
		)
	}

	if(type === Element.heading2) {
		return (
			<a
				href={`#${createId(content)}`}
				// adds a margin left for secondary headings, use whatever styling you're comfortable with
				className="ml-4"
			>
				<p>{content}</p>
			</a>
		)
	}

	// we can add different styling for different heading levels if we want, but if not remember to return them anyway
	if(type === Element.heading3) {...}
	if(type === Element.heading4) {...}

	// and return empty again for anything that's not a heading
	return ""
}
```
