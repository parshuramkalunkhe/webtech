// GEC : Global Execution Context

// It have two phase
// 1. declaration
// 2. initialization

let a = 10;
console.log(a);

var b = 20;
console.log(b);

const c = 30;

function demo() {
	let p = 200;
	console.log(p);

	let a = () => { // for the nested function it creates FEC (Function Execution Context)
		// a();
	}
	// demo();
	let e = "js";
	console.log(e);
}

demo();

// FEC : (Function Execution Context)
// In GEC first its divide into two phase declaration and initialization.
// After declaring all the variable & function the initialization step is started.

// Phase1 : Declaration
// Global or Script Scope 
// let a;
// var b;
// const c;
// demo{};
// let e;

// Phase 2 : Initialization
// FEC (Function Execution Context)
// a = 10
// b = 20
// c = 30
// demo()
// e = "js"

// After declaration initialization start line by line.
// for the demo functions new local scope or FEC is created.
// ----------------------------------------------------------
// Phase 1
// local scope
// This.window  --> This keyword reffered to window object
// let p;
// let a;

// Phase 2
// FEC (Function Execution Context)
// p = 200
// a();
// ----------------------------------------------------------

// Phase 1
// local Scope
// This.window

// Phase 2
// ----------------------------------------------------------

// if we declare any variable with var keyword then it will be stored in the window object.
// we can call that variable using this keyword withint function

// Closure 
// Closure will created only in case of nested function
// when we called outer function veriable inside inner function that time closure will created
// closure is also scope
// closure will get created only when we try to get access outer variable inside inner function

// closure is a scope for memory allocation which gets created when you access the outer function, variable inside the inner function.
// The closure will get's created for outer function.

// lexical scoping or scope chaining.
// Is ability of the function scope to access the variable till it reachest the global scope