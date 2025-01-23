---
title: Headless CMS explained - an unbiased opinion
description: Headless CMS. Traditional/Monolithic CMS. What are they? This complete guide will answer all your questions (and no, we don’t have a CMS to sell).
published: true
publishDate: 2023-01-16
# updatedDate: 2021-01-01
tags:
  - Headless CMS
  - blog
---

Content Management Systems (CMS) provide a vital role in any business, allowing you to update your content whenever you like.

But what’s the difference between a headless CMS and a traditional (or monolithic) CMS, and when should you go headless?

That’s what I’m here for!

As noted in the title, we’re not selling you a CMS so my opinions here are completely unbiased. Any headless CMS recommendations are exclusively through great impressions.

## What is a Headless CMS?

A headless CMS is a content management system that separates the “head” (your website, or app’s frontend code) from the “body” (your content).

More specifically, headless CMS do not provide any frontend at all, allowing you to choose exactly how you put your website or application together.

![Headless-CMS-explained-simple.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/eea4bf18-368b-4303-abc5-704e86e49046/Headless-CMS-explained-simple.png)

By focusing exclusively on building the CMS, the teams behind them can create better experiences that are less opinionated on the solutions they create. This allows them to be used by more people with fewer limitations and often better experiences for the entire team. I’ll talk more about benefits later.

Examples: Sanity, Storyblok, Strapi, Prismic, Contentful, Dato

But you may have heard of other types of CMS such as:

- Traditional CMS
- Decoupled CMS
- No-Code CMS

So what’s the deal with those?

### What’s a **Traditional CMS**

A CMS that provides both a frontend and backend that are tightly coupled and difficult to access individually. These are harder to find now in their original states, as most have been forced to adapt into Decoupled CMS to keep up as our online needs have changed.

![Traditional-CMS-explained-simple.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3bd3af47-de3e-4b77-b527-658dd48e4d6b/Traditional-CMS-explained-simple.png)

Examples: Wordpress, Drupal, Joomla, Craft

### What’s a **Decoupled CMS**

A decoupled CMS is a traditional CMS that has been expanded to allow you to optionally build a custom frontend on-top of the original code. Data is provided through an API so that you can use it similar to a headless cms, bringing older architecture closer to modern standards.

![Decoupled-CMS-explained-simple.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c28e06bb-1074-4deb-853b-be20cecd4dec/Decoupled-CMS-explained-simple.png)

Examples: Wordpress, Drupal, CraftCMS (all using plugins to extend their default functionality)

### What’s a **No-Code CMS**

A No-Code CMS allows you to put together a website using purely visual elements, but do not require developers to edit the underlying codebase. You’re often limited to how you can edit code, which is why it’s described as no-code.

Under the hood, this works very similarly to a traditional CMS.

![Nocode-CMS-explained-simple.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/419105c9-24df-4cbf-a6fc-d63e288ebda9/Nocode-CMS-explained-simple.png)

Examples: Squarespace, Webflow, Framer, Wix

Each of these solves a different problem but their main goal is always the same — to provide the best content editing experience that they are capable of.

But not every content editor is the same.

## How do Headless CMS work?

A headless CMS works by providing the editors with an interface where they can manage content. A great headless CMS will provide this in a user-friendly way that gives flexibility and makes it clear what’s being changed. When content is changed, the CMS will translate this into an API layer that can be accessed by any frontend developer.

They essentially turn a content editor into standardised raw data (JSON or GraphQL).

Most headless CMS are offered as Software as a Service (SaaS), which provides a web application to host and edit your content in the cloud. This can make it easier to get a project (or many projects) up and running as it’s only a few button presses. It also means you don’t have to worry about general maintenance or security updates as they are handled directly through the CMS provider.

Because what’s being served is raw data and nothing else, most headless CMS often have very generous free tiers to allow users to get familiar with how the headless CMS works or even build entire applications before inviting additional users to the project.

Some headless CMS also offer alternate hosting solutions, allowing you to host and maintain the server yourself, though this does require additional maintenance.

## Why go headless?

> The less tightly coupled all parts of your website are, the easier they are to maintain in the long term

### Greater Customization

Going headless allows you to pick the tools that are best suited for your needs and interconnect them however you need. You’re not limited to a single platform.

That additionally allows for a better developer experience as your team can build the way they want, with the languages and systems they prefer. That can provide additional benefits like making hiring easier, as you can choose tools based on market demand, and increasing satisfaction of your developers which will lead to better results delivered.

### Better Experience

