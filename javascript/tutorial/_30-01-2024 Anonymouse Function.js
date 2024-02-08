// anonymouse function
// function(){
// 	console.log("anon func");
// }
// used in higher order function and call backs

// "use strict";

var a = function () {
	console.log("func with expression");
}

a(); // called 3 type of func

// 1. Anonymouse function
// 2. named function
// 3. function with expression

// Arrow function

const name = () => {
	console.log("Hello world! ES6");
}

const ganja = (q, z) => {
	console.log(`${q} is ${z} go meet him.`)
}

ganja("saitea", "dealer");
name();

// loosely type
const sum = (a, b) => {
	console.log(a + " " + b)
}
sum(8, );

// for only one parameter
const hello = a => {
}

// for only one line of code 
const Hi = b => console.log("hello")

Hi();

// for only one return statement
const Bye = c => c

console.log(Bye(90))

// Higher order function : the function which take another function as argument.
function z(a) {
	console.log(10);
	// a();
	// a();
	// a();
	// a();
	for (let i = 0; i < 10; i++){
		a();
	}
	return a();
}

// callback function : the function which is passing into another function as value.
z(function () {
	console.log("console");
});  

let callbackfun = () => {
	console.log("call back function");
}

let higherorderfun = (args, a, b, anon) => {
	args();
	console.log(anon());
	return a+b;
}

let c = higherorderfun(callbackfun, 10, 20, function () { return "Hello"; });
console.log(c);


// window object : which is inbuilt object in javascript, It is super most object in javascript.
// console.log(window);
// window.alert("Hello"); or alert("Hello");
// console.log(this) // global this keyword refers to window object. : global means outside the block
console.log(this === window)

const fuc = () => {
	console.log(this)
}

fuc();

a = 100;
console.log(a);
// "use strict" is use to convert js to strictly type.

