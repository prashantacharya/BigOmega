---
title: "Recursion"
subtitle: "This blog explains what recursion is with an example on javascript"
date: '2019-09-04'
keywords: "Python, JavaScript, Recursion, Fibonacci Series"
---

Most of the people find recursion difficult but it's not. Students find difficulty in learning it because of the examples that teachers and online tutorials aim to provide. So in this blog, we are going to talk about recursion with a very basic example of recursion using JavaScript. Recursion is a concept so it is language independent. If you know how to define and call a function in a language that you are using then you can pretty much go along and understand everything that I want to cover in the blog. 

> Simply, recursion is a concept in which a function calls itself again and again until some condition is met. A function that uses this practice and calls itself is called a recursive function. In recursion, the function calls itself with the smaller instance of itself. 

We are going to create a function that takes in a number as an argument and makes a count down from it. For example: **countDownFrom(3) will print 3 2 1 on the screen.**

Open your web developer console on your browser by opening a browser and pressing `ctrl + shift + j` and write a bare minimum function to get started with.

```js
function countDownFrom(n){

}
```

The first thing that we want to do when the function start executing is to print whatever there is in n. In code, that would look something like this

```js
function countDownFrom(n){
	console.log(n) // highlight-line
}
```

## The two cases in a recursive function
So as I said, recursive function calls itself until some condition is met. They are **base case** and **recursive case**.

### Base Case
The base case is the case when the function stops calling itself and returns some value which stops its recurring operation. For example, in the case of a countdown, when the value of the counter is set to 1, it must exit the function. To do that we can simply return without returning anything i.e. null/undefined.

```js
function countDownFrom(n){
	console.log(n)

	// highlight-start
	if(n == 1) 
		return 
	// highlight-end
}
```

### Recursive case
The recursive case is the case in which the function keeps calling itself until the base case is arrived. So in the case of a countdown, if the countdown starts from 5, the function calls itself when the value of counter variable(denoted by n in our case) is 5, 4, 3 and 2 but as soon as the value is 1, it returns. Easy? Let's write that in code.

```js
function countDownFrom(n){

	console.log(n)

	if(n == 1)
		return
	// highlight-start
	else 
		// reduce the value of n by 1
		// and call the function again
		// with the new value of n
		countDownFrom(--n)
	// highlight-end
}

// calling the function here.
countDownFrom(3)
```

The function call at the else statement simply decreases the value of n and calls the function itself as explained in the comments in the code block.

The image below explains what's going on.

![Recursion](images/Recursion.png)

## Refactoring
If you look at the code the else statement is absolutely unnecessary because if the value of n is 1 it returns and if it's not the code below executes. So, if it's not one it will execute the codes below. So, we can refactor it as

```js
function countDownFrom(n){

	console.log(n)

	if(n == 1)
		return
		
	countDownFrom(--n)
}

countDownFrom(5)
```

## Conclusion
Thank you for reading the blog. Feature to subscribe on the mailing list will be coming soon so till then you can follow me on social media to get updates on the new blogs.