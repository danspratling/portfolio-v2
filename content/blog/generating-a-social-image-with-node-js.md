---
title: Generating a social image with Node.js
description: Stop creating generic images for your blog post social media cards. Instead, let's automate them!
published: true
publishDate: 2020-05-10
# updatedDate: 2021-01-01
tags:
  - node
  - seo
---

If you regularly create new content you'll know that sharing it on social media is one of the best way to gain views, and the impression you make starts as soon as you share that post. But creating images is hard, especially if you create a lot of content.

What if we could automate it?

> For blog posts to be effective on social media, they must have a unique, eyecatching, descriptive image.

Canvas is a great utility for 'drawing' images with code. It works similarly to how you'd expect to place content on the web within an absolute box, and for putting together something simple like a social image, isn't too difficult to work with.

```bash
npm i canvas
```

First we want to draw a canvas. This acts similarly to a design app, where you create a space to work in.

```jsx
const fs = require("fs")
const { createCanvas } = require("canvas")

//draw canvas
let width = 1200
let height = 630
const canvas = createCanvas(width, height)
```

Now we have a box we can work within. We can paint the background to match the theme of this site. I'm painting 2 layers here, to create a border.

```jsx
// paint the background green
context.fillStyle = "#68d391"
context.fillRect(0, 0, width, height)

// adjust the canvas
width = width - 50
height = height - 50

// paint another layer, which is slightly smaller than the last and black
context.fillStyle = "#000"
context.fillRect(25, 25, width, height)
```

![Blank black social card rectangle with thick green border](/images/posts/content/node-social-card-1.png)

> A black box with a green border. It's a good start, but it's a bit boring. Let's spice things up.

To make it more interesting, we'll give the box some depth by adding a drop shadow.

```jsx
context.shadowOffsetX = 0
context.shadowOffsetY = 0
context.shadowBlur = 25
context.shadowColor = "rgba(0,0,0,0.7)"
```

I also prefer the look of rounded corners. It goes with the Twitter design really well, which is where my links are primarily shared.

Adding rounded corners is a bit more complicated though, as it's not inherently supported, so we need to create a function to improve `context.fillRect`.

```jsx
function roundRect(
  ctx, //our context
  x, //start x
  y, //start y
  width, //x width
  height, //y height
  radius, //radius of corner rounding
  fill, //background
  stroke //border
) {
  if (typeof stroke === "undefined") {
    stroke = true
  }
  if (typeof radius === "undefined") {
    radius = 5
  }
  if (typeof radius === "number") {
    radius = { tl: radius, tr: radius, br: radius, bl: radius }
  } else {
    var defaultRadius = { tl: 0, tr: 0, br: 0, bl: 0 }
    for (var side in defaultRadius) {
      radius[side] = radius[side] || defaultRadius[side]
    }
  }

  //draw a line with curved corners around our box
  ctx.beginPath()
  ctx.moveTo(x + radius.tl, y)
  ctx.lineTo(x + width - radius.tr, y)
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr)
  ctx.lineTo(x + width, y + height - radius.br)
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height)
  ctx.lineTo(x + radius.bl, y + height)
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl)
  ctx.lineTo(x, y + radius.tl)
  ctx.quadraticCurveTo(x, y, x + radius.tl, y)
  ctx.closePath()

  //fill it in
  if (fill) {
    ctx.fill()
  }
  if (stroke) {
    ctx.stroke()
  }
}
```

And now we just need to replace our old fill with our new function

```jsx
// context.fillRect(25, 25, width, height)
roundRect(context, 25, 25, width, height, 15, true, false)
```

![Blank black social card rectangle with thick green border, rounded and with a shadow between the layers](/images/posts/content/node-social-card-2.png)

Now we can start adding in some text. First, lets style it.

```jsx
context.font = "bold 82pt Ubuntu"
context.textAlign = "left"
context.textBaseline = "top"
context.fillStyle = "#fff"
```

Then we want to add some padding around the edge so it doesn't press right against the edge of the box.

```jsx
width = width - 50
height = height - 50
```

And start adding some text

```jsx
context.fillText("Hello world", 60, 70)
```

Awesome, now we have a social card which we could use!

