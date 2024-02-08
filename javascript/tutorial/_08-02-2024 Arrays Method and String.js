let numbers = [100, 20, 30, 225, 9];

numbers.sort(); // sort based on ascii values.
console.log(numbers);

numbers.sort((a, b) => a - b); // sort based on numbers
console.log(numbers);

// String : It is a index datastructure.
let names = "JavaScript";

let ch = new Array(10); 

for (let i = 0; i < names.length; i++) {
	 ch[i] = names.charAt(i);
}

console.log(ch);

console.log();

for (let value of names) {
	console.log(value);
}

console.log();

for (let index in names){
	console.log(names[index]);
}

console.log();

names = "Hello world";

console.log(names.slice(2, 5)); // slice(startIndex, endIndex) --> allows negative arguments
console.log(names.slice(-5, -2));
console.log(names.substring(2)); // substring(startIndex, endIndex) --> does not allow negative arguments
console.log(names.substring(2, 5));
console.log(names.substr(3, 5)); // substr(startIndex, length)
console.log(names.replace("ello", "EllO")); // replace(oldString, newString)
console.log(names.replaceAll("l", "1"));
console.log(names.toUpperCase());
console.log(names.toLowerCase());
console.log(names.split(" ")); // convert to array of string 
console.log(names.trim()); // removes space from beginning and ending.
console.log(names.charAt(3));
console.log(names.charCodeAt(0)); // this method return UTF-16 code as an integer (0 to 65535)