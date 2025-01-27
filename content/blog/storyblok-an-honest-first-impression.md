---
title: "Storyblok: An Honest First Impression"
description: Let’s give the Storyblok CMS a try for the first time and see what it does right, wrong, and if it’s something we’ll use in the future!
published: true
publishDate: 2022-12-26
# updatedDate: 2021-01-01
tags:
  - Headless CMS
---

# What is Storyblok?

Storyblok is a headless CMS that focuses on creating an excellent experience for marketers, editors, and developers to create an outstanding editing experience across your entire business.

Its notable feature is a visual editor — a popular feature in traditional CMS, like WordPress or Webflow, but a substantially more complex task to achieve in a headless CMS due to how the content is intentionally decoupled from the frontend code.

And yet, Storyblok has somehow achieved that feat making editing content a pleasure. Seeing your content update in real-time makes errors significantly less likely & QA much easier, all while providing all the other benefits a headless CMS offers like total customisation.

But let’s not get ahead of ourselves…

# Exploring the CMS

## First look

When you first sign up, before you’ve even entered your portal, you get the option to create a new (empty) space or try out a pre-built one.

It’s totally optional, but this gives you the freedom to see how to build using the CMS in the way the creators intended. When trying out any CMS for the first time, this is an incredibly helpful resource to have as it gives you options on how to learn.

![Screenshot 2022-11-11 at 12.01.30.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a4dde8a7-f34b-4fd7-bada-ab3899b5325e/Screenshot_2022-11-11_at_12.01.30.png)

Whichever option you choose here, you’ll next be presented with the “Getting started” screen. Another great place to learn in the way that works best for you. You can head over to the docs to find out how to build with Storyblok, integrate your favourite frontend technology, and access your data.

![Screenshot 2022-11-11 at 12.06.31.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6e55bbc1-a319-4cb9-b10c-78964d2bf3cb/Screenshot_2022-11-11_at_12.06.31.png)

Whether you read this or skip ahead, you’re still not done. Head over to the content area and click (or create) a page and you’ll be presented with the tour. This shows you exactly how to use the editor so even if you’ve skipped past all the important information, you won’t be lost.

![Screenshot 2022-11-11 at 12.17.14.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c2dc1fb8-96b7-4996-a029-5c24681fe8f0/Screenshot_2022-11-11_at_12.17.14.png)

So far, onboarding _rocks._

But what does the rest of the editor look like?

## Pages (aka Content)

Every CMS has to handle pages. They’re the core of your website and are obviously essential for getting your website content out for the public to see.

Storyblok handles this better than most, with pages grouped by hierarchy, giving you a clear understanding of where each page sits on the website.

For example, articles are inside the articles folder, which gives us the path `/articles/[slug]` making it nice and easy to visualise where your content is _actually_ going.

![Screenshot 2022-11-11 at 12.50.09.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ebc1401b-a824-453d-b7b9-6fa3082a7772/Screenshot_2022-11-11_at_12.50.09.png)

If you have a root-level page for a folder of content, it’s very easy to see which page that is. Developers will be very familiar with this as it follows the same structure as code folders (`authors/index.html` creates the page at `/authors/`).

![Screenshot 2022-11-11 at 12.56.57.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a99a47db-ff3f-4571-994b-89352b2ee85b/Screenshot_2022-11-11_at_12.56.57.png)

One caveat I noticed here is that Globals like `site-config` and `banners` and content libraries that might or might not be pages (like `authors` and `categories`) could be more clearly separated out from pages that are actually accessible on your website. That would be a nice improvement to make the content more scannable for editors.

![storyblok-content-breakdown.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0ae2e61b-0196-4c2d-b21d-43c6d3016caa/storyblok-content-breakdown.png)

But generally, I’m very happy with this. It does a significantly better job at organising content than many other CMS’ which tend to just dump all your content at the top level.

## Components (aka Blocks)

When building your website the next core feature to think about is reusable components. How are you going to go about building up your pages?

Storyblok handles this within the Blocks library where you can build as many blocks as you’d like, large and small, and even reference other blocks if you’d like.

![Screenshot 2022-11-11 at 14.20.22.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ecd3853e-c4af-402e-9c5b-d17293a43ca6/Screenshot_2022-11-11_at_14.20.22.png)

This also follows the structure of code with components as small as buttons or as large as entire page templates all being grouped together. This can be confusing, but within this area of storyblok you can organise them however you’d like!

My preferred approach is using an [atomic-style design system](https://www.notion.so/Design-Systems-Your-missing-ingredient-for-exponential-growth-57c15648be0e4160ac0d2d3dd1c825be?pvs=21) to clearly indicate which components can be used by which, and where.

- Atoms - Things like buttons
- Molecules - Things like feature cards
- Sections - Content sections like a hero or CTA
- Templates - Your page layouts, which can be reused
- Globals - Things which are reused on every page

This works really well in Storyblok as you can set your page template up with reusable areas that only reference your `sections` block group, making maintenance easy and preventing user error.

Inside each of these components/blocks you can basically define whatever you want. The editor allows you to build up fields however you need, and organise them within tabs for your editors.

![Screenshot 2022-11-11 at 14.23.18.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3bc20821-78f5-489a-8bb3-72f2a071ad18/Screenshot_2022-11-11_at_14.23.18.png)

You can also define previews and preset content to make it even easier for your editors to quickly make changes.

## Asset Library

Another key area for any website is the asset library. You’ll undoubtedly need to store images and Storyblok does a great job of handling this.

When you upload your image you can rename the file, set alt text, and other additional features which apply to this image everywhere it’s used.

![Screenshot 2022-11-11 at 13.57.07.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3146a127-b33a-4942-8f5a-f67be8fe2f40/Screenshot_2022-11-11_at_13.57.07.png)

You can then use this image with its default attributes, or overwrite them on a specific instance where it makes sense to do so.

There are also plenty of quality-of-life features here that make working with assets significantly easier:

- Grouping by folders & tags
- Editing the image directly in the CMS (this also includes asset optimisation on serve)
- Seeing which pages reference the image

## The Visual Editor

I’ve saved this major feature for last. The visual editor is an amazing feature. But even if you don’t use it, Storyblok still has a lot of things going for it.

But let’s be honest. You’re going to use it.

[Screen Recording 2022-11-11 at 14.37.16.mov](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/382b2972-8f50-46de-8e62-607c9d6461c7/Screen_Recording_2022-11-11_at_14.37.16.mov)

Making content changes as easy to validate as looking over to the other half of your screen is a massive win for any team.

It reduces human error, as you can see exactly what you’re updating. That means you can spend less time reviewing your content before publishing as there’s less likelihood of things being put together in a way that doesn’t work (especially when rushed).

# Round up

My first impression of Storyblok is a great one. It’s clear that the CMS has been built with User Experience at its core and the simplicity of creating, editing, and grouping content makes it perfect for developers and editors.

I’m looking forward to digging deeper into some more complex use cases.
