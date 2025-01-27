---
title: "The future of Jamstack frameworks: Astro, Next.js, Server Components and Dynamic Islands"
description: The web is changing. Frameworks like Next.js & Astro are moving away from shipping lots of JavaScript by using Server Components. Here’s why that matters
published: true
publishDate: 2023-05-09
# updatedDate: 2021-01-01
tags:
  - Astro
  - NextJS
---

Nearly a year ago I wrote a draft blog post called “Why Astro is the future of the web”. I was incredibly excited after hearing about their pretty unique (but also somehow incredibly simple) approach to handling JavaScript - only use it where it’s actually needed.

Since then, I’ve been proven right, with Next.js adopting React Server Components and pushing them full force in their latest version with no sign of slowing down, and other frameworks like Nuxt and Solid.js showcasing very similar approaches.

I’ve decided that this blog post can’t wait any longer.

We’re on the cusp of big changes in how the web works.

## Reshaping the web

### What are Dynamic Islands?

Dynamic Islands are a relatively new concept in frontend development. They refer to the process of rendering small, interactive parts of a webpage on the client-side (in the user's browser) while the rest of the page is rendered on the server-side.

This completely changes the traditional dynamic, where even if code was rendered on the server beforehand, the entire website would be re-rendered once the page loads adding a layer of JavaScript even if there was no interactivity - also known as Hydration.

This allows for faster loading times and a better user experience, as users only need to download the code necessary for the parts of the page they can actually interact with.

### What is Astro?

[Astro is a modern frontend framework](https://www.notion.so/af3017fdb24f418b98831e3711c7d2a8?pvs=21) designed to optimize websites for performance by default. It combines the best practices of static site generation and server-rendered components to deliver fast-loading websites with minimal JavaScript.

Astro achieves this by using Dynamic Islands to only send the necessary code to the browser.

### Why is Astro important?

Astro is important in this conversation because it was the first framework (or at the very least, the most popular at its release) to allow users to play with dynamic islands in real code environments.

Astro provided a place where any developer could experiment and use Dynamic Islands in real production code.

Other frameworks, both small like Solid.js and large ones like Next.js have quickly caught up but Astro and the popularity surrounding it at launch certainly started the conversation for reshaping the web.

### What are Server Components?

Server Components are a new feature in the React ecosystem that enables rendering parts of a React app on the server while preserving the interactivity and responsiveness of client-side rendering.

Sounds familiar? It’s Dynamic Islands.

<aside>
💡 Universally, the ecosystem seems to be adopting “Server Components” as the name for this methodology, even outside React. You might see “Dynamic Islands” used instead, but they are effectively the same thing.

</aside>

You get all the same benefits too. Smaller bundles, faster load time, and interactivity isolated to only where it’s needed.

This has been in development for some time, but when compared to Astro (which is a new framework), React Server Components have taken time to work their way through to consumer architecture because of the relatively widespread usage of React.

### How does this apply to Next.js?

[Next.js is a popular frontend built on React](https://www.notion.so/What-is-Next-js-and-Why-is-Next-13-a-game-changer-in-2023-e29639cff0e342afbe2a34a5d0861169?pvs=21). It’s highly focused on creating the best developer experience for creating React applications, often being on the cutting edge and regularly creating or utilising new features to give their users the best.

[What is Next.js and Why is Next 13 a game changer in 2023?](https://www.notion.so/What-is-Next-js-and-Why-is-Next-13-a-game-changer-in-2023-e29639cff0e342afbe2a34a5d0861169?pvs=21)

And it works, with Next.js leading the market for both React frameworks and frontend frameworks as a whole.

It has recently introduced support for Server Components, enabling developers to optimize their applications by rendering parts of them on the server. This improves performance by reducing the amount of JavaScript sent to the browser and can lead to faster loading times and better user experiences.

### Next.js vs Astro

If Astro uses Dynamic Islands and Next.js uses Server Components, which are effectively the same thing, how do you know when you should choose to use Next.js and when should you choose to use Astro.

Both Next.js and Astro are great choices for building modern frontend frameworks, but there are a few differences to be aware of.

Next.js is built on top of React while Astro is built using Vite, a language agnostic architecture. React is a popular language but if you’re more familiar with another language, like Vue or Svelte, Astro might be the better choice.

Next.js has also currently only released Server Components in it’s beta `app` folder release, which isn’t production ready. Astro, by comparison, is ready for production so if you want a stable platform Astro might be the one to go with.

However, in the long run Next.js and React as a whole have a broader community which can provide support, as well as packages and libraries to use with the new features released. Astro may be ahead right now, but it’s quite likely that in time the React community surrounding Next.js will provide a lot of additional value there.

## The future of Jamstack and the web

### Why does this matter for businesses?

Whether you’re looking to upgrade your technology stack to the latest architectures, or if you’re just keeping up to date with what’s changing, it’s interesting to see the patterns appearing.

Platforms are moving away from the hydration model which has existed for years, and fast.

They’re serving far less Javascript to the client, making for faster websites.

That’s great news, as it provides a better experience for your users, and creates a more accessible web.

### What’s next?

Once these features start to become mainstream, it’s likely we’ll see rapid changes from other services as they start to adopt, and expect them.

It’s also likely that we’ll see users start to appreciate the improved performance, with some loading times feeling instantaneous on high-speed internet connections, making users less tolerant of poorly optimised websites.

## Conclusion

It’s an exciting time to be working as a frontend developer and whether you’re a fan of Next.js, Astro, or are just hearing about them for the first time the changes they’re driving forward will have big impacts on the web in the future.

I can’t wait to see what comes next.
