// Strings

let name = "Parshu"; // single quote or double quote 
console.log(name.length);

// Template literals (backticks)
// We can insert variables directly in templage literal. This is called string interpolation.

var message = `Hello ${name}`
console.log(message);

// Escape sequence characters
// If you try to print the following string, js will misunderstand it.

let antihero = 'Adam D\'Anelo'; // single quote error just use escape sequence \'
console.log(antihero);

//  Others escape sequence cahracters are as follow

// \n --> new line
// \t --> tab
// \r --> carriage return

// String properties and methods.
console.log(name.length); // display length of string
let upp = name.toUpperCase();
console.log(upp); // display uppercase string
console.log(name.slice(2, 4)); // display slice of string (form 2 to 4, 4 is not included)
console.log(name.slice(2)); // display slice of string (from 2 to end)
console.log(name.replace("Parshu", antihero)) // replcae old string with new string.
console.log(name.concat(message, name)); // we can even use + operator
console.log(name.trim()); // removes whitespaces

// Strings are immutable in order to access the character at an index we use the following syntax
console.log(name[0]);
console.log(name[1]);