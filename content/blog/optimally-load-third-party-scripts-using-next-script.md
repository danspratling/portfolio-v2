---
title: Optimally load third party scripts using Next/Script
description: Loading Scripts across your Next.js website can be difficult, with lots of different ways to use them. Next/Script ensures you load them efficiently, every time
published: true
publishDate: 2023-07-03
# updatedDate: 2021-01-01
tags:
  - nextjs
  - performance
---

Next.js provides a Script component to automatically optimise your website or application’s external resources. This was initially introduced in Next.js version 10 and has continued recieving improvements over time.

When working with applications, large or small, it’s easy to run into a problem that has already been solved by an external resource. Often, these are turned into npm packages, but there are plenty of tools that still require being loaded the old fashioned way, like analytics or fonts.

But it can be easy to forget that these resources delay page loading and especially as they add up over time, can lead to poor user experience across your site.

It would be great if we had a tool that could load scripts the best way, without having to think about it.

That’s where next/script helps!

## **What is next/script?**

Next.js next/script allows developers to optimize the loading of external scripts in their Next.js application. This feature allows your Next.js application to dynamically determine when to load external scripts based on the user's device and network conditions.

## **How it helps**

By using next/script, you can ensure that your scripts are loaded optimally within your Next.js application. This leads to faster loading times and a better user experience.

You can also use this to easily defer the loading of non-critical scripts, which can further improve the performance of your application.

Using next/script helps ensure teams work in a consistent workflow, by providing one source of truth for loading external scripts, and automatically optimising files correctly along the way.

## **Getting started**

To use `next/script` in your Next.js application, you first need to set it up. Here are the steps to do that:

1. Import the **`Script`** component from **`next/script`** in your application.
2. Wrap your script tags inside the **`Script`** component.

Here's an example:

```jsx
import Script from "next/script"

function MyComponent() {
  return (
    <>
      <Script src="https://example.com/script.js" />
    </>
  )
}
```

The **`Script`** component takes two props:

- **`src`**: the URL of the script you want to load.
- **`strategy`**: how you want to load the script. There are three options:
  - **`beforeInteractive`**: load the script as soon as possible, but before any user interaction.
  - **`afterInteractive`**: load the script after the page has loaded and any user interaction has occurred.
  - **`lazyOnload`**: load the script only when the element it is attached to is in view.

It can also be loaded at a page level (for one off script usage, see above) or across your entire application if you use it in a layout or app file.

```jsx
// app/layout.tsx or pages/_app.js
import Script from "next/script"

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src="https://example.com/script.js" />
      <Component {...pageProps} />
    </>
  )
}
```

## **Understanding performance benefits**

Using next/script can have a significant impact on the performance of your Next.js application. By optimizing the loading of external scripts, you can reduce the amount of time it takes for your application to load and improve the user experience.

Here are some of the performance benefits of using next/script:

- Faster page load times: By deferring the loading of non-critical scripts, you can reduce the amount of time it takes for your pages to load.
- Improved page speed scores: Faster page load times can lead to higher scores on page speed tests like [Google's PageSpeed Insights](https://www.notion.so/Google-Lighthouse-What-is-it-and-why-is-it-important-ceb0727cc28c43d3bcf7f56425f7727e?pvs=21).
- Better user experience: Faster page load times and improved page speed scores can lead to a better user experience, which can result in higher engagement and conversions.

Next/script is a powerful feature that can help optimize the loading of external scripts in your Next.js application. By utilizing it, you can improve the performance of your application, reduce page load times, and provide a better user experience for your users.