By allowing full control over how you build your website, headless CMS provide a better experience by default across all your teams.

- Editors update content every day, so it’s essential to give them the platform(s) that work best for their needs. Headless allows you to do that without compromising in other areas.
- Developers can work with the languages, frameworks and integrations that best suit their needs, rather than being limited by the language and plugins of the CMS.
- Managers can keep track of changes more easily with headless frameworks as they’re designed to integrate with their other tools, making sure everyone’s on the same page and releases are happing as planned.

### **More Scalable**

With your content organised by need rather than where it’s being displayed, it’s far easier to manage content changes _and_ deployments. Editing content in one place, like your CMS or ecommerce system, will ensure all your websites, apps, and other systems all update simultaneously.

That not only simplifies changes, but allows you to scale your platforms or add new integrations much more easily than with a traditional CMS.

### **Increased performance**

By serving _only_ data and not worrying about how the presentation layer works, headless CMS put performance first, making it significantly easier to deliver a site that loads quickly which is essential for finding new customers and keeping existing customers engaged.

By going headless, you can keep your builds simple instead of wasting time trying to make sure the pre-built frontend and backend code is high performance. That makes your developers more cost effective, giving them more free time to focus new features and improvements in other areas.

### **Improved Security**

By separating your content layer from the presentation layer, you also remove the direct connection to your CMS, which makes it significantly harder to find and exploit vulnerabilities.

It is possible that there are security vulnerabilities with the CMS themselves (as with any CMS) but if you’re using a hosted CMS, it automatically updates which removes security vulnerabilities as they are found.

## Headless vs Other types of CMS

### Headless vs Traditional

Traditional CMS are strong at allowing you to get started quickly while still offering customisability in areas that you need. Their code is strongly integrated which, as a singular platform, makes it easy for people to build plugins and share work. That’s because traditional CMS are often designed with a single context in mind — usually a website.

![Traditional-CMS-explained-detailed.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/85c91846-7045-4986-81fb-75e00feb7671/Traditional-CMS-explained-detailed.png)

But what if you don’t want a website? A headless CMS lets you manage your content no matter your use case. Removing the tight coupling reduces problems when you need to be flexible. You can make changes in the way _you_ want, rather than the way the CMS is set up to handle them. And because things are built to your needs for the project, it significantly reduces complexity if you want to add more functionality at a later time.

Headless CMS were born to tackle the problem of tightly coupled systems. These platforms were created to solve a single problem but over time grow into monoliths. That creates a lot of technical debt that needs to be maintained. In contrast, a headless CMS allows you to create one specialised platform to handle content, another for eCommerce, and so on, which provides a more flexible and streamlined solution all round.

### Headless vs Decoupled

A decoupled CMS is an adaptation of a traditional CMS, where they have added an API layer on top of the current platform to allow the option of being used headlessly.

![Decoupled-CMS-explained-detailed.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8245a0c9-2c02-46e3-a0fb-0dcd30e48ff3/Decoupled-CMS-explained-detailed.png)

The problem is that traditional CMS have had to adapt, as they weren’t built with headless approaches in mind.

Providing both a coupled frontend and an API gives you more options, but it also increases the complexity of the CMS and splits the focus of the team supporting it, as you now have two different integration methods to maintain. For teams building headless CMS, they only ever have to focus on the experience up to the API, which is a lot easier to manage making progress faster.

But, if you’ve already built a complex website on top of a decoupled CMS then updating the frontend without completely rebuilding the backend may be the way to go.

### Headless vs No-Code

No-Code platforms like Wix, Squarespace, and Webflow allow you to create a website without ever writing a single piece of code. This is great for smaller businesses that don’t want (or don’t need) to hire developers to create or maintain their websites. Under the hood, these are effectively traditional CMS but with all the code obfuscated away.

![Nocode-CMS-explaned-detailed.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b220f37b-8fee-49db-99dc-8c7adb00c1c2/Nocode-CMS-explaned-detailed.png)

The biggest drawback of this approach is that it doesn’t allow for growth. As you don’t have control over the code, you are very limited in how you can adapt and grow over time. This is especially limiting as most no-code platforms have a hard page limit. Scalability, conversely, is where headless websites shine.

If you’re planning on growing your website long-term, headless is the way to go.

## Headless is the future

Or more accurately, headless _was_ the future. We’re already there.

You can see this most looking back at the decoupled CMS section above. All traditional CMS have had to adapt to become more like headless CMS to stay relevant.

This is also why there’s some confusion when people talk about “headless CMS”, because most traditional CMS can now be used _like_ a headless CMS.

