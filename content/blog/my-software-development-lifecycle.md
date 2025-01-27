---
title: The Software Development Life Cycle at Skyward
description: How we approach our software development projects at Skyward to make working with our partners as high-value as possible
published: false
publishDate: 2023-09-26
# updatedDate: 2021-01-01
# tags:
---

We all know that working together as a team is difficult.

Creating a plan of action and making sure that everyone works together effectively can be a challenge in itself.

And when you’re working on software, especially when working on long term projects, it can be a real challenge to make sure that everything that was originally planned is released.

Making sure that projects stay on track and understanding where they are in their lifecycle is essential.

What is a Software Development Lifecycle?

A Software Development Lifecycle (or SCLC) is one of the core elements of how every software development company works.

It essentially maps out the steps taken between forming an idea and releasing it to the world.

And while the lifecycle will stay essentially the same for most companies, how you approach these steps can vary quite a lot.

I’ve seen a lot of variation between teams, but of all the approaches I’ve tried the truth is that there’s only one way to effectively release software without lots of inefficiency and delays.

Just for fun, let’s start with some other approaches you might have seen (or might even be using).

The wrong way to do software development

I’ve been in the industry for almost 10 years now and I’ve seen projects approached from multiple angles, but in the end there’s only one way to deliver a project that’s fast, efficient and flexible enough to keep up with the demands of businesses ever-changing needs.

One thing at a time

What if we do all of our design then all of our development

When you have projects lasting upwards of 12 months you might consider doing a big chunk of design work followed by a big chunk of development work. This way it’s easy to get approval on everything you’ll be building before you start work on it.

But as projects change over time this approach denies you any flexibility you might need to adapt with the businesses demands.

A new requirement might come up that changes how you think about the project or how you need to approach things, especially if you’re spending a long time rebuilding a large site or app that could dramatically increase the length of the project just to work it in, delaying release.

With this approach it can be incredibly easy to continually add to long term projects, extending them indefinitely and guaranteeing that they won’t release on time.

Everything all at once

What if we do our design and development all at the same time?

Alternatively, as you’ve done the planning up front (you should always know what you’re aiming to achieve and what problem it solves for you, otherwise you have some planning to do), you could theoretically get started with the designs, frontend and backend development all at once.

This puts all teams to work at solving the same problems at the same time so looks very productive on paper.

The problem, is that at each phase you’ll have different problems and assumptions to overcome.

How your designers and developers interpret a brief could be very different.

And if everyone’s built everything in a different way, combining those solutions at the end could be very difficult, wasting time.

The right way & how we do it

The problem with both of the above approaches is that they are extremely inefficient, which creates long delays before actually being able to release anything.

So to avoid this we focus on delivering the MVP - Minimum Valuable Product

We break down the task into it’s smallest components that still achieve the outcome that’s desired, which then goes from design to development to testing and finally gets deployed.

If we were rebuilding a multi-brand marketing site that also had multiple languages, we could redesign all the brand sites first, then build them in all the languages, then deploy them.

But that could take years and would be a really difficult transition for the team using those sites.

Instead we break down the project into it’s MVPs defined by what delivers the most value.

Redesign & Build the most impactful brand site first in their native language

Followed by other languages

Then the next most impactful brand website

Followed by other languages

And the third

And so on until all sites are done

This approach means that we’re making small changes often to improve things in a massive way over time, while giving users (teams or customers) time to adjust to the new platforms without overwhelming them.

This also means that you start to see changes in months, or in many cases much faster, rather than years.

This example shows how we’d approach a website rebuild, but this approach applies to all software development. Almost every change you’ll make to your website will be on top of something that’s already been built, for which this approach works just as well.

The steps

We breakdown our lifecycle into different steps that are often owned by different people/teams.

0. Understanding the work (AKA Requirement analysis)

Before we can begin working we need to understand what it is that we’re trying to achieve. Different people express this in different ways so we always want to take the time to understand exactly what goals we’re aiming for, why, and if we’re all measuring success in the same way.

Our team struggle to edit customer details because the interface isn’t easily understandable.

This clearly defines the problem (complex editor) and gives us a ways to measure our success (user satisfaction, time to complete tasks), allowing us to find the best approach to solve it.

This step is usually bigger picture than the cycles I discuss next, but is essential for understanding that we’re actually working on the right things.

1. Task breakdown

Once we know what we’re working on we’ll break that down further into individual steps for each of our teams.

While we have a big-picture goal, these steps can be smaller and might be able to be delivered individually, making progress as we go.

