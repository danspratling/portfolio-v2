---
title: Load images faster with Next/Image
description: How to start using Next/Image to automatically optimise your images, boosting website performance and improving user experience without losing image quality
published: true
publishDate: 2023-03-10
# updatedDate: 2021-01-01
tags:
  - NextJS
  - performance
---

Next.js provides a built-in Image Component to automatically optimise your website or application’s images. This is something they’ve continued to build over time and have completely rewritten for Next 13.

Image optimisation is one of the most important elements to consider when optimising any website.

It’s easy to forget to optimise images when the process is manual (i’ve done it plenty!), and uploading just one 5 megabyte image (or larger) will ruin the page speed of your website.

Image optimisation is probably the biggest performance issues faced by most websites.

Fortunately, it’s also one of the easier problems to solve.

That’s where next/image comes in.

## What is next/image?

Next.js Image Component is a plugin for your Next.js website that allows you to input high quality, unoptimised images and then spits out optimised images based on your users’ devices.

Your website users will be served optimised images that often look as good as the original (when viewed within a browser at fixed sizes), but without the extremely large file sizes that come with high quality images.

## Why do we need next/image?

Optimised images provide a better experience for your users.

Pages load faster which means your users can find what they’re looking for more easily, with fewer frustrations.

The Next.js Image Component is a great option (though not the _only_ option) as it works within your website code with very little additional configuration required.

It also encourages image optimisation best practices such as including alt text and reducing content layout shift (CLS) by warning you about missing attributes that are required.

## Setting up next/image

To get started using the Next Image Component you don’t need to do any installation, as it’s already included with your Next.js app.

So you can simply reference next/image anywhere you would like to use it

```jsx
import Image from "next/image"
```

And then to use the Next.js Image Component, simply replace any `<img>` tag

```jsx
export default function Home() {
  return (
    <main>
      <h1>My awesome page content</h1>
      <Image
        src="./images/rocket.jpg"
        alt="A Rocket"
        layout="fill" // we'll talk about this in a little bit
      />
    </main>
  )
}
```

Now you’ve got an optimised image! 🚀

It’s really that simple to get started, but we can do better.

