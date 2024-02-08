let y = "java";
console.log(y);

function deom(a = 10, b = 20, c) {
	console.log(a);
	console.log(b);
}

deom();

function demo(a = 1, b = 2, c) {
	console.log(a);
	console.log(b);
}

demo(100, 200);

function outer() {
	let a = "Js";
	console.log("Outer func. " + a);
	function inner() {
		console.log("Inner func. " + a);
	}
	inner();
}

outer();

// closure : scope or memory allocation which gets created when outer function gets executed.
// lexical scoping / scope chaining : it is ability to access function scope variable till we rich to the global scope

// GEC : Global Execution Context & FEC : Function Execution Context.

// GEC (Global Execution Context)
// It creates a global scope
// It creates an object known as 'this'
// It set up memory space for the functions and variables that are globally defined.
// The GEC, while setting any functoin declaration in the memory assigns a default value as 'undefined' to the variable declaration.
// Two phases 1. Declaration Phase, 2. Initialization Phase

// FEC (Function Execution Context)
// It creats an argument object.
// It points to the window object by default.
// It set up memory space for functions and variables the area defined within the function only
// The FEC, while setting any function declarations in the memory, assigns a default value as 'undefined' to the variable declaration. with this, it creates its own exection stack also.