---
title: How a design system enhances your entire team's workflow
description: This is a test
publishDate: 2021-02-19
published: true
# updatedDate: 2021-02-19
tags:
  - career
  - design
  - development
---

## Introducing Design Systems

Well, actually, I'm not really introducing them. Design systems have been around for a LONG time in various forms. Unfortunately, a lot of companies still struggle to understand their benefit or how they can help them with their business.

### What is a design system?

A design system at its core is a collection of components (like a button, form, hero, etc) which are reused across the website. Whether you're a developer or designer and whether you've heard of design systems before or not, you'll almost certainly be using some kind of basic design system.

But many companies I've worked with don't understand the full power of a design system, and don't use it to its full potential, then wonder why their process is messy.

## Why is a design system useful?

Here's a typical website design (i'm using my portfolio as an example). Take a look at the Hero component here.

![Hero design component](https://www.datocms-assets.com/38195/1613731161-screenshot2021-02-14at13-31-30.png)

It's a pretty simple component, and we can safely say that it's going to be used on multiple pages, like the contact page.

![Hero design component reused on the Contact page](https://www.datocms-assets.com/38195/1613731212-screenshot2021-02-14at13-38-04.png)

But what if we change the hero? Say I want to implement a new hero design which incorporates an image. If i make the changes on the homepage we can see that the other pages don't match the design any more.

![The Hero component on the homepage design (left) has been changed but because it's not created as a component in the design system, the contact page design (right) hasn't updated automatically - they are not out of sync](https://www.datocms-assets.com/38195/1613731258-screenshot2021-02-14at14-08-22.png)

Here's where problems start to arise. If every page has a hero, and your website has 8, 12.. or 40 different page layouts you have to change _every page_ in your design, one at a time.

That's a problem. People don't want to do repetitive tasks, and even if they are willing to do so, they'll often be pushed for time, or there are more important things for them to be working on. It's almost guaranteed that your designs will start to fall out of sync. Good intentions aren't enough.

### Improving synchronisation

Every design tool has a way to help you, and your team, improve their workflow.

In XD and Figma, these are called _components_ and in Sketch, these are called _symbols_ but they are really the same thing - reusable elements. For the sake of simplicity, I'll refer to these as components too.

By creating a single component called a hero, detached from any pages, we can then reuse that across our different pages. All that we need to change to make it page specific is the text.

![Creation of a hero component which can be reused across the design and edited in a single place](https://www.datocms-assets.com/38195/1613731344-screenshot2021-02-14at14-32-22.png)

With our blank slate in place, we can then just drop that into our page.

![It's simple to drop a reusable component into our design](https://www.datocms-assets.com/38195/1613733250-ezgif-com-gif-maker.gif)

This makes it much easier to ensure that the components we use across all the pages look and work exactly the same.

And if we want to make changes, it all happens in one place as is immediately reflected across all our pages.

![Demo of our reusable component, which is used in multiple places, changing across all instances when the main component is updated](https://www.datocms-assets.com/38195/1613733379-ezgif-com-gif-maker-1.gif)

### What if we _want_ variation?

We can create components that allow for variation too. Figma allows switching seamlessly between _variants_, while in XD and Sketch you can switch between _instances_. These variations can be as small as a colour change, like a background colour, or much larger like design changes.

This means you get all the benefits of a component without being restrictive.

If you have a specific change that applies to a single page you can always add something directly, but creating components should be your go-to.

### The benefits

- Creating designs is much faster
- Errors appear much less frequently
- Onboarding new designers is straightforward
- Handover to developers is simple
- Encourages discussion around changes

As you can see, the benefits are great and creating your own design system greatly improves your workflow and makes changes much faster and catches potential problems early with barely any extra initial effort.

There really isn't any reason you shouldn't do this if you want an effective workflow within your team.

## Not just for design

Creating a design system doesn't just help your designers. Developers too get substantial benefits from a design system. Many of the benefits found in design systems will apply to your developers too.

### Understanding intent

The first benefit of a design system which is often overlooked is to understand what the designer really intended from their designs. This is a much harder skill for developers to adapt than just matching pixels but is also something which can make your website feel off if not understood correctly.

A component which has been fully thought out in the design phase and has been broken down into smaller pieces makes it much easier to build correctly.

And when each component has its rules clearly defined in the design, developers aren't left to guess. No more changes a few days before deadline or surprise development additions because the designs didn't quite translate to code.

If designs systems are implemented from the start, your developers will be able to replicate them faster and more accurately.

### The component library

It's not just designers who benefit from creating components. Developers also have to create components when building websites for many of the same reasons.

- Components improve reusability
- They make development faster
- It's easier to onboard new developers
- They help reduce errors

A developers component library would match the components created in design, often exactly.

![Components (including the Hero) being created in our project code too](https://www.datocms-assets.com/38195/1613731549-screenshot-2021-02-19-at-10-36-02.png)

So if developers need to create components anyway, having a design system in place doesn't just help one team, but many. This thought process will have to happen anyway if you want a website that works, but the earlier it happens the more effective your workflow will be, saving you time and energy in the future.

### Effective collaboration

If both developers and designers can see benefits from creating a design system then it makes sense for both teams to work together to create the _same_ design system.

A collaborative thought process, with designers and developers working in tandem to create components ensures helps keep ideas practical at the components creation to ensure it matches the rest of the designs, and will work together with other components.

In the same way you would plan a project brief and get approval before creating the project, you should always plan the functionality of your website and check that it's actually realistic before moving forward to try and create it.

This also helps greatly with internal discussions. Every business i've worked with has had some variations on what different teams called things. Hero/Banner, Header/Nav, Button/Link etc. If your teams all have the same access to a design system explaining how things work, there won't ever be confusion on what's being discussed.

If you work with clients or outsource to freelancers, this can be especially important for your business, as any mistakes can be extremely costly if you have to go back to design to make changes which could have been avoided with more careful planning up-front.

### Testing

Testing is one of those areas where many companies have a love/hate relationship, where so long as the team is confirming everything works correctly they are loved and as soon as errors start being noticed.

But without a design system in place, your testing team are in the dark, guessing how they think components should work.

And errors are much more likely, as your development team will have also been guessing.

Having a design system with clearly defined components allows for automated tests be created to ensure common issues are caught automatically. This then frees up your testing team to be more effective by finding more complex errors which are harder to track down and have a greater impact on your business.

## Other team benefits

While design and development are the two teams that will see the most benefit from creating a design system, the benefits even spread to other teams too.

### Copywriting & Editing

If you have a clear design system that your team can refer back to then your copy can be written in the correct format for your components. Instead of writing paragraphs first, and then cutting them down to fit the shape of your website, you can make sure your copy is written in the correct way, first time.

This also makes it much easier to add changes to your site, as if the copy is already in the right format for a component then your editors simply need to add it directly. No more back and forth, getting changes made to try and fit your site.

### Documentation

Every business needs to add new members to their team at some point. Documentation makes this a lot easier, clearly defining how things work and how others can use them, regardless of what team they are in.

If you've built a design system, then you know how things work, and you can guarantee that their design and development implementations match. You already have your documentation.

## Conclusion

At the cost of a little (and I mean little) additional time and thought upfront, creating a design system can save your team from a ton of headaches down the line.

If you plan on scaling your business, introducing more team members, or having any kind of effective collaboration between teams then a design system is required. Even small teams can see a ton of benefit from implementing a design system (very few websites have a single page after all).

And the great thing is, if you don't currently have a design system right now, you don't have to implement it all at once. It doesn't require you to start from scratch on your designs, or in code.

Just start making changes to your current design and code - group things together and reuse them where it makes sense to. You'll see the instant improvement this makes to your workflow.
