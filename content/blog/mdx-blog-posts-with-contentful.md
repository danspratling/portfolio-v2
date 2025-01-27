---
title: MDX blog posts with Contentful and Gatsby
description: Sometimes, you just need a little more from your markdown content.
published: true
publishDate: 2020-05-18
# updatedDate: 2021-01-01
tags:
  - CMS
  - contentful
  - markdown
  - MDX
---

Markdown is a very powerful tool for creating websites. It's often used as a simple way of controlling content and a lot of developers are used to using it from their own blog. When I switched to Contentful I wanted as much control as I had when using MDX but out of the box it's not not that flexible, but we can make it that way.

We need to make sure we've set up our contentful site correctly. Our Content model for our posts must contain a `Long Text` type so we can access the markdown editor.

![Contentful editor markdown test input option](/images/posts/contentful-markdown-mode.png)

> You'll need to be using the markdown editor to be able to follow this guide. Contentful also offers a rich text editor, which this won't work with

In contentful we want to create a blog post which includes some markdown, as well as a custom component.

```markdown
## Heading

This is a paragraph. Lorem ipsum dolor sit amet
<Star>This is what we really care about, a custom react component</Star>
```

Next we need to add markdown to our gatsby site so that we can actually visualise this. In order to get this working with custom components within markdown, we need to use mdx. We also add prismjs to enable code styling.

```bash
//add mdx
yarn add gatsby-plugin-mdx @mdx-js/react @mdx-js/mdx gatsby-remark-prismjs prismjs
```

Then we can setup `gatsby-config.js` to enable markdown support for our site. Notice we're using a remark plugin within our mdx config so we can have all the benefits of plugins created for the remark markdown transformer, but with mdx's additional support for components.

```jsx
{
  resolve: `gatsby-plugin-mdx`,
  options: {
    gatsbyRemarkPlugins: [
      {
        resolve: 'gatsby-remark-prismjs',
        options: {
          classPrefix: 'language-',
        },
      },
    ],
  },
},
```

[Full docs for MDX in Gatsby](https://www.gatsbyjs.org/packages/gatsby-plugin-mdx/)

Now we have markdown support, but we're still not actually using it anywhere. Let's change that.

If you load up your GraphQL explorer and take a look at your contentful data you should see something new.

![Graphql editor selecting markdown from contentful data](/images/posts/content/graphql-contentful-markdown.png)

You can query this from your page template.

```jsx
export const query = graphql`
  query getPost($id: String!) {
    contentfulPost(contentful_id: { eq: $id }) {
      title
      description
      tags
      body {
        childMdx {
          body
        }
      }
    }
  }
`
```

Now we can use it in our page. Don't worry, we'll create our `<Markdown>` component later.

```jsx
const Post = ({ data }) => {
  const { title, description, body } = data.contentfulPost

  return <Markdown>{body.childMdx.body}</Markdown>
}
```

So lets create a component to handle our markdown.

```jsx
import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"

import { Star } from "../components/shortcodes"
const shortcodes = { Star } // we create an object containing all the components we'll need in our markdown

const Markdown = ({ children }) => {
  return (
    // We add a 'markdown' class so we can apply custom styles
    <div className="markdown">
      // We use MDXProvider to pass custom components to our markdown // This is
      what really makes this special!
      <MDXProvider components={shortcodes}>
        // We use MDXRenderer to display our content
        <MDXRenderer>{children}</MDXRenderer>
      </MDXProvider>
    </div>
  )
}

export default Markdown
```

And with all that set up, you'll see your custom components being rendered directly in your markdown! Very nice. But we haven't styled our markdown yet so we need to add some custom styling for that.

> I'm using Tailwind CSS to handle my styling, and as such my css looks strange to match their classes. They are self descriptive, but don't look like normal css.

```scss
//we add a prismjs theme to handle our code tags
@import "~prismjs/themes/prism-solarizedlight.css";

//and our markdown is handled below
.markdown {
  h1,
  h2 {
    @apply text-2xl;
    @apply my-6;
  }

  h3,
  h4,
  h5,
  h6 {
    @apply text-xl;
    @apply my-3;
  }

  a {
    @apply text-green-400;
    @apply underline;
    @apply transition-colors;
    @apply duration-200;

    &:hover {
      @apply text-green-200;
    }
  }

  p {
    @apply mb-6;
  }

  /* Lists */
  ul,
  ol {
    @apply mb-4;
    @apply ml-8;
  }

  li > p,
  li > ul,
  li > ol {
    @apply mb-0;
  }

  ol {
    @apply list-decimal;
  }

  ul {
    @apply list-disc;
  }

  /* Blockquotes */
  blockquote {
    @apply p-6;
    @apply -mx-6;
    @apply mb-4;
    @apply bg-gray-900;

    p {
      @apply mb-0;
    }
  }
}
```

You should now be able to use MDX within your pages while sourcing data from contentful!
