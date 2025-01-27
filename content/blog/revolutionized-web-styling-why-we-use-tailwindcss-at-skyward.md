---
title: "Revolutionized Web Styling: Why we use TailwindCSS at Skyward"
description: Tailwind is a great tool and a staple of our development, making us far more consistent and efficient when writing css. Here’s how
published: false
publishDate: 2023-06-19
# updatedDate: 2021-01-01
# tags:
---

We’ve been working with Tailwind since the start of Skyward. It’s a great tool and a staple of our development, making us far more consistent and efficient when writing css.

But, I haven’t always thought of it that way.

When I first saw Tailwind I thought it was ugly.

This isn’t an unusual viewpoint. I think most people who’ve never worked with Tailwind before think it’s ugly. Sometimes, I still think it’s ugly.

But after having worked with it for a few months I started to see the benefits.

## Step back with me a few years…

I was working at a web development agency (just like Skyward). We had about 6 different client projects we regularly worked on. None of their CSS had any consistency.

Half were built with BEM, the rest were built with other half-baked CSS approaches. Some of these projects were relatively new, others had been managed by the company for years being passed through many teams of developers.

Nobody really knew how to manage the CSS of any of the projects. It was unclear what CSS was being used, and what wasn’t. None of the decisions made had been documented. Nobody knew what approach was best for a new project. Files often ended up disorganised and most of it became append-only.

This was pretty typical, and a problem I’d become so used to. Every agency struggled with this but nobody had a solution. It was just a part of the process.

## Then I started working with Tailwind

Once I gave Tailwind a try, I started to realise that many of these problems were solved.

Here are just a few ways Tailwind can help you combat these problems…

### **Component driven**

By placing styles directly in your components, Tailwind isolates your code making it easy to edit or delete, without worrying about affecting other code.

### **Self-documenting**

Unlike standards like BEM or OOCSS, Tailwind isn’t confusing to learn how to use. It’s css classes, but they just do one thing. Furthermore, their official documentation is great, making it easy to learn once and use _the same way_ across every project.

### Fewer decisions

Developers make arbitrary decisions all the time like file naming, placement, or class naming. By removing these decisions you reduce the complexity of a developer’s workflow and make the wider codebase easier to understand.

### Automatically optimised

By purging unused CSS across your file’s Tailwind’s final CSS bundle is almost always smaller than other alternatives, which improves your final website performance for your users.

Now we use Tailwind with every project we can because it makes development easier. We don’t have to think about naming or the location of styles or worry about accidentally making changes and breaking components elsewhere in our projects.

Tailwind simply makes development easier — and that’s why we use it.

_This article was inspired by [**Why we use Tailwind at ConvertKit**](https://convertkit.engineering/2023/03/27/why-we-use-tailwind/)_
