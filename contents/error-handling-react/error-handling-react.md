---
title: "Error handling while making AJAX requests in JavaScript"
subtitle: "Handling major errors that might occur while making AJAX requests via axios or similar technology"
date: "2020-01-21"
keywords: "React.JS, Error Handling, Axios, Fetch, API, AJAX"
---

Error handling is vital while making AJAX requests in any tool. The solution I propose can be applicable for all kinds of frameworks or libraries. I am used to working with React.JS and in this blog, I talk about the approach I use handling errors that occur during AJAX requests.

There can be 3 kinds of situation where we might receive errors.

### Request could not be sent

This kind of error might occur if there's no internet connection or the server is not running.

### Response is recieved that has error message on it

This kind of error might occur in the following scenarios.

We have a server that authenticates the users. We send username and password to the server and the password is incorrect. In this case, we have sent the data, the server has recieved the data but the information we're sending with the request is invalid.

This is the easiest way to handle error because we on the front end (or the side to send request), don't have to think what might have gone wrong. If the API is built considering the errors, it will respond with proper error message.

Axios automatically throws errors that lie out of the range _2xx_ and the kinds of error I have mentioned above returns a status code that falls out this range.

### Some other internal error has occured

I have never faced error of this kind while building application but there might be something that might go wrong. We don't know what it is but there might be something. In this case, we could consider handling these kinds of errors.

Below, I define a function that makes an AJAX request to a dummy API and handle the errors I've mentioned above.

```js
const makeRequest = async () => {
	try {
		const response = await axios.get("https://somedummyapi.com")
		return response
	} catch (error) {
		if (error.request) {
			// Maybe we don't have internet connection
			// or our server has stopped
			console.log("Could not connect to the server")
		} else if (error.response) {
			// Server received a request
			// and responded with a status code
			// that falls out of the range 2xx.
			console.log(error.response.data)
		} else {
			// something happened while making the request
			// that we're not really aware of
			console.log(error)
		}
	}
}
```

These are the most common types of error I try to handle while building JavaScript Apps with React and I think you should too. 😄
