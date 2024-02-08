// How to create a array ?
// 1. literal way --> let arr = {};
// 2. Array() constructor --> let arr = new Array(); if you are passing one args it will consider size of an array if it is number data type.
// 3. Array.of() --> if your are passing one args it will consider element.
let arr = new Array();

arr[0] = () => {
	return "MEllow";
}

arr[1] = function a() {
	return "HEllo";
}

let hello = arr[1]();
console.log(hello);

console.log(arr);

console.log(arr.length);

let of = Array.of(20, 10, 40, 30, 60, 50, 80, 70, 100, 90);
console.log(of);

console.log("Check if the `of` is array or not : " + Array.isArray(of)); 
console.log("Check if the `arr` is array or not : " + Array.isArray(arr));

// Methods of Array
// 1. push();
// 2. pop();
// 3. shift();
// 4. unshift();

// 1. push() adds element in the end of array.
const integer = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let pushing = integer.push(110, 120, 130);
console.log(integer);

// 2. unshift() adds element in the beginning of array.
let skills = ["Java", "MySQL", "HTML", "CSS", "MERN", "MEAN"];
skills.unshift("SPRING", "HIBERNET");
console.log(skills);

console.log();
// 3. pop() it will remove element from end index of the array.
let poping = of.pop();
console.log("element remove : " + poping);
console.log(of);

// 4. shift() it will remove element from beginning of the array.
let shifting = skills.shift();
console.log("element remove : " + shifting);
console.log(skills);

// Arrays

const num = [1, 2, 4, 5];
console.log(typeof num);

// Arrays methods
// toString() : num.toString()); // converts arr to string comma separated.
// join() : num.join("-")); // joins al the arr elements using a separator.
// pop() : num.pop()); // removes last element from the arr. pop() : updates the orignial arr returns the popped value.
// push() : num.push(1)); // adds a new element at the end of the arr. push() : modifies the og arr return the new arr length
// shift() : num.shift()); // remove first element and returns it.
// unshift() : num.unshift(2)); // add element to the beginning return enw arr length
// delete : delete num[1]); // arr element can be deleted using the delete operator
// concat() : num.concat(num)); // returns a new arr does not change existing arr.
// splice() : num.splice(4, 1, 3, 4, 2, 5)); // splice can be used to add new items to an arr. nums : returns deleted items modifies the arr, splice(position to add, no of element to remove, elements to be added.)
// slice() : num.slice(2)); // slices out a piece from an array it creates a new arr. slice(2) : 3, 4
// reverse() : num.reverse()); // reverser the element in the source arr


console.log("Looping through arrays");

// 1. for each loop calls a function, once for each arra element.

num.forEach((value) => {
	console.log(value);
});


// 2. map() -> createa a new arr by perfoming some operation on each arr element.
num.map((value) => {
	console.log(value * value + 1)
})

// 3. filter() => filters an arr with values that passes a test creates a new arr

function greater(age) {
	return age > 3;
}

let res = num.filter(greater)

console.log(res)

// 4. reduce method : reduces an array to a single value.
let sum = num.reduce(add);

function add(total, number) {
	return total + number;
}

console.log(sum)

// 5. array from : used to create an array from any other object
hello = Array.from("harry")
console.log(hello);

// 6. for of : for of loop can be used to get values from an array

for (let c of hello){
	console.log(c)
}

// 7. for in : for in loop can be used to get the keys from an arr.

for (let n in num){
	console.log(n)
}

console.log("sort() : " + num.sort()); // sort() method is used to sort an array alphabetically.
console.log("toString() : " + num.toString());

console.log();

// bubble sort in js
for (let i = 0; i < of.length; i++){
	for (let j = i + 1; j < of.length; j++){
		if (of[i] > of[j]){
			let temp = of[i];
			of[i] = of[j];
			of[j] = temp;
		}
	}
}

let binarySearch = (arr, target) => {
	start = 0;
	end = arr.length - 1;
	while(start <= end){
		let mid = start + (end - start) / 2;
		if (target > arr[mid]){
			start = mid + 1;
		} else if (target < arr[mid]){
			end = mid - 1;
		} else {
			return parseInt(mid);
		}
	}
	return -1;
}

let linearSearch = (arr, target) => {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == target){
			return i;
		}
	}
	return -1;
}

let bsIndex = binarySearch(of, 100);
let lsIndex = linearSearch(of, 100);
console.log(of);
console.log("binary search index " + bsIndex);
console.log("linear search index " + lsIndex);
