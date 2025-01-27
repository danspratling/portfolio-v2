---
title: Load components on demand with Next/Dynamic
description: One of the most common reasons for slow websites is loading too much JavaScript. Using Next/Dynamic helps reduce that and improves performance across your site
published: true
publishDate: 2023-07-10
# updatedDate: 2021-01-01
tags:
  - nextjs
---

As your website grows, so do the components and functions within it that allow you to provide functionality across your site. Most pages won’t need many of these components, but it can be tricky to make sure that you’re loading _only_ the ones you need, especially when site content start to become more dynamic, like when you introduce a headless CMS.

If you’re building a mostly static website using a headless CMS, next/dynamic can be the difference between a super-fast website and a super-slow one.

`next/dynamic` is a simple-to-use tool provided within the Next.js ecosystem that allows you to make sure you’re loading exactly what you need.

## **What is Next/Dynamic?**

`n**ext/dynamic**` is a module provided by Next.js that enables you to load components asynchronously, also known as code splitting. This means that the component is only loaded when it is needed, instead of loading it with the initial page load. This can greatly improve the performance of your application by reducing the bundle size and decreasing the time it takes to render the page.

## Is next/dynamic still relevant in Next.js 13?

In Next.js v13 and above, you have the option to use React Server Components if you choose to use the `app/` folder. This seems to be the way Next is pushing users for upcoming releases, though you still have the option to use the `pages/` folder too.

React Server Components work in Next.js by taking your code and rendering them on the server, returning pre-rendered static code to the client. This removes the need for hydration and saves on your Javascript bundle, meaning it does the optimisation next/dynamic was doing on the server making it much less relevant.

If you’re still using the pages folder, or you’re using lots of `'use client'` components then next/dynamic may still be important, but if you’re mostly using Server Components to render your site (anything inside `app/` without `'use client'`) then you’ll probably not need next/dynamic.

## **How does next/dynamic help?**

By loading components only when you need them, you can significantly reduce the amount of code you serve to the client. That, in turn, provides a better experience for your user by ensuring that when they visit your website it’s more responsive.

If you _don’t_ dynamically import components, then everything gets delivered regardless of if it’s used or not. That can be detrimental for page speed, especially if you’re using a highly dynamic application like a headless CMS, which can often serve tens or even hundreds of _potential_ components, but with most pages only using a few.

### Faster initial page load

One of the most significant benefits of dynamically importing components is that it can significantly reduce the initial page load time. By only loading the components that are required for the current page, you can avoid loading unnecessary code and resources. This can help improve the user experience and reduce bounce rates.

### Smaller bundle sizes

Another benefit of dynamically importing components is that it can help reduce the size of your application's bundle. Components that are not required on the initial page load are not included in the main bundle. This can help improve the performance of your application and make it easier to maintain.

### Avoids unnecessary thread work

Dynamically importing components can also help avoid unnecessary thread work. Components only get loaded until they are needed. This can help improve the performance of your application and reduce the risk of thread-blocking issues.

## **Getting started**

To get started with **`next/dynamic`**, you need to set up your Next.js application. You can create a new Next.js application using the **`create-next-app`** command or by cloning the Next.js starter template from GitHub.

Once you have set up your Next.js application, you can start using **`next/dynamic`** to load your components dynamically. To do this, you need to import the **`dynamic`** function from the **`next/dynamic`** module. You can then use this function to create a new dynamic component.

Here's an example of how to use **`next/dynamic`**:

```
import dynamic from 'next/dynamic'

const DynamicComponent = dynamic(() => import('./components/DynamicComponent'))

function HomePage() {
  return (
    <>
      <DynamicComponent />
    </>
  )
}

export default HomePage
```

In this example, we are dynamically importing the **`DynamicComponent`** component from the **`./components`** directory. This component will only be loaded when it is needed, rather than being loaded with the initial page load.

It may not be clear what the benefit is by looking at the code above, but when we utilize this with a headless CMS with a variety of optional components, you can see how this might be useful

```jsx
// These are all of the optional components used on the Skyward site.
// We use this code alongside a separate componentMap function, ensuring we only load what's needed
import dynamic from "next/dynamic"

export const components = {
  blog_section: dynamic(() => import("./sections/BlogSection")),
  call_to_action: dynamic(() => import("./sections/CallToAction")),
  contact_form: dynamic(() => import("./sections/Contact")),
  content_section: dynamic(() => import("./sections/ContentSection")),
  features: dynamic(() => import("./sections/Features")),
  hero: dynamic(() => import("./sections/Hero")),
  image_section: dynamic(() => import("./sections/ImageSection")),
  logos: dynamic(() => import("./sections/Logos")),
  newsletter_section: dynamic(() => import("./sections/Newsletter")),
  project_section: dynamic(() => import("./sections/ProjectSection")),
  team: dynamic(() => import("./sections/Team")),
  testimonial_section: dynamic(() => import("./sections/TestimonialSection")),
}
```

As you can see, some components like `Hero` or `CallToAction` are likely to be used very regularly, while others like `TestimonialSection`, `Team`, or `BlogSection` might be used a lot more sparingly, and when they _aren’t_ being used, we don’t want to load them.

## **Benefits for Marketing Sites & Ecommerce**

Marketing sites and ecommerce applications can benefit greatly from using **`next/dynamic`**. Here are some examples of how it can help:

### **Example component object/headless cms**

As I alluded to before, **`next/dynamic`** is great when you have components that rely on external data, such as an object or headless CMS. By using **`next/dynamic`**, you can ensure that these components are only loaded when they are needed, rather than being loaded with the initial page load.

### **Great for flexible landing pages**

`next/dynamic` is also great for creating flexible landing pages. Landing pages are often templates that rely on optionally having many different component types, and loading all of them with the initial page load can significantly slow down the page, especially if many of them aren’t being used. By using `next/dynamic`, you can load only the components that are required for the current page, while still allowing for a flexible layout.

### Great for statically generated sites

Even though `next/dynamic` is designed to dynamically load content on the fly, it is still incredibly useful for sites using Static Site Generation (SSG). When the build process runs through the code, it respects `next/dynamic` when it sees it and only statically generates elements of the site that are actively loaded as if the page was being initally loaded by a browser, ensuring your bundle is small and your site loads incredibly quickly.

## Benefits for SaaS

SaaS applications can also benefit greatly from using `next/dynamic`. They tend to be much more dynamic in nature than other forms of website, often fetching data regularly and requiring many special user interactions. Here are some examples of how it can help:

### Great for anything that’s not needed until another action has been performed.

`next/dynamic` is great for any component that is not required until another action has been performed. This can include components such as forms, charts, and maps, which can significantly slow down the initial page load if they are loaded with the rest of the page, and may be completely unused on many user visits.

One example scenario for `next/dynamic` in a SaaS application is when you have a modal component. These are never displayed before a user interacts with something on the site. By using `next/dynamic`, you can ensure that the modal component is only loaded after a action has ocurred, rather than being loaded with the initial page load.

## Conclusion

`next/dynamic` is a powerful feature provided by Next.js that can help improve the performance of your application. By dynamically importing components, you can reduce the initial page load time, decrease the bundle size, and avoid unnecessary thread work. This feature is useful across a wide range of sites, where layouts can be flexible by only loading components when they are needed, greatly improving the user experience.