![Social card now with text, but the text doesn't wrap](/images/posts/content/node-social-card-3.png)

Well it's not perfect yet as you can see. The title overlaps the edge of the card if it's too long, but we can fix that with a loop!

```jsx
const title = "Dan Spratling Freelance developer & designer"
const words = title.split(" ")
let line = ""
let fromTop = 70
words.forEach((word) => {
  let testLine = line + word + " "
  //print a line if the next word will make it overlap the canvas
  if (context.measureText(testLine).width > width) {
    context.fillText(line.trim(), 60, fromTop)
    line = word + " "
    fromTop = fromTop + 125
  } else {
    line = line + word + " "
  }
})
context.fillText(line.trim(), 60, fromTop)
```

And we finally have a usable card!

![Social card with wrapping text!](/images/posts/content/node-social-card-4.png)

To add some final touches, i've added my domain and my twitter handle to the card too

```jsx
//insert domain
context.fillStyle = "#ccc"
context.font = "bold 24pt Ubuntu"
context.fillText("danspratling.dev", 60, 540)

//insert handle
context.fillStyle = "#ccc"
context.font = "bold 24pt Ubuntu"
context.textAlign = "right"
context.fillText("@dan_spratling", 1140, 540)
```

Which gives us the final card design. Looking pretty good, right?

![Completed social card with wrapping title, domain, and social media handle](/images/posts/content/node-social-card-5.png)

Now all we have left to do is save the image once it's been created.

```jsx
const buffer = canvas.toBuffer("image/png")
fs.writeFileSync(`static/social-image.png`, buffer)
```

Here's the final code for if you want to generate one yourself

```jsx
const fs = require("fs")
const { createCanvas } = require("canvas")

function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
  if (typeof stroke === "undefined") {
    stroke = true
  }
  if (typeof radius === "undefined") {
    radius = 5
  }
  if (typeof radius === "number") {
    radius = { tl: radius, tr: radius, br: radius, bl: radius }
  } else {
    var defaultRadius = { tl: 0, tr: 0, br: 0, bl: 0 }
    for (var side in defaultRadius) {
      radius[side] = radius[side] || defaultRadius[side]
    }
  }
  ctx.beginPath()
  ctx.moveTo(x + radius.tl, y)
  ctx.lineTo(x + width - radius.tr, y)
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr)
  ctx.lineTo(x + width, y + height - radius.br)
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height)
  ctx.lineTo(x + radius.bl, y + height)
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl)
  ctx.lineTo(x, y + radius.tl)
  ctx.quadraticCurveTo(x, y, x + radius.tl, y)
  ctx.closePath()
  if (fill) {
    ctx.fill()
  }
  if (stroke) {
    ctx.stroke()
  }
}

//define canvas size
let width = 1200
let height = 630

//draw canvas
const canvas = createCanvas(width, height)
const context = canvas.getContext("2d")

//Fill the background
context.fillStyle = "#68d391"
context.fillRect(0, 0, width, height)

//readjust width and height
width = width - 50
height = height - 50

//fill an inner container to simulate a border
context.shadowOffsetX = 0
context.shadowOffsetY = 0
context.shadowBlur = 25
context.shadowColor = "rgba(0,0,0,0.7)"
context.fillStyle = "#000"
roundRect(context, 25, 25, width, height, 15, true, false)

//set the copy style
context.font = "bold 82pt Ubuntu"
context.textAlign = "left"
context.textBaseline = "top"
context.fillStyle = "#fff"

//readjust width and height again
width = width - 50
height = height - 50

//redraw the title over multiple lines
const words = title.split(" ")
let line = ""
let fromTop = 70
words.forEach((word) => {
  let testLine = line + word + " "
  if (context.measureText(testLine).width > width) {
    context.fillText(line.trim(), 60, fromTop)
    line = word + " "
    fromTop = fromTop + 125
  } else {
    line = line + word + " "
  }
})
context.fillText(line.trim(), 60, fromTop)

//insert domain
context.fillStyle = "#ccc"
context.font = "bold 24pt Ubuntu"
context.fillText("danspratling.dev", 60, 540)

//insert handle
context.fillStyle = "#ccc"
context.font = "bold 24pt Ubuntu"
context.textAlign = "right"
context.fillText("@dan_spratling", 1140, 540)

//export image
const buffer = canvas.toBuffer("image/png")
fs.writeFileSync(`static/social-image.png}`, buffer)
```
