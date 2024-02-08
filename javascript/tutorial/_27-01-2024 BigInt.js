// BigInt

let number = 10n; // n denotes or describes it is of BigInt type.

console.log(number + " type of " + typeof number);
// undefined
let undefinedType;
console.log(undefinedType) // undefined is datatype.
// console.log(notDefinedType) // not defined error

// Nan 
let name = "JavaScript";
let stringToNumber = parseInt(name); // --> NaN
console.log(stringToNumber);
console.log(typeof stringToNumber);
// LoopsAndFunctions

// Types of loops in JavaScript
// 1. for loop
for (let i = 0; i < 10; i++) {
	console.log("Hello");
}

console.log("===============");

// 2. while loop
i = 0;
while(i < 10) {
	console.log("While");
	i++
}

console.log("===============");

// 3. do while
i = 0;
do {
	console.log("do-while");
	i++;
} while(i < 10);

console.log("===============");

// 4. for in loop : The JavaScript for in statement loops through the properties of an Object:

const food = {
	name: "aalo",
}

for (let name in food) {
  console.log(food[name]);
}

console.log("===============");

// 5. for of loop : The JavaScript for of statement loops through the values of an iterable object. It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:
let language = "JavaScript";

for (let char of language) {
	console.log(char);
}

console.log("===============");

// Functions
// A JavaScript function is a block of code designed to perform a particular task.

// 1. No args function
function noArgs(){
	console.log("No args function.");
}
// How to call a function or invocation ?
noArgs();

// 2. Args function
function args(name, sal) {
	console.log("Name : " + name);
	console.log("Salary : " + sal);
}
args("parshu", 12000);

// Return : A function can also return a value. The value is returned back to the caller.

const sum = (a, b) => {
	return a + b;
}

let res = sum(1, 3); // here res is storage and sum(1, 3) is caller which returning value 4
console.log("Result : " + res);

// function in objects.
const person = {
  firstName: "Parshuram",
  lastName : "Kalunkhe",
  id       : 1,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

var fullname = person.fullName();
console.log(fullname);