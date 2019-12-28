---
title: "A minor error we make while creating a React's state"
subtitle: "This blog explains about a silly error people make while doing a project in React"
date: "2019-12-28"
keywords: "React, JavaScript, React.js, state, hooks"
---

A state in react doesn't have a type. A counter can hold a value of a number at an instance and it can be changed into something else like a string in another instance. Doing this causes no errors and there isn't one either.

Though this doesn't raise an error, an error might arise later unintentionally. Once I was building an app that made an API request to a server and the API returned an array of items. I looped over the array of objects using the map method that exists in the Array prototype. I had initially assigned the state for items object to be a string.

```jsx
const App = () => {
  const [items, setItem] = useState("")

  useEffect(() => {
    /*
     * Make an API call
     * Set the new state to be the response from API call
     */
  }, [])

  return (
    <div>
      <ul>
        {items.map(item => (
          <li>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}
```

For simplicity, I have created a dummy data that I might get as a response from an API. In order to simulate the feel of a real API responding to an AJAX request, I have created a setTimeout that resolves after 3 seconds.

```jsx
const dummyData = [
  {
    id: 1,
    name: "Smith",
  },
  {
    id: 2,
    name: "Dan",
  },
  {
    id: 3,
    name: "Prashant",
  },
]

useEffect(() => {
  setTimeout(() => setItems(dummyData), 3000)
}, [])
```

On the surface, this code looks normal but it's not. The problem lies here

```js
const [items, setItem] = useState("")
```

I have initially assigned items to be an empty string. Now if we see the return statement, I have mapped over items (which I expect to be an array). The value of items is an array only after the network request is resolved and the items is set to the new value we get from the API.

```js
return (
  <div>
    <ul>
      {items.map(item => (
        <li>{item.name}</li>
      ))}
    </ul>
  </div>
)
```

Initially when `items = ''`, `items.map` fails to execute because map method doesn't exist on a string.

> You should always declare/initialize your state carefully. If you know the response you're going to get from an API request then assign it to be the type you're going to get.

So you could do something like this

```js
const [items, setItem] = useState([])
```

Just a minor change from `''` to `[]` would save me hours of random google searches and scratching my head.

I hope you like the blog. If it was worth your time then please consider subscribing to not miss future updates.
