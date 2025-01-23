---
title: Fix your portfolio
description: Common issues I found reviewing your portfolio websites
published: true
publishDate: 2020-06-29
# updatedDate: 2021-01-01
tags:
  - career
  - design
  - accessibility
  - performance
  - development
---

## I spent this weekend reviewing your portfolios, from developers of various skill levels.

It was great fun, and I got to see a lot of awesome sites. Unfortunately, I couldn't get to everyone so I compiled a list of the problems I found.

These are mostly small issues across a broad range of topics, and they are things that won't take long to improve but will give your site that extra polish making you stand out from the rest.

This is what I most people needed to fix.

## Accessibility (a11y)

### _button_ and _a_

`<buttons>` and `<a>` tags are not interchangable.

`<a>` tags are links to pages, documents, or positions within a page

`<buttons>` are interactive elements within the page.

Typically, you want to be using an `<a>` if you have a URL to go to, while you would use a `<button>` for an element which is interactive, but doesn't _go somewhere_, like a form submit, carousel arrow or tab heading.

The confusion comes from the class name `.button` or `.btn`. It's commonly used to represent something which looks like a physical button.

Using the class `.button` does not mean the element should also be a `<button>`.

### Semantic HTML

If you're still using `<div>` to represent everything. Stop.

There are elements which can represent your intention better.

```html
<nav></nav>
<main></main>
<aside></aside>
<article></article>
```

Screen readers announce what the type of content will be if you use these. In the case of some things, like `<button>`, they come pre-configured with all the interaction states you might need.

It also helps you navigate your code, as these names are so much clearer than 10 nested divs.

### outline: none;

When you click on something interactive, you'll see a border appear. It's big and blue (in chromium browsers) and doesn't fit with your design.

It's also very important.

Could you navigate your screen without a mouse?

Keyboard only users use outlines to show which element is the current focus. You can change it to match your design, but if you remove it entirely that's effectively the same as disabling the mouse.

Don't do it.

Try using a keyboard to navigate any website. Don't touch the mouse. You'll see how important an outline is.

### Colour contrast

Whether you have a light or dark theme on your website, or you've filled it with lots of colours, make sure everything is readable.

Colour contrast is exceptionally important as colourblindness is one of the most common disabilities faced.

Both chrome and firefox offer colour contrast checkers in their inspectors. Use them. Make sure you get that AAA rating.

## Content & Copy

### Getting in touch

Do not underestimate the power of a contact form.

It's quick. It's easy. Users don't have to leave your site, and they can't mess it up.

It always beats all other forms of contact.

Make sure you're using a contact form as your main form of communication.

### Avoiding spammers

You'll want to be a lot more selective about which other forms of contact you choose to use.

An email address is fine.

But for a personal website, you don't want to be adding your mobile number or home address.

Don't make it easy for spammers or malicious people to get ahold of your personal info.

If you're going to give that information out, make sure you've established a connection via another means first.

### Stop hiding your projects

I was reviewing portfolio websites, but in a lot of cases when viewing the portfolio section of the site I was seeing images covered in an overlay, or no images at all.

You're hiding the thing I want to see most. You're a developer. I want to see your work.

So show it off.

Add images which show the work at its best.

Add links to a live view of the project.

Add links to the GitHub page to see your code.

### Pick a (vernacular) lane

You need to pick how you want to present yourself to people and stick to it.

In the case of a portfolio, it should be written almost entirely in the present tense in the first person.

You're trying to sell yourself, so you want to feel like a real human being.

This may change slightly if you have a blog (first or second person) or if you're talking about your projects (past tense) but as a general rule, you need to be consistent.

### You're in charge. Act like it.

One thing everyone seems to forget is a portfolio is a way to sell yourself.

You're an expert in yourself, and the things you've created.

But many people present themselves with too much modesty.

This translates to uncertainty and if you're unsure about yourself, so is the person who's looking at your site.

### Write with purpose

Your website has a goal. For a portfolio, this is likely to be used to get job offers or to get freelance work.

