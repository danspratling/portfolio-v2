---
title: TailwindCSS; What is it and should we use it?
description: TailwindCSS is an extremely popular CSS framework right now, so let's compare it to the most popular UI Toolkit, Bootstrap, and see what the differences are
published: true
publishDate: 2021-01-19
# updatedDate: 2021-01-01
tags:
  - development
---

## What is TailwindCSS?

TailwindCSS is a utility-first css framework which has gained a lot of popularity in frontend communities over the last year or so.

It aims to simplify css by transforming the most commonly used css into classes to allow the developers to pick and choose their preferred styles from the pre-defined library.

This approach is intended to help establish a strong baseline for developers, especially when working together as a team so that they have to think less about how the code should work together and more about how the code should reflect the design, often the more critical part for many teams.

A typical Tailwind card component

```html
<figure class="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
  <img
    class="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
    src="/sarah-dayan.jpg"
    alt=""
    width="384"
    height="512"
  />
  <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p class="text-lg font-semibold">
        “Tailwind CSS is the only framework that I've seen scale on large teams.
        It’s easy to customize, adapts to any design, and the build size is
        tiny.”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-cyan-600">Sarah Dayan</div>
      <div class="text-gray-500">Staff Engineer, Algolia</div>
    </figcaption>
  </div>
</figure>
```

Source: [https://tailwindcss.com/](https://tailwindcss.com/)

As we can see above, many of the class names are semantic or shortened versions of what we might expect to see in css. They are also much shorter, and are written straight in html.

This means we can create almost unlimited designs by simply editing just HTML.

## What is Bootstrap?

Bootstrap is a CSS toolkit which has been extremely popular forever in many web communities, not only frontend ones.

It is built in a way which is extremely easy to understand, and aims to simplify the frontend process by providing prebuilt components.

This gives developers a strong starting point without having to think too hard about the design of their elements. This makes it very easy to get started building and makes a good looking design extremely easy to create.

This also means it's very easy to create designs which look very similar which may or may not benefit the developers.

A typical Bootstrap card component

```html
<div class="card">
  <div class="card-header">Quote</div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.
      </p>
      <footer class="blockquote-footer">
        Someone famous in <cite title="Source Title">Source Title</cite>
      </footer>
    </blockquote>
  </div>
</div>
```

Source: [https://getbootstrap.com/docs/5.0/components/card/](https://getbootstrap.com/docs/5.0/components/card/)

And here's what the components look like

Bootstrap

![Bootstrap card component](https://www.datocms-assets.com/38195/1611067672-screenshot2021-01-15at10-31-59.png)

Tailwind

![Tailwind card component](https://www.datocms-assets.com/38195/1611067675-screenshot2021-01-15at21-28-21.png)

## Editing the component

As we can see, these two cards are similar but they have slightly different layouts. What if we want the layout to be exactly the same? How easy would it be to make changes to either of them in a real project?

### Editing in bootstrap

1. Create a custom css file for our edited bootstrap component (we create a custom css file to allow editing of the styles without overriding defaults, so upgrades don't cause us to lose all our edits).

```markdown
└── styles
├── bootstrap
└── card.scss //our default styles, we might have this in node_modules
├── custom
└── card.scss //our override styles
└── index.scss
```

2. Add our custom styles to the `.card` `.card-header` `.card-body` classes to change how they look

```css

// custom/card.scss
.card-body {
	flex: 1 0 50%; //the new style
}

// bootstrap/card.scss - the default style doesn't get changed
.card-body {
  flex: 1 1 auto;
  padding: $card-spacer-y $card-spacer-x;
  color: $card-color;
}
```

3. Ensure these new styles override our original component, and don't conflict (`!important` is sometimes required, or clever specificity handling)

This is a very easy and familiar way of editing components because pretty much everyone working on a project will be familiar with css.

However, having css override other css is likely to cause other issues and very quickly leads to confused and messy css files. It's not unusual to see loads of `!important` in a css file overriding bootstrap components to try and ensure styles are being overridden correctly.

And the more we want to edit a component, the more we're likely to run into problems with the framework holding us back. Eventually, it becomes easier to create our own components from scratch.

### Editing in tailwind

1. Edit the classes on the component

```css
<div class="max-w-lg mx-auto">
	...
</div>
```

That's it.

This is the beauty of utility classes. They are great at isolating functionality and allow us to quickly edit our components. We don't have to create any custom overrides, and we can directly edit the default styles on the component so we don't get duplicated unnecessary css, all while still allowing us to upgrade without breaking anything if we'd like.

The [demo on Tailwind's site](https://tailwindcss.com/) shows how easily we can do this.

The downside here, is that we'll likely have to build the component ourselves when initially putting it together, although [TailwindUI](https://tailwindui.com/components) is a library which exists to help us do that quickly (but we'll have to pay to get the most out of it). There's also a small learning curve to understand the naming conventions of the different classes.

If you'd like to play with tailwind without any commitment, you can give it a go on their playground.
[https://play.tailwindcss.com/0URFwyNwfa](https://play.tailwindcss.com/0URFwyNwfa)

## What about css?

Using pure css is a perfectly valid option and many small and large projects do exactly that.

However frameworks like Tailwind and Bootstrap provide good defaults. For example, both provide a theme with default styles so we don't have to worry about setting up all of our font sizes, colours, breakpoints, etc. This kind of boilerplate can take ages to set up.

They also both have great documentation to refer back to, which means we'd have to document less. Want to know how to create a container? Go to their respective docs site.

Using a framework also ensures consistency across projects which use that framework. Spin up any tailwind or bootstrap project and at their core, they'll work the same way. This makes introducing new team members to a project much more effective as it's very likely they'll have had experience with these toolkits before so onboarding will be relatively easy, unlike in css where it will be completely custom.

## Which is best?

The answer to this question depends on a lot of things, including personal preference.

Bootstrap is great for getting up and running quickly with prebuilt components. If we need a project yesterday, and aren't worried about how it looks then this is probably the best tool. However, once we start customising it a lot it becomes much harder to work with, especially at a large scale.

Tailwind is small and scales incredibly well without bloating as we only ever keep the classes we use (thanks to purge for removing everything unused). It's also easy to understand and works in a modular fashion, with styles only ever taking effect on the current element. But it has no prebuilt components out of the box, so if we need to build in a rush then we'll have to find some custom built resources or pay for TailwindUI.

Custom CSS is also a perfectly valid option and one that will be the most familiar to the most people at a high level. But this requires a lot of setup and potentially falls into the same trap as bootstrap if not managed well. We'll, of course have no pre-built components here either, and have to train new team members on exactly which approach was decided to take project in as there's many different options (css, scss, stylus, css-in-js, modules, and much more).

## What should I use?

My preference out of these is Tailwind, but there are certain scenarios where I can see the others being beneficial. Tailwind is just the most flexible most comprehensive approach and that's why it's also my preferred toolkit. It also helps that the team behind tailwind are extremely open to feedback, very active within the community, and constantly pushing out great new features. The speed at which I can work with it is unlike any other approach and that factor alone is a great reason to give it a try.
