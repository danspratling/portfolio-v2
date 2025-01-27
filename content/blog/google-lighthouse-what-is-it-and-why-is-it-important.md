---
title: "Google Lighthouse: What is it and why is it important?"
description: Whether your goal is to sell more products, drive more conversions, or reach more customers, you won’t get there if you don’t have excellent user experience.
published: true
publishDate: 2023-03-27
# updatedDate: 2021-01-01
tags:
  - performance
---

If your webpages are slow loading, inaccessible, or poorly optimised for organic search, chances are your visitors aren’t going to enjoy using your site.

In other words — people will be running away from your website, rather than flocking towards it.

You can get a good idea of your current user experience (UX) by analysing your website performance.

## What is Google Lighthouse?

Google describes Lighthouse as an open-source, automated tool that improves the quality of web pages. You can run a Lighthouse report for pages that are public or that require authentication. Once done, you’ll get audits for performance, accessibility, progressive web apps, SEO, and more.

There are a few ways you can access Google Lighthouse:

### Use Chrome DevTools

Open the web page you want to analyse in Chrome then navigate to Developer tools, select the Lighthouse tab, and click “generate report”.

### Use the Node CLI

The Node CLI offers the most flexibility in how Lighthouse runs can be configured and reported. To use Lighthouse in Node CLI, you will need to download Node CLI, install Lighthouse, then run it. You can configure the output for advanced reporting. You can also use Node CLI to run Lighthouse tests before deployment to make sure the changes made won’t accidentally degrade the user experience.

### Use a Chrome or Firefox browser extension

Google Lighthouse can also be run using a browser extension on Chrome or Firefox. Download the extension, navigate to the web page you want to analyse, and click “generate report” on the browser extension icon drop-down menu.

### Use PageSpeed Insights

The data gathered in Google Lighthouse is used to power the data produced by Google’s PageSpeed Insights tool. While Lighthouse and PageSpeed Insights are effectively the same tool, PageSpeed Insights’ UI makes it easier for non-developers to analyse site performance. The reports provided through PageSpeed Insights are often less detailed than a direct report from Google Lighthouse.

## How is a Google Lighthouse test run?

When running a Google Lighthouse test, you may find your score changes between runs. This is usually due to changes in underlying conditions such as testing on different devices, using local networks, or the browser used. Run Google Lighthouse several times to account for variability.