All of your copy should be written with that in mind.

You are taking your users on a journey and your contact form is at the end of that journey.

Make sure you convince your users to fill it out.

## Design

### Responsive design

It's 2020. Make sure your sites work on mobile as well as desktop.

### Don't over-do it

It was immediately clear which users were confident with their designs, and which weren't.

Those without design experience did everything to the extreme.

Too many layers. Too many colours. Too many borders.

Minimal design is a beautiful thing, and for developers who are new to design, it's quite straightforward to implement yourself and make look nice.

Having a clean minimal site is far better than standing out with a bad one.

If you want to create something awesome and unique then go for it but start off simple and work your way there.

I'll often use resources such as [Dribbble](https://dribbble.com/) or [UI Design Daily](https://uidesigndaily.com/) to find designs I like to take inspiration from for my own.

### Utilize whitespace

Another beginner design issue. Many of the designs had as much crammed into as small a space as possible.

15 projects on a screen. 40 icons showing all the technologies you know & the tools you use all squeezes into a small panel.

It's much better to give things space to breathe. 4 of your best projects displayed in a space large enough to fit them is better than showing everything at once.

Don't overwhelm your users. Give your content space to breathe.

### The importance of consistency

Your users will build mental models of how your site works as they navigate the site.

Headers are large and a different colour. Links are rounded buttons with uppercase text.

Changing this breaks their mental model, making it harder for them to use the site. Changing these models often leads to frustration.

Keeping the design consistent makes your life easier too. You only have to think about one design for each element type.

### Don't forget the small things

Small alignment issues, spacing issues or colour differences build up.

Your users might not be able to explicitly point out what the problem is, but their subconscious will notice that things are slightly off.

Giving your site that final sweep and making sure that everything lines up nicely and is as you intended makes a big difference.

Make it shine. Your portfolio is intended to impress.

## Performance

### Image optimisation

Images are often the largest files we load on our websites.

In order to make sites load quickly, we need to reduce image size as much as possible.

Don't serve users images 4x too big. Don't add in unnecessary detail they won't appreciate.

I always recommend using Cloudinary to handle this. It has a free tier & works great with any site. [https://cloudinary.com/](https://cloudinary.com/)

## User Experience (UX)

### Take your users on a journey

Your portfolio is meant to get you leads or job offers.

Many people often put the expectation on the user to find their way to what they need.

They won't. You have to guide them.

If you want to convince them you're the right person for the job, you might lead them to your projects. From your projects page, you should make it extremely easy to find your contact form.

Your users shouldn't have to think about navigating your site. You should do that for them.

### Social media isn't a goal

Social media and contact forms are often mixed together in one place, but social media is not a good way to contact you.

You're assuming they have social media accounts, and you're leading them away from your website before they've reached their goal.

Social media is more like a newsletter. It's how they keep up to date with your content regularly, and continue being reminded that you exist.

They won't use it to get in touch with you. Give them a contact form.

### Don't overwhelm your user

People have short attention spans. If you've made a lot of things, or know a lot of things that's great!

But as a user, I only care about what's relevant to me.

Let me filter your projects. Start with your favourite technologies.

Focus on what you want others to see to give them the best impression.

Give me too much to look at and I probably won't look hard at anything.

### Wide content

Wide paragraphs are hard to read.

Lots of eye movement leads to fatigue and makes it very hard to track your position on the page.

Users also have short attention spans and won't focus on your content if you don't make it easy for them.

Consider shrinking the widths of your paragraphs, making them taller instead.

Typically, the rule is if your copy is wider than 2/3rds of your container width, or 800px, it's probably too wide.

##

This was originally created as a thread on twitter and adapted for use on my own blog and [dev.to](https://dev.to/danspratling/fix-your-portfolio-common-issues-i-found-reviewing-your-portfolio-websites-141g).

If you'd like to keep up to date with all my content [follow me on twitter](https://twitter.com/dan_spratling).
