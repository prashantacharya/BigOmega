---
title: 'Express.JS: The Basics'
subtitle: 'Express JS is the most popular web framework for developing applications in Node.JS. In this blog, I am going to explain the basics of it.'
date: '2020-04-08'
keywords: 'Node.JS, Web Framework, Express.js, node tutorial, express tutorial, mongoDB'
---

Express is the most popular web framework for building applications using Node.JS. It's small, light weight and easy to use. Additionally, it is also unopinionated, therefore it just provides some of the functionalities out of the box but rest of it is our choice. We have full flexibility on what database to use, what ORM/ODM to use, whether we want to implement our own authentication system or use an existing library such as passport.js. Using express in my opinion lets us understand every functioning pieces of our applications.

In this blog, I plan to write about the basics of express. Think of it as a reference to the most common things that are available on the express library.

### Installation and package.json file
In order to use express on our application, we have to initialize a package.json file. To do that, go to a directory where you generally store your projects, open a terminal on that directory and type the following

```shell
# to create a project directory
mkdir express-tutorial

# initialize a package.json file
npm init
```

This command asks you a bunch of questions which you can fill up. If you don't want to answer anything, simply press enter to all the questions. However if you don't want to answer anything, the sensible choice would be to use `npm init -y` which will do the same thing.

We now have a package.json on our project directory. **package.json** is a file that consists all the information of our project such as the author, the version, it's dependencies etc.

#### install express
To install express, type the following on the terminal in the same directory as your `package.json` file.

```shell
npm i express

# OR
npm install express
```

This command will generate you a node_modules directory. This directory stores all kinds of dependencies for our application. If we install other packages, the dependencies will be installed here.

#### Dependency vs development dependency
A dependency is a package which is necessary for our application to run after we deploy it on the server. For example the express package. Without express we will not be able to run our application on the server.

A dev dependency is a package that simplifies the development process but is not required while the application is deployed on the server. Consider a package called prettier. It helps us to format our code (prettify them). Does your application show an error like, **"can't run your code because it's not formatted properly?"** Hence, these kinds of packages go on dev dependency.

Let's install a package that simplifies our development. It's called **nodemon**. Nodemon checks for changes in our files. If the project files are changed then it restarts the server with the latest changes.

```shell
npm i -D nodemon
```
#### Creating a script to run the server
In order to run our project, we need a project file. Create a file named app.js on the root of your project. Now go to your package.json file and make some changes.

Remove everything inside **"scripts"**, and replace it with the following line

```json
"start": "nodemon app.js"
```

Now if you run , `npm start`, our project will be hosted on a local server and if we make changes to the project, the server will restart.

### Routes and request method
Request method means the type of request made to the server. It might be GET request, POST request and some other ones. Read more about it [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods).

On `app.js`, write the following code.

```js
// Require express and store it's instance on a variable called app
const express = require('express')
const app = express()

// create a route
// app.METHOD(route, handler)
app.get('/', (req, res) => {

  // what response to send?
  res.send('<h1>Express server</h1>')
})

// listen to a port
app.listen(3000)
```

Here, on the first 2 lines of the code (not comments), we import express from our installed packages and we create an instance of express and store it on app. 

On the third line of the code, we create a route `/`. The `app.METHOD()` function takes in 2 arguments (+1 optional argument): first is **the path** (example: '/home', '/post/123') and second is **the function to do something** if a request is received on that route. The argument `req` on the handler function has values that comes on a request. For example, the route, the query parameters etc. The argument `res` contains methods to send response if request is received. `res.send()` is one among them. If you want to send JSON response, you can do that as

```js
res.json({"message: "Hello world"})

//  or even

res.send({"message": "Hello world"})

// to send a file
res.sendFile('path to file')
```