But they are distinctly different. Why?

True headless CMS have no opinions on what other technologies or tools you use. Other CMS do.

And that allows you to build you website or app however you’d like.

![Headless-CMS-explained-detailed.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b373a074-76a9-4c0f-8c6c-86b7391b309c/Headless-CMS-explained-detailed.png)

## Architecture Examples

### The traditional way

Website & Content: A Wordpress website with WooCommerce for products

Mobile Application: A React Native application using content and products from WordPress

This is a pretty typical instance of a store that’s been built website first, and then with a mobile application added after, but without planning ahead.

While this app uses React Native, our Website uses PHP which means we’re going to need two different developers with two totally different skill sets to support it. As our store grows, we’re limited by what WordPress is capable of.

And you may have already noticed, we’re already using the power of headless here. In this example, this app uses WordPress as if it was headless (ie. decoupled). As soon as you start using multiple systems together you’re pretty much always going to be using some headless approaches.

So what happens if you completely embrace headless?

### The headless way

Website: A Nextjs website

App: A React Native application

Headless CMS: Sanity

Headless eCommerce: Shopify

If we switch over to a headless style of building the store we still get the same solutions for our hypothetical customers - a website and an application - but we gain a few more benefits along the way.

By using Nextjs and React Native, we simplify the work for the team by powering the tools we’re using with a single language. There are some nuances between Web and App development, but there’s a lot more crossover than two totally different languages like we had with WordPress (PHP) and React Native (React), making our team much more effective at sharing knowledge.

Using a dedicated headless CMS means we can keep our website and application content separate and deploy changes only to the platform we need. With WordPress, everything is stored together, so a change is forced to update everything. This can be detrimental when creating new features as changes made might accidentally break other platforms - one of the biggest issue with monolithic platforms.

And as our instances are smaller, they’re easier for the team to maintain for the long term.

### Scaling things up

As you continue to grow you’ll find that using headless technologies effectively becomes essential. We technically cheated in our traditional example above. If we weren’t using headless technologies at all then there would be no way for our Website and Application to share data.

Businesses at scale require headless systems to survive. eCommerce businesses with multiple manufacturers use headless systems (even if they don’t realise it) to share data with their websites, mobile apps, retail displays and self-checkouts.

SaaS platforms are similarly built on top of headless technologies to survive, with tools for payments (stripe, paddle) and authentication (oAuth, okta) being entirely headless.

That’s the beauty of going headless. The majority of the web already works that way, espeially in larger companies with more sophistocated systems, even if you don’t see it working behind the scenes.

## Use cases for using a Headless CMS

### **Websites & Web Apps**

A popular choice for using a headless CMS is to manage the content within [a Jamstack site](https://www.notion.so/What-is-the-Jamstack-c49add84b1154a468839470e417b095e?pvs=21). You can use static-site-generators which are great for informational sites, or you can use frameworks or server-side-renderers for more complex builds like web applications. You’re pretty much unlimited in how you can mix and match the tools you use to best suit your needs.

### **eCommerce sites**

By integrating with an eCommerce solution like Shopify or BigCommerce, a headless CMS can provide a sophisticated way to update the content on your eCommerce site while leaving the product management to a specialised service.

### **Mobile Apps**

An alternate choice for a headless CMS is to instead manage the content of a mobile application. The content layer would act very similarly to a website, while the presentation layer would be swapped out for an Android or iOS-compatible platform. This approach pairs well with a SaaS or eCommerce application.

### **Products & services**

Most headless CMS are flexible enough to be used for all kinds of purposes. Websites and apps may be the most familiar use case, but you could use them for any scenario: watch apps, retail kiosks, documentation, AI, and anything else you can think of. All from one place.

## Which headless CMS should I use?

There are a lot of options to choose between which can make deciding overwhelming. Every headless CMS offers a feature list so it can be valuable to compare.

The best CMS will allow you to grow — after all, your business will also be growing over time. So, you want to make sure you’re not limited by your CMS.

If there are any specific features that you value such as a visual editor, collaborative editing, or workflows then it’s important to consider that too as all headless CMS put their focus on different areas.

If you’re struggling to evaluate which headless CMS is right for you, [we’ve created a dedicated guide to help](https://www.notion.so/How-to-choose-the-right-headless-CMS-for-you-b198f935d6304345ad39b5f7a80aa5c2?pvs=21).

# Ready to make the switch?

We specialise in designing and building headless platforms.

Let’s work together to build the perfect one for you.
