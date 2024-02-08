// Immediate Invoke Function
// Syntax --> (function name(){})() create/declare function `(name(){})()` THEN call it immediately. 
// It is used to avoid the global pollution. very rare cases we will used this
let a = () => {
	console.log("hello");
}

(function(a) {
	console.log("Immediate Function.");
	a();
})(a)

console.log();

// Number() \ parseInt() \ parseFloat()

// parseInt() : It used to convert string to number
console.log(parseInt(":"));

// Number() : It used to convert any to number. if not then it convert to NaN (Not a Number)
// "", null, false --> zero ; undefined -> NaN
console.log(Number(true));
console.log(Number(""));

// parseFloat() : It used to convert string to number. It is used store floating number.

let i = "100.314";
console.log(parseInt(i));
console.log(parseFloat(i));

console.log(20/6); // it return floating number
console.log(parseInt(20/6));

console.log();

// # Variable Hoesting (Black Hoesting)
// 1. Moving variable declaration to the top of the scope.
// 2. If we try to access that var variable before declaration and initialization it will print undefined and in case of let, const it will throw error.  

console.log(z); // for var global assign default value is undefined.
// console.log(x); // CTE : ReferenceError: Cannot access 'arrow' before initialization (Temporal dead zone)
// console.log(y); // CTE : ReferenceError: Cannot access 'arrow' before initialization (Temporal dead zone)
var z = 10;
let x = 20;
const y = 30;

// cause of variable hoesting the variables declare already inside script scope.

console.log();

// # Function Hoesting
// 1. Moving function declaration to the top of the scope and it is applicable only for named function.
// 2. We can called the named function before the function declaration.

hello(); // Named function hoested in the top

function hello() {
	console.log("hello");
	console.log("mellow");
}

// arrow(); // Arrow function CTE : ReferenceError: Cannot access 'arrow' before initialization

let arrow = () => { 
	console.log("mellow");
	console.log("hello");
}

// hof(arr, 10, 20); // CTE : ReferenceError: Cannot access 'arr' before initialization

function hof(a, b, c){ 
	a();
}

let arr = () => { 
	console.log("mellow");
	console.log("hello");
}

console.log();

// NPD : array, object, function


// Array 
// 1. Array is the non primitive data type.
// 2. It is used to store multiple values in one variable.
// 3. In JavaScript Array length not fixed.
// 4. It is index data structre and index pos always start from 0 and goes to the n - 1.
// 5. The data type of array is object.

// Syntax : declare the variable using var or let or const
// var arr = []; you can able store any data type in array.

var homoArr = [1, 2, 3]; // this type of array is called homogeneous array.
var heteroArr = [1, false, undefined, null, "sai", 1n, function () {console.log("func inside array."); return "In"}, {name : "savan"}, [100, 200, 300]]; // this type of array is called heterogenous array.

console.log("array homogeneous : " + typeof homoArr);
console.log("array heterogeneous : " + typeof heteroArr);
console.log();

console.log(homoArr);
console.log();

console.log(heteroArr);
console.log();

for (let i = 0; i < homoArr.length; i++) {console.log(homoArr[i]);}
console.log();

homoArr.forEach((index) => {console.log(index);});
console.log();

heteroArr.map((index) => {console.log(index)});
console.log();

var index = 0;
while(index < homoArr.length) {
	console.log(homoArr[index]);
	index++;
}
console.log();

homoArr[2] = {
	name: "sai",
	email: "sai@sai.com",
};
console.log(homoArr);
console.log();

// Q. How to called the function present inside array. --> arr[index]()
console.log(heteroArr[6]());
console.log();

// Q. If the using delete operator does it modify array lenght
delete homoArr[0];
console.log(homoArr);
console.log();

