// operators in javascript

let a, b;

a = 10;
b = 20;

// 1. Arithmetic Operators
console.log("1. Arithmetic Operators");

console.log("Addition : " + (a + b));
console.log("Substraction : " + (a - b));
console.log("Multiplication : " + (a * b));
console.log("Exponentiation : " + (a ** b));
console.log("Division : " + (a / b));
console.log("Modulus : " + (a % b));
console.log("Increment++ : " + (a++));
console.log("Decrement-- : " + (b--));
console.log("++Increment : " + (++a));
console.log("--Decrement : " + (--b));

// 2. Assignment Operators
console.log("2. Assignment Operators");

console.log("= : " + (a = b));
console.log("+= : " + (a += b));
console.log("-= : " + (a -= b));
console.log("*= : " + (a *= b));
console.log("/= : " + (a /= b));
console.log("%= : " + (a %= b));
console.log("**= : " + (a = a ** b));

// 3. Comparision Operators
console.log("3. Comparision Operators");

console.log("== : " + (a == b)); // equal to
console.log("!= : " + (a != b)); // not equal
console.log("=== : " + (a === b)); // equal value and type
console.log("!== : " + (a !== b)); // not equal value or not equal type
console.log("> : " + (a > b)); // greater than
console.log("< : " + (a < b)); // lesser than
console.log(">= : " + (a >= b)); // greater than or equal to
console.log("<= : " + (a <= b)); // lesser than or equal to
console.log("? : " + (a - b == 0 ? true : false)); // ternary operator

// 4. Logical Operators
console.log("4. Logical Operators");

console.log("&& : " + (true && false)); // logical and
console.log("|| : " + (true || false)); // logical or
console.log("! : " + (!true)); // logical not

// 5. Bitwise operators
console.log("5. Bitwise Operators");

console.log("bit by bit : " + (a + b));