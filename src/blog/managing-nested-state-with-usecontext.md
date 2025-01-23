---
title: Managing nested state with useContext
description: Sometimes, state management can get really complex. Let's create a simple modal with useContext.
published: true
publishDate: 2020-05-07
# updatedDate: 2021-01-01
tags:
  - development
  - react
---

Managing state using React hooks is one of the more managable ways of doing so

```jsx
const [state, setState] = useState()
```

but when you need to update your state from another component, things start to get harder.

If a child component updates a parent, you might consider passing the state as a prop.

```jsx
const Parent = () => {
  const [state, setState] = useState()

  return <Child state={state} setState={setState} />
}
```

This approach is fine for small cases, but what if we want to go more than one level deep?

```jsx
const Parent = () => {
  const [state, setState] = useState()

  return <Child state={state} setState={setState} />
}

const Child = ({ state, setState }) => {
  return <GrandChild state={state} setState={setState} />
}
```

Now we're just passing props through components that don't even need access to them.

That's a good way to confuse ourselves, when we update a component in the future, change a prop and break the entire app.

## useContext is a better way

If you need to manage state through multiple components, useContext is the way to go.

You set up a context provider which holds your state, and allows access to that state from any nested component.

Let's create a modal which opens and closes when we click an element in the header navigation.

First we set up our context

```jsx
//modalContext.js
import React, { useState } from "react"

const ModalContext = React.createContext([{}, () => {}])

const ModalProvider = ({ children }) => {
  const [state, setState] = useState({})
  return (
    <ModalContext.Provider value={[state, setState]}>
      {children}
    </ModalContext.Provider>
  )
}

export { ModalContext, ModalProvider }
```

This does a few things.

Create context which sets up our state (which is really just an object, and a function)

```jsx
const ModalContext = React.createContext([{}, () => {}])
```

Which allows us to do this

```jsx
const [state, useState] = useContext(ModalContext)
```

Looks pretty familiar, right?

We also creates a provider which we'll wrap around our components, to allow us to access state from anywhere and ensure it always remains correct.

```jsx
const ModalProvider = ({ children }) => {
  const [state, setState] = useState({})
  return (
    <ModalContext.Provider value={[state, setState]}>
      {children}
    </ModalContext.Provider>
  )
}
```

## using useContext

```jsx
//App.js
import React from "react"

import Modal from "./Modal"
import { ModalProvider } from "./ModalProvider"

const App = () => {
  return (
    <ModalProvider>
      <div className="container">
        <div className="page-content">...</div>
      </div>
      <Modal />
    </ModalProvider>
  )
}

export default App
```

We wrap our entire app in the modal provider so that we can use our modal state from anywhere, though you could make this more specific if you choose to wrap just certain parts of your app in it.

Now everything has access to the state, we can access it from any component. Here is our modal.

```jsx
//modal.js
const Modal = () => {
  const [state, setState] = useContext(ModalContext)

  if (state.modal) {
    return (
      <div className="modal">
        <div
          className="modal-close"
          onClick={() => setState((state) => ({ ...state, modal: false }))}
        />
        ...
      </div>
    )
  }
}
```

We retrieve our state

```jsx
const [state, setState] = useContext(ModalContext)
```

We show our modal if the state is true, with the ability to close it by clicking a button

```jsx
if (state.modal) {
  return (
    <div className="modal">
      <div
        className="modal-close"
        onClick={() => setState((state) => ({ ...state, modal: false }))}
      />
      ...
    </div>
  )
}
```

Then we can open our modal from any other component, like the header.

```jsx
//header.js
const Header = () => {
  const [modalState, setModalState] = useContext(ModalContext)

  return (
    <header>
      <nav>
        <button onClick={() => setModalState({ ...modalState, modal: true })}>
          Login
        </button>
      </nav>
    </header>
  )
}
```

Now we have a modal which contains our login form, which can be opened from the header nav.

Notice here that we're setting our modal to true/false. This will obviously not open and close multiple different modals, so if you wanted more than one you could switch this to an ID based approach, swapping booleans for numbers or strings making it possible to switch between different active modals.

useContext can be applied for any components where you have complex state, and it doesn't only have to handle a single object. This is a simple example, but you can play with it and make it work however you need.
