---
title: 'Promises in JavaScript'
subtitle: 'Promises is an awesome feature that exists on JavaScript. This blog covers how promises can be implemented on our applications'
date: '2020-02-11'
keywords: 'asynchronous, async-await, promises, javascript, node, react, fetch'
---

Promises in JavaScript behave similar to promises we make normally to people. It's something like **you'll get great score if submit your assignments on time.** In this example, if the student submits his assignments on time, the promise made to him gets fulfilled else, it will not. In JavaScript, promises let us handle tasks that might happen in the future. This concept is really important while making **network requests**.

Promises were released in ES2015 to minimize the callbacky code we used to write.

## The Syntax

In order to use a promise, we have to create a promise object that takes in a callback function with 2 arguments: **resolve** and **reject**.

```js
let myPromise = new Promise((resolve, reject) => {})
```

### Resolve

If the **promise is fulfilled**, **resolve gets called**.

```js
let myPromise = new Promise((resolve, reject) => {
	let condition = true

	if (condition) resolve('Promise is resolved.')
})
```

Here, if the value of condition is true, we resolve the promise. The promise returns the thing inside the resolve function if it get's resolved.

### Reject

If the **promise is not fulfilled**, **reject gets called**.

```js
let myPromise = new Promise((resolve, reject) => {
	let condition = true

	if (condition) resolve('Promise is resolved.')
	else reject('Promise is rejected.')
})
```

We have successfully created a promise object that resolves if the condition is true and rejects if the condition is false. You can modify the use case as you want but this is the basic concept with which you can create promises.

The next step is to use the promise.

## Using the promise object

Prior to promises, we had a concept of callbacks. With callbacks, we'd create a function to do something and after the function completes it's execution, we'd call a function that does something to complement the task done by the first function. This step would be repeated again and again until we reach a callback hell. Promises solve this problem.

We can use a series of `.then`s to use a promise, **if it's resolved**.

Let's see how we'd use the `myPromise` promise object we defined above.

```js
myPromise.then(data => console.log(data))
```

This would output the following on the console

```shell
Promise is resolved.
```

If the promise is rejected, we have to use a catch to handle promise. In order to make the promise reject, we can change the value of condition variable to equal `false`. In such case, our promise get's rejected.

```js
myPromise
	.then(data => {
		// This function only gets called if
		// the promise is resolved
		console.log(data)
	})
	.catch(err => {
		// This function gets called if
		// the promise is rejected
		console.log(err)
	})
```

After running the following program, we'll get the following output on the shell.

```shell
Promise is rejected.
```

If you've noticed, the `data` and `err` we've passed on then and catch equals to the data we've passed to the `resolve` and `reject` functions in the promise object we created above.
