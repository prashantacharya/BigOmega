---
title: "Hiding API keys in .env files with create-react-app"
subtitle: "How to use environment variables from .env file using create-react-app"
date: '2019-10-20'
keywords: "react, CRA, environment variables, .env, API Keys"
---

When you have a project that uses API keys or any other private keys, and want to push it on GitHub, you might probably want to hide those details from any other people who see the code. That's when you have store the API key as environment variable on a `.env` file and add it on a `.gitignore` file on the root of the project. Lucky for you all, `create-react-app` is already configured with git and adds all the list of files and folders that should not be pushed onto GitHub or anything similar like gitlab or bitbucket.

## What is create-react-app?
`create-react-app` is a tool created by facebook to create applications with **React.JS**. It creates all the necessary build setup with no manual configuration required. To initialize a react app using `create-react-app` go to your terminal and type the following:

```shell
$ npx create-react-app hiding-env
```

This gives you the bare minimum setup required to start building React applications.

If you want to learn about environment variables then check out <a href="https://www.youtube.com/watch?v=ADh_OFBfdEE" target='_blank'>this</a> video by Jacob Sorber who is a computer scientist and a professor.

Coming back to our react app, the folder structure now must look like this
```
- hiding-env
	- .git
	- node_modules
	- public
	- src
	package.json
	.gitignore
```

So now, create an `.env` file on the root of your project.
`create-react-app` comes with all the necessary configurations to use environment variables in our applications so there's no setup required.

Open the `.env` file and create an environment variable. The environment variable must be prefixed with `REACT_APP` so any variable you name must be like `REACT_APP_MY_KEY`.

Open `.env` variable and add the following key. It means nothing and just for the test purpose.

```bash
REACT_APP_API_KEY=123jkawqo-123@3
```

Go to the `app.js` file inside `src` and add the following code inside the **App component**.

```js
const key = process.env.REACT_APP_API_KEY
console.log(key)
```

If you run the development server for the app and check the console you will then see the key being printed on the console of your browser.


### Changing the variable depending on environment
There might be a case when you have to hit to a particular endpoint while you are in a development environment and a different endpoint while you are in a production environment. `process.env.NODE_ENV` gives us the information about the environment the app is currently running on. So in order to do that we can do something like the following.


First add the URL to the development and production server in env file

```bash
REACT_APP_DEV_SERVER=localhost:3000/api/some_api
REACT_APP_PROD_SERVER=https://bigomega.dev/api/some_api
```

Then, check the environment you're on with the following code.
```js
if(process.env.NODE_ENV == 'development') {
	// do something
} else {
	// do some other things
}
```

What we want to do is create a url variable that points to either development server or the production server so for that, we can do

```js
if(process.env.NODE_ENV == 'development') {
	const url = process.env.REACT_APP_DEV_SERVER
} else {
	const url = process.env.REACT_APP_PROD_SERVER
}
```

You can refactor the code inside the App component or any other component as follows:

```js
function App() {
	const { NODE_ENV, 
			 REACT_APP_DEV_SERVER, 
			 REACT_APP_PROD_SERVER, 
			 REACT_APP_API_KEY } = process.env

	const url = 
	  	NODE_ENV == "development" ? REACT_APP_DEV_SERVER : REACT_APP_PROD_SERVER
  
  	const key = REACT_APP_API_KEY
  	console.log(key, url);

  	console.log(process.env.NODE_ENV)

  	return(<div className="App">Hi</div>)
}
```

Check the above example and explore the code yourself at <a href='https://codesandbox.io/s/hiding-env-g8r44' target='blank'>this link</a>.

Thanks for reading.