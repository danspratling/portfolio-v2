---
title: Is Import or Require better for JavaScript Modules?
description: Import and Require are both valid ways for including JavaScript Modules, but which is best? Find out what the differences are and which to use in your project.
published: true
publishDate: 2021-01-05
# updatedDate: 2021-01-01
tags:
  - development
  - performance
---

I've been creating websites for years, but have never thought too hard about how i actually include my libraries. Is there even a right option? Which approach should you use?

## The different ways to include

There are a few different ways which you can include files in javascript. You probably use whichever approach you're most familiar with, or whichever the documentation tells you to use.

We can require modules which includes them in our application

```jsx
const path = require("path")
```

but we can also import them

```jsx
import path from "path"
```

After importing via either method, we can use the library in our app which works the same way for both include methods.

```jsx
//join is a function offered by the path library
path.join(__dirname, filename)
```

In terms of usage, there isn't much difference here.

## How including can affect performance

Above, we are including the entire `path` library just to use a single function, but `path` has a lot more functionality than just that one function and including the entire library to use a single function is inefficient.

We can include just the functions we need with both methods

```jsx
const join = require("path").join
```

```jsx
import { join } from "path"
```

Both of these again will work in the same way as before, but now we can drop the library. When using either method there's no size difference (both will include just the `join` method from the library as well as anything `join` may depend on).

```jsx
// now we don't need to specify path.join as join is included directly
join(__dirname, filename)
```

One thing to consider is if you have a library with a lot of functions you need to use, the include can be cleaner using the `import` approach.

```jsx
// each require is indivudial
const join = require("path").join
const parse = require("path").parse
const sep = require("path").sep
```

```jsx
// but we can group includes when using import
import { join, parse, sep } from "path"
```

This may be something which impacts your project, especially if it's extremely large but for most projects this will be a fairly minor difference, and there's no file size difference between the two.

_It's worth noting that the `import` above will include the entire library instead of just `join` if the library doesn't take advantage of modules, making it much less efficient. Be wary of this. If you run into this issue but still want to use `import` you can instead include only the module using `import join from 'path/join'`_

## Compatibility

This is where we start to see some real differences. `import` was only introduced in es6 (2015), with `require` being the main way to include packages before that.

This means that if you want to ensure compatibility with older browsers then using require is a safer choice, though most modern browsers support `import` and you can transpile back to older versions with babel too.

If you're writing in node.js rather than for the browser, then support for `import` has only been included much more recently, with official support for `import` only coming through in node 14 (2020), and with experimental support in node 12 (2019).

## Futureproofing

As you can imagine, with `import` being the more modern standard it is built to allow more functionality for your app.

### Asynchronous importing

`import` allows files to be read asynchronously, which can help improve performance when compiling and reading the files. You probably won't notice significant improvements in a standard app, but if your app includes a lot of external files, or the files you use are on a significantly slow connection, this may help.

### Dynamic importing

`import` also allows files to be imported dynamically, so instead of including everything you need when the file is first read _which may cause a bloated first load_ it will only include libraries when you need them. For an application which has a lot of functionality behind the scenes **like many modern SaaS products**, delaying the import of specific functionality until it's needed can have a serious performance benefit for the user.

### Tree shaking

Another benefit of `import` is tree shaking. Tree shaking is a term for pruning modules which aren't being used in your app, ensuring that only the code you need is included. While included methods will often rely on other methods under the hood, you likely won't need everything. Using `import` allows anything which is completely unused to be _shaken out_ so you're only left with useful code.

Of course, all of these approaches will only work if you _don't_ transpile `import` to act like `require` so you'll have to give up compatibility on older browsers to gain these improvements.

## Conclusion

There isn't really a _correct_ way of including files, but the way you should use will depend on what you're trying to achieve.

`require` is better if you need to ensure compatibility with older browsers, especially if you aren't sure what your browser targets are.

`include` is better for most other scenarios, especially if you're trying to heavily optimize your app.

Regardless of which approach you choose, consistency is important as it helps other developers understand what you're aiming to achieve while avoiding

If you're just starting out, and you're not sure which to pick, I would suggest using include. It's the more modern standard, which means you won't be sacrificing anything by using it but if your app needs to support older standards it's fairly easy to convert `import > require` using a transpiler like _babel_, which means this is probably the way to go for most users. Just beware of including the entire library like mentioned above when doing this.

Here's what I recommend as the most flexible approach that avoids performance issues regardless of your config.

```jsx
//for external modules
import { Link } from 'next/link'

//for your internal modules
import Hero from '../../components/Hero.js
import ArticleFeed from '../../components/ArticleFeed.js
```
