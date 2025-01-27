---
title: When to use a static website vs server-side websites
description: Static? Server? SPAaaaagh! With the modernisation of the web, it can be hard to know which approach is right for your website. Here's how to choose.
published: true
publishDate: 2020-09-09
# updatedDate: 2021-01-01
tags:
  - development
  - performance
---

## What are static websites?

A static website is a website built using HTML, CSS, and JavaScript. Without getting too technical, when you load a webpage it's entirely ready for you to view before you navigate to it. This website is static, and that's part of the reason why pages load so quickly.

You can build static websites in a number of ways. The old fasioned way is to simply write out your code directly into their respective files, but this approach is messy and makes maintaining your website hard.

The modern approach is to use Static Site Generators to handle your files, which take a reusable form of your code and build the static files for you. This means developers have to think less about maintaining their code and can focus more on making the websites as powerful as possible.

> Static Site Generator (or SSG) is just a buzzword that means your site gets built into ready-to-use files.

The downside is that the larger your website gets, the harder this is to manage. Every page on your website will be created (and often re-created) whenever a change is made which only gets slower the more pages which are added.

## What are server-side websites?

Server-side websites are the more traditional websites. Typically, if your website has a CMS it's probably server-side. What this means is that the webpages are built when the user tries to view them, rather than when the developer finishes working on them.

This build on the server means that the user has to wait a few extra milliseconds to get their page but traditionally the benefit of not having to understand code to make changes far outvalued this small delay.

> With the rise of cloud computing, both server-side and static websites can be built using a CMS so this is far less of a factor now.

It tends to be a lot faster to get started with server-side websites as many of the options come with pre-built themes you can start using fairly quickly and sometimes without even understanding code. WordPress and Shopify are great examples of this.

However, with your files only being generated when the user tries to access them this leaves your website much more vulnerable to problems if the server goes down.

## Are there any other options?

Actually, yes. The web is a complex place and the options available have increased dramatically in recent years.

Another option you might consider are Single Page Applications. This is a website which is a single page, and instead of navigating to a new page when a link is clicked, instead the current page updates to pull in new data.

As you might expect, this is awful for Google as your page is no longer predictable, removing and replacing content on the same page as your user navigates around.

But this might be perfect for your SaaS product, where you have to log in to view most of the website and always want to keep a consistent layout when the user clicks the link (like an App would).

And you can combine these options if you choose the right tool. Next.js offers both static and server rendered pages which might be great for a store (server) with a lot of detail pages (static). Gatsbyjs offers Hydration which means your entire website is static, but you can use SPA features within those pages after it's loaded.

## Which should I choose?

There is no clear answer to this question as it depends entirely on what you're trying to create.

Static websites: A few (<1000) pages where your website doesn't change regularly

Server-side websites: Many similarly designed pages or content which updates very regularly.

Single Page Application: A product which mainly relies on a single screen, and doesn't care about Search Engines. Usually a SaaS product.

Or, mix and match these ideas if your idea requires that. The web is flexible so figure out what works best for your needs and pick the right approach to match.

If you're looking to create your next excellent idea but aren't sure which technologies to use, I can help you. [Book a discovery call](https://danspratling.dev/contact/) and we can discuss how to build the best product possible.