<aside>
⚙ You can learn more about what impacts score variability in this [Google Lighthouse Score Variability Documentation](https://github.com/GoogleChrome/lighthouse/blob/main/docs/variability.md)

</aside>

You may also find that Google Lighthouse and PageSpeed Insights give you two very different results. This is because Lighthouse uses your local network (thanks to being hosted in your browser or directly in your codebase). Meanwhile, PageSpeed Insights is hosted by Google meaning this score can be affected by server latency. By using a local server, Google Lighthouse usually provides a far more lenient score, which isn’t always an accurate representation of the experience your users have when visiting your site.

Make sure you run both desktop and mobile tests too. Many people will run a desktop test, get scores of 90+ and think that’s all good… but the same test on mobile might return a score of 40.

Your site performance changes depending whether people are viewing your site on desktop or mobile. So, make sure you test both device types and focus on improving the least performant device type first.

Mobile tests are harsher because these devices have slower processes and network connection. On-site elements (such as images) might be optimised for desktop but not mobile. A 1000 x 1000 image might work great for your site on desktop, but it’s going to be too large for most phones to handle or load effectively. Other elements, like layout, will similarly need to be optimised for mobile and desktop to give the best experience for your users.

## What is a good Lighthouse score?

After running your site through Lighthouse, you’ll be presented with a performance snapshot showcasing a series of scores rated from 0 - 100. The metrics measured are:

- Performance
- Accessibility
- Best practices
- SEO
- Progressive web apps (if enabled)

If simple dashboard metrics weren’t helpful enough, Google takes this up a notch by colour-coding the scores to determine performance:

- **0 to 49 (red)**: Poor
- **50 to 89 (orange)**: Needs improvement
- **90 to 100 (green)**: Good

[data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27768%27%20height=%27613%27/%3e](data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27768%27%20height=%27613%27/%3e)

[https://skyward.digital/\_next/image?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F180053%2F1717x1370%2Fb4b750631b%2Fblog-content1-optimise-your-lighthouse-score-and-watch-your-site-performance-soar.png%2Fm%2F768x613%2Ffilters%3Aquality(75)%3Aformat(webp)&w=1720&q=75](<https://skyward.digital/_next/image?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F180053%2F1717x1370%2Fb4b750631b%2Fblog-content1-optimise-your-lighthouse-score-and-watch-your-site-performance-soar.png%2Fm%2F768x613%2Ffilters%3Aquality(75)%3Aformat(webp)&w=1720&q=75>)

A score between 90 - 100 is considered to be a “good” score. You need to be striving towards a score of 90 if you want to make sure your site offers a good user experience.

However, the higher the Lighthouse score is, the harder it is to achieve.  Achieving a perfect score of 100 will be challenging, but ensuring you’ve got at least “good” scores for every category will guarantee you’re getting the best results.

And you’ll be able to feel the difference.

## Why does it matter?

Before you roll your eyes and start thinking “Great, one more thing to add to my to-do list”, let me explain **why** optimising your Lighthouse score matters.

When ranking your website for Lighthouse, on their search engine, or anywhere; Google only cares about one thing. User Experience.

They want to ensure that the right users are finding and staying on your website long enough to get the information they need.

So by improving your Lighthouse score, you’re not just making Google happier, you’re helping to create a better experience for your users overall.

And that, in turn, leads to numerous other benefits.

### Skyrocket your SEO

Google created Lighthouse. They also run the biggest search engine in the world. Everything Google does is centred around helping people find what they are looking for.

Lighthouse scores don’t affect Google Search rankings. But your Lighthouse report will make your site more user-friendly by helping you find and fix issues.

If you aren’t familiar with [Core Web Vitals](https://web.dev/vitals/), these are metrics that measure the loading, layout stability, and interaction readiness of your web pages. How you score on these metrics is an indication of how user-friendly your site may *(or may not)* be. In August 2021, page experience was [added as a global ranking factor](https://developers.google.com/search/blog/2020/11/timing-for-page-experience) for search engine optimisation (SEO).

Lighthouse lets you easily measure site performance across these metrics so you see which areas of user experience need your attention most. You can then use these metrics to optimise site performance, accessibility and usability to enhance SEO.

### See a problem, find a solution

What if I told you that rather than guessing where, and what, the roadblocks on your site might be, you could see clear warning signs that told you exactly what those roadblocks were? You’d want to know, right?

That’s exactly what the Google Lighthouse report does. It doesn’t just tell you if your site is performing poorly. It tells you why. You can then use that information to implement solutions.

Google Lighthouse report identifies common problems and then provides recommendations on how to fix them. It’s a powerful tool for effectively monitoring website quality without having to do too much manual heavy lifting.

### Better UX

I know I’ve already mentioned the importance of Google Lighthouse for UX. But, it really is important.

The accessibility test within Lighthouse contains 35 audits. That’s 35 chances to improve your site’s accessibility and usability — two factors that are key for enhancing user experience for everyone, especially those who experience the web differently.

Making changes to close the ring in the other reports will all help benefit UX too. From a performance point of view, a higher score will mean having faster loading pages and lower user frustration.

Google’s primary goal is to help people find exactly what they need. Lighthouse gives you the chance to fix poor UX across all areas of your website to ensure it’s in its best possible shape for your site visitors.

### Faster loading times

Load speed can make or break your website.

Slow websites are frustrating. But reducing loading time isn’t just about overcoming frustrations.

Every second counts when it comes to web page loading times, and the first 5 seconds can have the biggest impact. Conversion rates drop by [**an average of 4.42%**](https://www.portent.com/blog/analytics/research-site-speed-hurting-everyones-revenue.htm) with every additional second of loading time between those first 0 - 5 seconds.

Along with increasing conversations and reducing user frustrations, page speed is another important factor for SEO and getting your website to that number one spot in Google search results.

Google Lighthouse’s performance audit measures your site speed against seven different metrics so you can speed up web page loading times to help your users **and** organic rankings.

### More conversions

Happier users = more conversions.

By now, you’ve probably realised that optimising your Lighthouse score is all about user experience and keeping your website visitors happy.

By that notion, if you focus on increasing your Lighthouse score and making the recommendations presented, you’ll bring your website performance into closer alignment with user expectations. In turn, your users will have a more positive experience on your site and will be more likely to convert.

Don’t believe me? In a 13,000-respondent strong [survey by Salesforce](https://www.salesforce.com/resources/research-reports/state-of-the-connected-customer/), 88% of consumers said the experience provided is just as important as the products and services on offer.

Strategically improving the user experience is a clear winner, if you ask me.

# How does a Lighthouse report help you?

Both “big” and “small” brands can benefit from running a Lighthouse audit and improving their score.

If you’re the owner of a small business or start-up, the Lighthouse audit offers clarity over your website performance. You can then use the report to identify clear recommendations and opportunities for improvement.

You might be able to implement some of these recommendations yourself. For example, the performance report might recommend that you “properly size images”. This is a change that you could execute, by taking images and resizing them in photoshop, to reduce loading time and improve website performance.

But some recommendations are best left to an experienced web developer, and you’ll find that as your site grows you’ll want to start automating some of those more manual tasks (which your developer can also help you with).

The Lighthouse audit gives you a good baseline understanding of your current performance before you engage the help of web developers. They can then guide you through which issues to tackle first to improve website optimisation.

For big brands and large-scale organisations, the Lighthouse report is a powerful accessory developers can use alongside current web optimisation activities.

As your business grows, so does your website. Overtime, websites can become bloated or sluggish. Using data from lighthouse allows you to make better decisions, and maybe your time is better spent fixing your website performance than creating a new landing page this month.

Running a Lighthouse report is a great way to take things back to basics and remember the fundamentals of good UX when amending your website. Armed with a Lighthouse report, you can take large, complex websites and make them fast-loading and smooth-running.

# Work with us and take your site performance Skyward

In a nutshell, the Google Lighthouse audit is a powerful tool for assessing your website’s UX performance.

Optimise your Lighthouse performance score to tap into improved UX, faster site speeds and more conversions. Plus, you’ll naturally improve organic performance. With all that said, don’t forget that lab tests (like Google Lighthouse) will always give different results from field data gained from real users. Wherever possible, it’s always best to test your site using data from real users that visit your site.

At Skyward, we are an experienced web development team who know what it takes to build performant sites. Our deep understanding of web development, paired with an eye for UX, means we can map out a clear path to resolving site issues and skyrocketing your performance.

So, [**get in touch**](https://skyward.digital/contact) and let’s optimise your website performance.
