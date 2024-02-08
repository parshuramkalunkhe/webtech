// Arrays method

// slice(): Used to extract part of array and written new array.

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var sliceFromArray = numbers.slice(3, 6);
console.log(`slice() +ve : ${sliceFromArray}`);

sliceFromArray = numbers.slice(-6, -3);
console.log(`slice() -ve : ${sliceFromArray}`);

sliceFromArray = numbers.slice(3);
console.log(`slice() single args : ${sliceFromArray}`);

// splice() : used to modify (add/delete/change) array element to perticuler position (index)
// splice(args 1, args 2, args 3) 
// args1 : takes position value.
// args2 : delete count //element to delete, 0 is for not delete
// args3 : add element (optional)


spliceFromArray = numbers.splice(9, 0, 10, 11, 12, 13, 14, 15); 
console.log(`splice() : ${numbers}`);

// find() : used to filter array. It takes one function as an argument.
findFromArray = numbers.find(function(value, index, ogArr){ // value or element, index or position, original array as an args.
	// console.log(ogArr[index]);
	return value > 10; // return arr element if false it will return undefined.
});

console.log(`find() : ${findFromArray}`);

let result = (value, index, ogArr) => { 
	return value === 10;
}

findFromArray = numbers.find(result);

// findFromArray = numbers.find((value, index, ogArr) => value === 10);

console.log(`find() : ${findFromArray}`);

// == only compares the data
// === compares the data and datatype

// findIndex() : Instead of returning element it return index of the perticular array.
findIndexFromArray = numbers.findIndex((value, index, ogArr) => value === 10);
console.log(`findIndex() : ${findIndexFromArray}`);

// numbers.find((value) => {
// 	console.log(value)
// })

// filter() : 
// numbers.filter((value) => {
// 	console.log(value);
// });

let newArr = numbers.filter((value) => {
	return value > 10;
});

console.log(`filter() : ${newArr}`);

// map() : used to iterate the array 
// numbers.map((value) => {
// 	console.log(value);
// });

let usingMap = numbers.map((value, index, ogArr) => {
	return value + 5;
});

console.log(`map() : ${usingMap}`);

addIntoArray = numbers.map((value, index, ogArr) => {
	return value > 10; // It will take the result of the array that is boolean value in this case.
});

console.log(`result : ${addIntoArray}`);

// reduce() : used to iterate the array. sum of array element.
// numbers.reduce((acc, cvalue) => {
// 	console.log(cvalue);
// });

res = numbers.reduce((accumlator, currentValue) => {
	return accumlator + currentValue;
});

console.log(res);

res = numbers.reduce((accumlator, currentValue) => {
	return accumlator + currentValue;
}, 100); // 20 is accumlator value.

// reduceWrite() assignment

console.log(res);


// Loops

// for loops

let name = "saiteja";

console.log("Using for loop.");
for (let i = 0; i < name.length; i++){
	console.log(name[i]);
}

console.log();

console.log("Using for in loop");
for (let index in name){
	console.log(name[index]);
}

console.log();

console.log("Using for of loop");
for (let value of name){ // it consider element in string or array
	console.log(value);
}

