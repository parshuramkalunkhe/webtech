// return statements
// without return statement

console.log("=== return statement ===")
function withoutReturn() {
	console.log("hello");
}
let wr = withoutReturn();
console.log(wr);

// with return statement.
// return statement in function only returns only one value.
// return statement must be the last in the functions.

function withReturn() {
	return 10, 20, 30, 40; // js is loosely type. it update previous value. 10 -> 20 -> 30 -> 40 so the ans is 40.
	// console.log("end");
}

var nums = withReturn();
console.log(nums);

function subject() {
	let a = 100;
	console.log(a);
	return "JavaScript";
}

// direct using console.log(); statement.
console.log(subject());

// storing into container.
let value = subject();
console.log(value);

// returntye : it data type of the data which is return by the function.

function function_name(n) {
	// body...
	// console.log(a);
	var a = 10;
	console.log(a);
	if (n < 5) {
		return function_name(n+1);
	}
}

function_name(1)

console.log("=== return statement ends ===");
console.log();
console.log("=== type casting ===");
// type casting
// implicitly typecasting also known as type coercion
console.log(10 + "10"); // 1010 number to string
console.log(10 - "str"); // NaN
console.log(100 - "200"); // -100 string to number
console.log(50 * "5"); // 250 string to number 

// excplicitly taypecasting
let sal = "500"; // string
console.log(typeof sal);
console.log(parseInt(sal)); // converting string into number explicitly
console.log(typeof parseInt(sal)); // number 

let num = 101;
console.log(num); // number
console.log(typeof num); 
console.log(String(num)); // converting number into string explicity.
console.log(typeof String(num)); // string

// Number.(arguments) : if Number is not converted string to number it will return NaN
// String(arguments) : Used to converts number to string.
// Boolean(arguments) : used to return true or false, if the string is emppty returns false else true. except 0 (false) any number is true. null is false, undefined is false., NaN is false. 
// parseInt(arguments) : Used to convert any datatype to number
// parseFloat(arguments) : Used to convert any datatype to flaoting number

console.log(Number(true)); // false is 0, true is 1

console.log();
console.log("=== isNaN() vs Number.isNaN() ===")
// isNaN() vs Number.isNan() both method are used to check whether it is number or not. return true if it is not a number other wise false.
console.log("isNaN()")
console.log(isNaN(true));
console.log(isNaN("100"));
console.log(isNaN("str"));

console.log("Number.isNaN()");
console.log(Number.isNaN(true));
console.log(Number.isNaN("100"));
console.log(Number.isNaN("str"));
console.log(Number.isNaN(100))

let aNan = "str"; // it is string datatype 
let result = Number(aNan); // Number() is unable to convert string into number and failed so return NaN (Not a Number).
console.log(Number.isNaN(result)); // Number.isNan() check result variable if is nan or not and return ture or false.

// SELECT * 
// FROM 'World' 
// WHERE 'someone' 
// LIKE '%you%';