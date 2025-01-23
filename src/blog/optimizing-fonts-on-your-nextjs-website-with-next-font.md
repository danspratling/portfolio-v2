---
title: Optimizing fonts on your NextJS website with next/font
description: Simplify font loading for your NextJS site using next/font. Automatically import your fonts in the most optimal way, loading pages faster & streamlining updates
published: true
publishDate: 2023-04-11
# updatedDate: 2021-01-01
tags:
  - NextJS
  - Performance
---

Next/font is a library provided by the Vercel team to help make sure fonts are loaded efficiently on your website.

Loading fonts incorrectly can degrade website performance, either causing major page updates if your fonts are loaded too late, or delaying the rest of your content from loading if fonts are loaded slowly.

Getting fonts wrong can create a terrible experience for your user, and we always want to avoid that. Fortunately, next/font makes loading fonts on your NextJS website much easier.

# What is next/font?

Next/font gives you the ability to optimally and painlessly load fonts within your Next.js website. All you need to do is install this library and it’ll ensure you’re loading your fonts in the most optimised way every time.

There are a few requirements needed for you to be able to use Next/Font:

1. **You must be using Next 13 (or newer)**
2. **You must be using a Google font, or a local font.**

If you’re not using Next 13, or need a different font library then [Fontsource](https://fontsource.org/docs/introduction) is a great alternative, but it requires a little more configuration.

# Why use next/font?

While importing fonts may seem like a fairly common scenario to run into, there are a few problems with adding fonts on your own that next/font looks to solve

## Standardising font loading

By using a standard library, it also ensures that font loading always happens the same way. In a standard project it can be very easy for fonts to get set up across multiple channels, in your HTML, CSS, or JS files, which creates a maintenance nightmare. This is fixed with next/font by creating a single way which fonts should be loaded. Using next/font as your source of truth for fonts guarantees better loading while making fonts easier to maintain for your team.

## No network requests

Typically, when importing fonts you’ll be calling an external resource like https://fonts.google.com. The problem with that is that if the network is slow, or the endpoint is offline, your font won’t load and your request might even delay the rest of the page loading.

Next/Font ensures that external fonts are downloaded on build, so no more waiting on external services.

## Ensures fonts load optimally

By using Next/Font you’re ensuring that your fonts will load in the best way possible. This does a handful of things including loading fonts locally, inserting font loading in the right place and loading the font with the best display settings. Together this will ensure that you’re loading fonts optimally for performance, without the potential for mistakes.

# How to optimise fonts with next/font

## Installing Next/Font

To add next/font to your project you’ll need to install it

```bash
npm install @next/font
// or
yarn add @next/font
// or
pnpm add @next/font
```

<aside>
👉 Next/Font is in beta right now, which is why you’ll need to install it separately. Once it’s stable it’ll be included in NextJS directly and won’t require an install.

</aside>

## Importing fonts

Next, you’ll need to select your font which you can do in one of two ways:

- Google Fonts, or
- Local fonts

Regardless of which option you choose, you’ll then want to decide how you’re using your fonts. You can either:

- Import them globally (recommended)
- Import them on individual pages

Whichever you choose, the method of use is the same.

### Google Fonts

Import `@next/font/google` to use Google Fonts directly.

It’s recommended that you use _variable fonts_ if possible, as these files are often smaller and give you much greater flexibility and performance.

```jsx
// pages/_app.js
import { Inter } from "@next/font/google"

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] })

// Add your font to a page wrapper
export default function MyApp({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  )
}
```

If your font doesn’t support variable fonts, you’ll need to specify the font weights and styles to include.

```jsx
// pages/_app.js
import { Roboto } from "@next/font/google"

// Specify individual weights and styles as array elements
const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
})

// Add your font to a page wrapper
export default function MyApp({ Component, pageProps }) {
  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  )
}
```

### Local fonts

Import `@next/font/local` and specify the `src` of your font file. Like Google Fonts, it’s recommended to use variable fonts if possible.

```jsx
// pages/_app.js
import localFont from "@next/font/local"

// Font files can be colocated inside of `pages`
const myFont = localFont({ src: "./my-font.woff2" })

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={myFont.className}>
      <Component {...pageProps} />
    </main>
  )
}
```

If you can’t use a variable font, you’ll likely need to import a handful of font files which you can do by including them as an array.

```jsx
const roboto = localFont({
  src: [
    {
      path: "./Roboto-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Roboto-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./Roboto-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Roboto-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
})
```

<aside>
👉 Remember that this package only supports Google Fonts and local fonts (for now)

</aside>

### CSS variables (and Tailwind)

If you need to use your custom fonts with another package you might want to instead use a CSS variable instead of using the supplied font class.

In order to add this option, all you need to do is add your variable name in the init function.

```jsx
// pages/_app.js
import { Inter } from "@next/font/google"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // add this
})

export default function MyApp({ Component, pageProps }) {
  return (
    // Output the variable name instead of the className
    <main className={inter.variable}>
      <Component {...pageProps} />
    </main>
  )
}
```

You can then use it in your config file (I’m using Tailwind here as an example)

```jsx
// tailwind.config.js
const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} \*/
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "var(--font-inter)", // Add your css variable from _app.js
          ...fontFamily.sans, // And use the default font family for fallback/emojis etc
        ],
      },
    },
  },
  plugins: [],
}
```

You can now use `font-sans` to apply your font to your components

```jsx
// Will be displayed using Inter
<p className="font-sans">Hello there!</p>
```

## Summary

It’s as easy as that. Now you’ve got next/font set up you can be certain that you’re loading fonts in the most optimal way across your entire project with minimal effort.

This guide is part of our NextJS optimisation series, so [check that out](https://www.notion.so/db01b3e029704c2a88529b358e007044?pvs=21) if you’re looking for ways to improve the performance of your NextJS website.
