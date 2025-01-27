---
title: How to improve your Google Lighthouse score (and optimise site performance)
description: Increasing site performance is integral for improving user experience and getting better results. Use Google Lighthouse to optimise your site performance
published: true
publishDate: 2023-04-03
# updatedDate: 2021-01-01
tags:
  - performance
---

From improving SEO to speeding up your site and driving conversions, there are many [benefits of using Google Lighthouse](https://www.notion.so/Google-Lighthouse-What-is-it-and-why-is-it-important-ceb0727cc28c43d3bcf7f56425f7727e?pvs=21).

[Google Lighthouse: What is it and why is it important?](https://www.notion.so/Google-Lighthouse-What-is-it-and-why-is-it-important-ceb0727cc28c43d3bcf7f56425f7727e?pvs=21)

Whether you’re working with an experience web developer or going solo, you can use Google Lighthouse to analyse and improve your website’s performance.

# How does Lighthouse calculate scores?

Google Lighthouse scores web pages across a series of five categories on a scale of 0-100. Within the Performance category, your final score is weighted [**based on metrics essential for organic search performance**](https://web.dev/performance-scoring/).

The metrics measured within the Performance audit on Lighthouse 10 are:

- **First Contentful Paint - 10% weighted average:** Marks the time at which the first text or image loads
- **Speed Index - 10% weighted average:** Shows how quickly the contents of a page are visibility populated
- **Largest Contentful Paint - 25% weighted average:** Marks the time at which the largest text or image loads
- **Total Blocking Time - 30% weighted average:** Measures the amount of time that a page is blocked from responding to user input, such as mouse clicks or screen taps
- **Cumulative Layout Shift - 25% weighted average:** Measures the movement of visible elements within the viewport

Weighted average marks the value of each metric when compared to others. This means metrics with a higher weighted average percentage have a bigger impact on the overall performance score. So, a metric with a 20% weighted average is twice as important in the scoring calculation as a metric weighted at 10%.

**\*Side Note:** The Time to Interactive (TTI) metric, which previously had a 10% weighted average, has been depreciated in the Lighthouse 10 update. In turn, the weighted average for Cumulative Layout Shift (CLS) has increased from 15% to 25%. This change better reflects the importance of CLS.\*

The metric results are then converted to a score on a scale of 0-100 based on benchmark data held by Google.

### Check the Lighthouse scoring calculator

The [**Lighthouse scoring calculator**](https://googlechrome.github.io/lighthouse/scorecalc/) is the best place to start when looking to improve your Lighthouse performance score.

This calculator helps you understand the thresholds you should be aiming for if you are looking to achieve a particular score.

[data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27768%27%20height=%27368%27/%3e](data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27768%27%20height=%27368%27/%3e)

![Google Lighthouse Scoring Calculator - Skyward.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c9ebf281-c654-4759-8294-d82b20cf8ce9/Google_Lighthouse_Scoring_Calculator_-_Skyward.png)

Adjust the metric score for each datapoint to see what value you would need to achieve to get your desired performance score. Compare these numbers to your current performance to find opportunities for improvements.

Of course, you _really_ want to be aiming for a perfect 100.

# How to improve your Lighthouse Scores

After all that talk about how Google Lighthouse works out your site performance, how do you actually go about fixing poor Lighthouse scores?

### Working with an experienced web developer

If you want to get the best possible Lighthouse score for your site, you need to work with an experienced and knowledgeable web developer.

Sure, you can DIY some elements, but working with an experienced developer will strengthen the long-term performance of your site. It isn’t about finding quick fixes. It’s about developing a website that performs as well as it possibly can.

Working with a developer means you’ll have access to someone who understands the finer details of performance, best practices for UX, and how to implement long-term solutions. Whether it’s by efficiently fetching data, removing unused JavaScript, or optimising images, an experienced web developer will understand how to find and fix the root cause of Lighthouse issues.

### Do it yourself

Sometimes, the only option is to do it yourself. If, for instance, you are facing strict budget limitations and aren’t in a position to invest in your web development support.

We only advise going down the DIY route if you are already familiar with performing complex web development tasks. Otherwise, you could wind up doing more harm than good.

While we don’t advise doing it yourself, it is possible to improve your performance score with these tips.

## Fixing Lighthouse Issues

### Focus on most severe issues first

Above anything else, you first want to fix the more severe issues.

These are the issues that are having the biggest negative impact on your score. Focusing on these changes will significantly increase your performance. The Google Lighthouse report uses a traffic light system to highlight the severity of issues.

[data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27768%27%20height=%27194%27/%3e](data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27768%27%20height=%27194%27/%3e)

[https://skyward.digital/\_next/image?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F180053%2F716x180%2Fbdcf2c4516%2Fgooglelighthousescore-performanceopportunities-skyward.png%2Fm%2F768x194%2Ffilters%3Aquality(75)%3Aformat(webp)&w=1720&q=75](<https://skyward.digital/_next/image?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F180053%2F716x180%2Fbdcf2c4516%2Fgooglelighthousescore-performanceopportunities-skyward.png%2Fm%2F768x194%2Ffilters%3Aquality(75)%3Aformat(webp)&w=1720&q=75>)

Any issues with a red triangle next to them are the most severe. These are followed by an orange square to indicate issues of a lower severity. Use these colour-coded symbols to identify the most severe issues on your web page and create a priority order based on severity.

### Optimise images

One simple Lighthouse score improvement that anyone can implement is optimising on-site images. This also tends to be one of the most overlooked performance issues.

Large images that have not been adapted to suit the web page presentation can negatively affect website loading time. Resizing images can improve load time and save data.

Before uploading images, compress them and use a smaller file format such as JPEG.

There are ways to automate this process. Most headless frameworks (Like NextJS or Gatsby) offer an Image tool that resizes your images for you. You could also use a service like imgix or cloudinary, that resize images and give you a ton of other controls too.

While compressing images, I recommend also improving any image file names and alt text for accessibility purposes. It’s a good habit to get into, and one that will help accessibility and search engine optimisation (and also keep your frustration to a minimum when trying to reuse an image later).

### Reduce extra packages (or plugins)

Having a large number of packages on your site can reduce loading time, especially if they’re barely used, or specific to one page.

Only install packages that are absolutely necessary, and try to load them only where absolutely necessary. Make a habit of checking through them often and removing any that are redundant or no longer needed.

If you’re using a platform like WordPress that makes plugins abundant and incredibly easy to install, this is even more important for you.

### Prioritise high impact pages

Lighthouse scores are determined on a page-by-page basis. When improving your Lighthouse score, focus on the most important pages first.

Determine which pages are most impactful for your business by scoring them based on:

- Traffic potential
- Conversion rates
- Position in the customer journey
- And any other metrics related to your business goals

For a SaaS company, the sign-up page will likely be one of their high impact pages. Whereas, a B2B service provider might consider their services pages to be the high impact pages.

Improving your Lighthouse performance score is about improving UX. So it makes sense to prioritise the web pages where users spend the most of their time. Fixing the performance of these pages will positively impact the user journey, meaning you can start creating a positive user experience then focus on fixing the lower impact pages next.

### Remove unnecessary elements

Not everything on your site is necessary. Along with removing redundant packages, remove any other unnecessary elements on your site. This can include unused CSS and JavaScript, or even parts of your webpage if they’re not providing any value.

These elements will be dragging down your site loading time, causing them to load far slower than necessary. You can fix this by removing unnecessary elements, or if you can’t remove them instead splitting them up and loading them only when necessary.

### Improve accessibility

Finally, prioritise accessibility at every stage of your website build, development and maintenance.

Accessibility metrics make sure your web pages are usable for people who might interact with your content differently. Accessibility should be a core facet of user experience rather than a box-ticking exercise.

Look at the Accessibility report within your Lighthouse audit and work through the recommendations in order of severity. While some recommendations will require the support of an experienced web developer, you might be able to action some of the other recommendations yourself.

Improving your accessibility score makes it easier for people to access your on-site content and perform the actions they intended.

## Optimise your site performance

We’re pretty good when it comes to getting sites the coveted top score in Google Lighthouse. And that’s because excellent performance and user experience is woven into everything we do.

If you’re ready to prioritise your site performance and improve your Google Lighthouse score, [get in touch](https://www.notion.so/Contact-5c819b087bbe495ca0d414e0e838e8b0?pvs=21) to see how we can help.