Using our example scope:

Our team struggle to edit customer details because the interface isn’t easily understandable.

We might include some of these tasks:

User Research: how do users currently edit customer details and which parts are the most difficult to change (this would be a preliminary task that would inform the impact of other tasks)

Improve adding/editing a customer address

Improve editing customer orders

Allow moving orders from one customer to another customer

User Research: Review how the changes have impacted editing customer details. Are things better? Are further improvements needed?

Now we have a good scope of the work that needs to be completed, but the beauty of this approach is that every task can be completed in isolation. While some may require others to be completed first, every one of these tasks can be finished and deployed one at a time.

And because we keep the scope relatively small it’s easier to understand the tasks, estimate timeframes, and deliver them quickly.

“Rebuild the customer support interface” could take months and the scope is unknown. It’s not very clear when this will be completed.

But “Moving orders from one customer to another” is a very clear scope. We can see that it would need design and frontend development to allow editor control and backend development to enable the process of actually moving customer order data across.

And we could roll this out once the changes are done, meaning you’ll see impact of the change much faster than if we waited for every task to be completed first.

2. Design

Once a task is defined it’s pretty likely that it will need to go through design. This design phase helps us understand how we’d approach the task and informs the developers of expectations for how the requirement will be built.

This phase helps us figure out any outlying questions which might not have been apparent from the outset.

For the task:

Allow moving orders from one customer to another customer

We might need to design the following sub-tasks

Add order transfer button to order

Create a customer email input to initiate transfer

Create a confirmation modal to confirm the transfer

Having individual tasks with a small scope helps us make sure we don’t miss steps that are needed.

We‘ll also get approval from any stakeholders on our approach before implementing it. Design is generally faster than development and easier to change later, so we ensure we get it right first time.

As we build up a library of design assets, the time to complete designs gets shorter as we have already created many of the components we might need, such as form inputs, buttons or page sections.

3. Build

Once designs have been completed and approved we hand them over to our development team to implement.

The designs already break down the new functionality in a way that expresses the intended approach to build, which acts as a guideline and simplifies our development process.

The new designs may also inform additional sub-tasks for developers to complete, such as creating new backend functionality or implementing new frontend components, which may go through their own mini Build-Deploy cycle before the task they are attached to is completed.

We also rigorously test our code as we build, setting up automated tests as we go to ensure that features look correct, functionality is working as expected, and nothing can change accidentally without being caught.

So we may end up with the following that needs to be built

Allow moving orders from one customer to another customer

Frontend Tasks

Add order transfer button to order

Ensure button opens email input modal

Update order tests to match new designs

Create a customer email input to initiate transfer

Ensure email input accepts keyboard input

Ensure email input submits

Create a confirmation modal to confirm the transfer

Ensure transfer is confirmed when successful

Ensure transfer errors when unsuccessful

Ensure confirmation modal matches designs

Backend Tasks

Create order transfer process

Ensure order transfer completes successfully

Ensure order transfer errors correctly if it fails

As you can see, the tasks add up. But these are all things that need to be checked and it’s much easier to do it as you go rather than wait until the end of a project and try to catch everything.

4. Deploy

Once we’ve completed all of the required changes for a task, we deploy it.

By keeping the relative scope of our tasks small (though you can see how that can quickly grow to ensure it’s reliable in the long-term), we make sure that our changes are completed quickly and our deployments don’t affect too many parts of the platform.

One of the most difficult things to deal with is a complete overhaul that changes everything and once it’s deployed, you realise that there’s a bug (or a few) that stops you from being able to do day to day tasks, or even worse, allowing your customers to buy from you.

Keeping changes small keeps them manageable.

It allows you to prioritise what’s important and deploy it as soon as possible.

Meaning you can start seeing the impact as soon as possible too.

5. Repeat

Finally, we do it all again, and again.

We start from #1 if we still have tasks to tackle, but will preview the project scope every few months to ensure we’re both on track and also that we’re still tackling the highest priority tasks.

Summary

By breaking big projects down into smaller steps we focus on delivering value as soon as possible, finding that fine balance that allows us to deliver results fast while remaining flexible.

This allows us to achieve:

Fast releases - weeks not months

Prioritised delivery - as we all understand the importance of each task

Reduced risk - smaller changes are more predictable, and easier to undo

And as we have such a close-knit team who each understand how the others work, this allows us to keep projects running incredibly efficiently with no wasted effort.

Want to work together with Skyward and take advantage of our highly effective Software Development Lifecycle?

Let’s have a chat
