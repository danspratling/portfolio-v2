---
title: How to reduce website costs by simplifying your code
description: How to reduce website costs by simplifying your code
published: true
publishDate: 2024-09-02
# updatedDate: 2021-01-01
# tags:
---

This week I’m going to talk about how to find and eliminate those pesky costs that come with running a custom built website.

Whether you’re a large scale business, tiny startup or a solo developer you’ll almost certainly have noticed the frustration of software that is difficult to update.

In fact, it might have gotten so bad that you’ve had to abandon projects in the past and start again

Most people don’t know how to build software in a way that’s maintainable. So as demands change and new features are required they add more maintenance, making the problem worse.

## It’s not that hard to build better software

There’s just a few key things you need to do

- Build isolated components
- Keep it simple
- Reduce mental overhead
- Test everything

So let’s get started and help you turn your software from a nightmare to maintain to the most profitable part of your business.

## Build isolated components

This is probably the biggest issue I see with most businesses which is why I’ve put it first.

When building a website it’s essential to think about it in smaller pieces.

Here’s how the homepage of the skyward site is broken down

[Image of component structure]

As you can see, you start to get a lot of components that are repeated even within the same page. And when you start thinking about multiple pages almost all of your code can (and should) be reused.

Even things which might not immediately feel like reusable components, like tables of data, can still be broken down into components which work with different types of data being passed in.

By doing this

- You build up an expectation for your systems
- You make it easier to reuse elements on the page
- Components are no longer tied to a specific set of data
- Expanding a component’s functionality applies everywhere it’s used
- And your components are easier to read and understand because they’re isolated

This doesn’t just apply to development, but also design.

Work with your design team to create components in your design files.

Your design and development teams should be thinking about component functionality the same way.

So start building a design system that works from conception through to build.

(If you need help, I always happy to assist).

## Keep it simple

One of the biggest problems I see developers of every level make is overcomplicating code.

Code should be simple. You should be able to read it from top to bottom and understand what it’s doing.

If you can’t, it’s not simple, and that’s a problem.

Let’s take a scenario that I run into often.

I’m trying to make a code change (it doesn’t really matter what). The code I’m changing calls a function and I’m not sure what it does, so I go to the function declaration.

This function is not commented and calls 5 more functions. I’m also not clear what these do.

Half an hour of this and I’ve forgotten what the initial function I needed to change was.

So we can try a few things to make it easier to read through and understand code.

- Names should be clearly understandable `calculatePriceWithDiscount()`
- Code should separated when it’s repeated so it can easily be reused
- Consistent systems should exist between design & development
- Code comments should be used regularly, but kept short
- Test code to make sure changes don’t break anything
- Decisions should be documented
- And delete unused code!

There’s obviously lots more nuanced things that you could do to make code easier to change. If you need help with specifics, let me know.

And if you’re one of the geniuses who can read _any_ code, remember to leave comments for us mere mortals.

## Reduce mental overhead

Tailwind is a really hot topic in the web development community.

Some people love it, others hate it.

I love it, and one of the reasons for that is that it makes it 10x easier to think about your styles _because it keeps them all with your component code_.

Tailwind’s decision to keep your styles directly associated with your components forces you to write better, more isolated code. You no longer have to go find your css file and remember what `.nav-header-button-dropdown` is actually targeting.

I can now look at a single component file and visualise exactly how that would look in the browser.

It’s little tricks like this that simplify your project.

Tailwind isn’t the only way to do this of course, but it’s a great example.

Other means you could reduce thinking in projects are:

- Shrinking components and functions as far as possible
- Properly naming files and functions
- Commenting any code that isn’t immediately obvious
- Documenting seldom used processes (like project initialisation)
- Documenting reasons decisions were made

## Test everything

Now when I say you need to test things, you might be thinking “ugh but I don’t have the time to manually test stuff”.

But I’m not suggesting you should manually test things.

In fact, I think you should do _less_ manual testing

Manual testing is inefficient, and it’s very easy to miss things

Instead, you should _automate_ your testing.

But how do you do that?

I use a three pronged approach to my testing strategy that works really well for my client projects (and my own ones).

1. Unit tests
   These test that code does what it’s supposed to do `if a = 2 and b = 3 then a + b should equal 5`
   Jest
2. Visual tests
   These make sure that things look how they’re supposed to, and warn you if they change
   Storybook + Chromatic
3. End-to-end tests
   These guarantee that users experience the site the same way every time, even across different pages
   Cypress

By adding in these tests as we go we make it quicker and easier to test things in the future, as every test added now will automatically run every time we make a change.

And if we make a change that causes a problem, we catch it _before_ it goes live (and affects our users!).

That saves a ton of time instead of manually finding and checking for issues

And by doing this up front, it helps ensure that the components we build are isolated and reusable. That helps to ensure code is maintainable.