<aside>
👉 You can find the reference docs for the Next.js Image Component [on the next website](https://nextjs.org/docs/api-reference/next/image)

</aside>

<aside>
⚠️ As next/image was completely rewritten for Next 13, if you’re still using Next 12 (or older) you might want to refer [to the legacy docs instead](https://nextjs.org/docs/api-reference/next/legacy/image). Though most of the functionality is similar, there are some small differences.

</aside>

## Required properties

Like a regular `<img>` tag, next/Image requires a few properties to function properly.

### src

Like in a regular image tag, this references your image filepath. You can approach this in one of two ways:

1. **With a static image import**

```jsx
import Image from 'next/image'
import rocket from '../images/rocket.jpg'

export default function RocketImage() => (
	<Image src={rocket} alt="A Rocket" />
}
```

Using a static image, next/image can detect your image width and height for you so you don’t have to worry about specifying them.

1. **Using a path string**

```jsx
export default function RocketImage() => (
	<Image src="/images/rocket.jpg" alt="A Rocket" width={768} height={420} />
}
```

If you’re using a path string then you can reference images from within this project using a relative path, or an external resource using an absolute path. If using an absolute path, you’ll need to specify the domain in `next.config.js`

```jsx
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.skyward.digital", // add your domain here
      },
    ],
  },
}
```

### alt

The `alt` property describes the image for non-visual visitors, including screen readers and search engines. Or, in the event an image fails to load, this description is shown instead.

So it’s important that you add descriptive content here that could be used in place of the image, [_without changing how the content of the page will be understood by users_](https://html.spec.whatwg.org/multipage/images.html#general-guidelines).

For images which are only decorative and do not otherwise contribute to the page content, an empty string should be used instead (`alt=””`).

Elaborating on our example above, the Next Image Component will now look like this:

```jsx
export default function RocketImage() => (
	<Image
		src="/images/rocket.jpg"
		alt="A Rocket with the skyward logo flying towards the moon"
		width={768}
		height={420}
	/>
}
```

### width

The width property represents that maximum horizontal size (in pixels) that your image will be displayed at.

It is required for all images except _statically imported images_, or images using the `fill` property.

### height

The height property represents that maximum vertical size (in pixels) that your image will be displayed at.

It is required for all images except _statically imported images_, or images using the `fill` property.

### Using next/image

And that’s all you need to get started using next/image. By doing this, you’ll get optimised images for your site with very little extra work.

```jsx
export default function RocketImage() => (
	<Image
		src="/images/rocket.jpg" //required
		alt="A Rocket with the skyward logo flying towards the moon" //required
		width={768} // required unless using static imports or fill
		height={420} // required unless using static imports or fill
	/>
}
```

The Next.js Image Component provides a lot of additional helpful functionality that will further enhance your user’s experience and optimise the output images even more for your users devices.

## Optional properties for further image customisation

For further image customisation, you can additionally enhance your Next.js Image Component with optional props. These can further optimise your images, allow images from different sources, and generally improve your user’s experience.

### quality

Default: `75`

How high quality your image is between `1` and `100` with `100` being the best quality (and the largest filesize). This may depend on any custom loaders used, but we like `65` as a good all round high quality/low filesize solution.

### priority

Default: `false`

This property hints to the browser that the image should be prioritised for loading. This does a few things.

- Preloads the image
- Disables lazy loading

It should be used on the largest image(s) above the fold. It may be appropriate to use this on multiple images, if different images are the Largest Contentful Paint (LCP) element above the fold on different devices.

### placeholder

Default: `empty`

When `placeholder="blur"` is used, a placeholder image is used while the image is loading, showing a low-fidelity image in its place until the high quality image can load. This is especially useful for users with poor network speeds as it can hint that content is loading.

If using static imports, this will be generated automatically.

If using dynamic images, you will also need to provide the low fidelity image url to the `blurDataURL` property in a `base64` format (which can be helped with a tool like [Plaiceholder](https://github.com/joe-bell/plaiceholder))

```jsx
export default function RocketImage() => (
	<Image
		src="/images/rocket.jpg" //required
		alt="A Rocket with the skyward logo flying towards the moon" //required
		width={768}
		height={420}
		placeholder="blur"
		blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQY..."
	/>
}
```

### fill

Instead of setting `width` and `height` props you can optionally set `fill` instead. This will allow the image to fill the space of the parent element.

As this makes the child image `position: absolute` within the container, you must set `position: relative`, `position: fixed` or `position: abolute` on the parent.

```jsx
export default function Home() {
  return (
    <div className="container" style={{ position: "relative" }}>
      <Image
        src="/images/rocket.jpg"
        alt="A rocket"
        fill // this will now fill the space of the parent
      />
    </div>
  )
}
```

You may also want to adjust a few other `style` properties to make sure your image displays the way you want.

- Parent `height`: As the image is absolute to fill the parent container, it will no longer have a fixed height for the DOM to draw from.
- Image `object-fit`: The image will stretch to fill the container, but this result may not be desired.
  - `object-fit: contain` will fit the image within the container, preserving the aspect ratio
  - `object-fit: cover` will force the image to fill the entire container, cropping any overflowing content (you may also need to add `overflow: hidden` to the parent).

### loader

This custom function allows you to load images from external sources, like [Cloudinary](https://cloudinary.com/), [Imgix](https://imgix.com/), or wherever else you’d like to load images from.

It returns a URL string for the image using the following parameters

- `src`
- `width`
- `quality`

**Example**

```jsx
import Image from "next/image"

const customLoader = ({ src, width, quality }) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`
}

const CustomImage = (props) => {
  return (
    <Image
      loader={customLoader}
      src={props.filename}
      alt={props.alt}
      width={props.width}
      height={props.height}
    />
  )
}
```

It’s likely that you’ll be applying loaders to many of your images (not just one). If you’d like to do that, you can instead use the `loadFile` configuration in `next.config.js` to configure every `next/image` in your application without passing loader as a prop.

**Cloudinary loader example**

```jsx
import Image from 'next/image'

const cloudinaryLoader = ({ src, width, quality }) => {
	const path = src.substr(0, src.lastIndexOf('/')
	const filename = src.substr(src.lastIndexOf('/')
	return `https://res.cloudinary.com/${path}/w_${width}/q_${quality || 75}/${filename}`
}

const MyImage = (props) => {
  return (
    <Image
      loader={cloudinaryLoader}
      src={props.filename}
      alt={props.alt}
      width={props.width}
      height={props.height}
    />
  )
}
```

[Cloudinary docs](https://cloudinary.com/documentation/image_transformations)

**Imgix loader example**

```jsx
import Image from "next/image"

const imgixLoader = ({ src, width, quality }) => {
  return `https://imgix.net/${src}?w=${width}&q=${quality || 75}&auto=format&fit=crop`
}

const MyImage = (props) => {
  return (
    <Image
      loader={imgixLoader}
      src={props.filename}
      alt={props.alt}
      width={props.width}
      height={props.height}
    />
  )
}
```

[Imgix docs](https://docs.imgix.com/?_ga=2.160563197.1155848322.1673431239-481697242.1673431239)

**Extending your loader functionality**

If you’d like to pass additional props to your loader, you can do so by creating your own custom image file and using your loader function as a transformer instead.

```jsx
import Image from 'next/image'

const customLoader = ({ src, width, quality, height, grayscale }) => {
  return `https://example.com/${src}?w=${width}&h=${height}&q=${quality || 75}&grayscale=${grayscale}`
}

const CustomImage = (props) => {
	const src = customLoader({
		src: props.fileName,
		quality: props.quality
		width: props.width,
		height: props.height,
		grayscale: props.grayscale
	})

  return (
    <Image
      src={src}
      alt={props.alt}
      width={props.width}
      height={props.height}
    />
  )
}

export default CustomImage
```

### sizes

This provides information to the image about how large the image should be at different breakpoints. This is especially useful for images which use `fill` or are styled to be responsive as it can prevent images that are too large for the current device from loading.

The Next.js Image Component will also use the sizes property to generate the appropriate matching `srcSet` property for your image.

Sizes is an incredibly clever (and complicated) browser function that works out what the best image is to display for every current user.

Essentially, it works like this:

`(max-width: 1200px)` Like in css, this denotes when the breapoint changes

`50vw` at the current viewport, pick an image that is equal to 50% of the viewport width (or next closes match)

When combined, this means: up to a viewport width of 1200px, pick an image that’s equal to 50% of the current viewport (or the closest match).

And when many of these are stacked together, you can build up a very granular picture of how images should be loaded in.

```jsx
export default function RocketImage() => (
	<Image
		src="/images/rocket.jpg" //required
		alt="A Rocket with the skyward logo flying towards the moon" //required
		fill
		sizes="(max-width: 768px) 100vw,
					 (max-width: 1200px 50vw,
					 33vw"
	/>
}
```

Because you’re only loading the image that’s appropriate for the current device and displayed image size, you’ll get the closest match to the image you currently need.

If you know the exact dimensions of devices you’re planning on using, you can set the [_deviceSizes_](https://nextjs.org/docs/api-reference/next/image#device-sizes) and [_imageSizes_](https://nextjs.org/docs/api-reference/next/image#image-sizes) properties in your `next.config.js` file to further automate this process.

## Summary

And that’s everything you’ll need to understand next/image and begin using it effectively in any project you’re working on.

If you’re looking for further reading, you can dig deeper by reading The [Next.js Image Component docs on the Next.js website](https://nextjs.org/docs/api-reference/next/image). They also have a few [additional niche properties](https://nextjs.org/docs/api-reference/next/image#advanced-props) listed there.
