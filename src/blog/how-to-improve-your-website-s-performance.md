---
title: How to improve your website’s performance
description: Website performance is critical for delivering a great user experience. Here’s our checklist that ensures we get great performance for the sites we build.
published: true
publishDate: 2023-01-03
# updatedDate: 2021-01-01
tags:
  - performance
  - blog
---

When building your own website you need to think about performance to make sure your site loads as fast as it can for your users.

Internet speeds are constantly getting faster and computers are getting more powerful so why is making sure your website is fast becoming more important too?

It’s not _just_ because your users can’t wait half a second for your website to load.

There’s a lot more reasons why performance matters.

# So why does performance matter?

## User Experience

If you want your website to succeed, you need to engage your users and guide them towards their goal. Creating a great design helps a lot with this. But no matter how good your design may be, you’ll keep losing users if your site is slow.

User attention is limited on the web. I’m sure you’ve been on websites before that load slowly and barely respond to your clicks. It’s frustrating, right?

Most users won’t wait around for your website to load. A [not-too-recent study by Google](https://www.blog.google/products/admanager/increase-speed-of-your-mobile-site-wi/) found that 53% of mobile visitors abandoned a site that took over 3 seconds to load. You can put as much time as you want into your marketing, if your site is slow then half (or more) of that investment is going to waste.

But even better than that. Websites which load faster convert users better. This is because faster-loading websites reduce user frustration, as they don’t have to wait for pages to load, and by showing you care about experience, you improve your brand image. Big brands like Walmart and [skilled.co](http://skilled.co) have [measured that conversion rates can increase by 2% for every second that you can save](https://www.cloudflare.com/en-gb/learning/performance/more/website-performance-conversion-rates/) — a huge increase when the industry average for website conversion rates is between 2-5%.

## Accessibility

While accessibility does fall under the User Experience category above, I think it’s worth calling out the improvements that apply less universally to users, but make a huge difference to specific kinds of users — entire market segments you might not have considered.

While traditional users might get frustrated at long load times, users with attention span difficulties are likely to be the most affected by poor performance. With their attention being pulled away regularly, providing immediate responses to their interactions allows them to keep focused on the task at hand — exploring your website.

## Internationalisation

As your business grows, your website’s audience will likely grow too. You’ll start reaching users in other countries, whether you’re intentionally selling to users in those countries, or your brand just becomes more well known and your content starts reaching people outside your sphere of influence.

No matter how you’re growing, it’s important to remember that not every country has great internet speeds. Many countries still rely primarily on mobile and 3G for their internet connections, and many areas outside of cities still can’t get speeds greater than 5mbps. Improving your website performance makes it accessible for those types of users.

## SEO

User experience is a critical part of all search results. When Googling, it’s important that you don’t just get a page that matches the search term, but one that can also gives you the answers you need.

If your website is taking a long time for the page to load and clicks feel unresponsive you’re going to lose users due to frustration.

We’ve already discussed [how to understand your Google Lighthouse Score](https://www.notion.so/Optimise-your-Lighthouse-score-and-watch-your-site-performance-soar-95df3a94dff44522bda5f985b0df1222?pvs=21) to identify your websites performance issues and get a deeper understanding what you can do to solve them.

Website performance is a critical part of user experience (see above) so, if you want your site to rank highly it’s essential you take the time to make it fast.

# Performance optimisation checklist

At Skyward, we use the below performance optimisation checklist whenever we’re deploying any site changes. This checklist makes sure we bake performance into our site design process, rather than trying to shoehorn it in as an afterthought.

Feel free to use this checklist for your own site design projects, content updates, or even to audit your current site performance.

## Select the right tools for the job

You want to choose the best combination of tools that gives you the smallest output possible with just as much flexibility as you need with a little room for expansion in the future.

- [ ] What JS framework do you need?

  - [ ] Client Side Generation (CSR)

    React, Vue, Svelte

  - [ ] Static Site Generation (SSG)

    NextJS/Gatsby/Nuxt/Gridsome/Sveltekit/Astro/11ty

  - [ ] Server Side Rendering (SSR)

    NextJS/Nuxt/Astro

  - [ ] Incremental Static Generation (ISR)

    NextJS

### Fetching Data

You want to fetch as little data as you can, prioritising what you need to actually load the current page and deferring anything else.

- [ ] Only fetch data you need (Consider GraphQL)
- [ ] Defer anything not needed until after the page has loaded
- [ ] Prefetch additional data before it’s needed

### Reducing Javascript

Javascript bundles can get huge. You want to make sure you’re only serving what you need for the current page, in as small a bundle as possible.

- [ ] Minify assets (gzip/brotli)
- [ ] Don’t send unused Javascript
- [ ] Only essential Javascript is blocking
- [ ] Consider swapping for more optimised packages (Preact vs React) if functionality remains the same
- [ ] Consider only hydrating interactive elements on the client (Astro/Islands) if functionality remains the same

### Reducing CSS

CSS can lead to a surprising amount of additional bloat. You want to serve as little CSS as you can by cleverly reusing styles and bundling as small as possible.

- [ ] Avoid CSS-in-JS _or_ prefer bundlers that compile CSS-in-JS into pure CSS
- [ ] Don’t send unused styles to the client
- [ ] Minify CSS
- [ ] Reuse styles as much as possible, consider utilities (tailwind)

### Optimising images

Images are often the biggest problem with optimisation on web pages. Make sure you’re using an optimisation solution that’s flexible and repeatable, while giving you the smallest files. To make everyone’s life easier serve optimised images while allowing high quality uploads in the CMS.

- [ ] Reduce image size (width/height)
- [ ] Serve modern image formats (avif/webp)
- [ ] Reduce image quality (we typically use 65% quality)
- [ ] Crop unused image areas
- [ ] Lazy load images by default
  - [ ] Prefetch/eager load images above the fold (to reduce pop-in)
- [ ] Size images based on display
- [ ] Use a CDN (to reduce request round-trip-time for your users)

### Fonts

Google fonts take a long time to load causing a flash of unstyled content for the user. Consider using as few fonts as possible, and storing them locally instead of over the network.

- [ ] Use as few font weights/styles as possible
- [ ] Use variable fonts if using 2 or more different weights/styles within the same family
- [ ] Use subsets where possible (latin, greek, etc)
- [ ] Self host fonts (font source)
- [ ] Use `display: optional` to reduce CLS

### Perceived performance

If you’ve already done a lot of optimisation, improving _perceived_ performance can help by improving the users experience and reassuring them

- [ ] Use skeleton loaders to show layout while data loads
- [ ] Keep the user informed of state changes/error states
- [ ] Avoid CLS
- [ ] Avoid reloading data that stays the same between pages
- [ ] Cache anything that doesn’t change much
- [ ] Prefetch as much as possible

### Testing

Make sure changes don’t slowly degrade performance over time by implementing tests to make sure it’s always at a high standard.

- [ ] Automatically test every page with [Lighthouse Parade](https://cloudfour.com/thinks/big-picture-performance-analysis-using-lighthouse-parade/) on deploy
  - [ ] Is your performance score above 90?
  - [ ] Does the site load in under 3 seconds on mobile?
- [ ] Use Bundle Analyser to check for massive chunks
- [ ] Run uptime checks to ensure the site doesn’t go down
