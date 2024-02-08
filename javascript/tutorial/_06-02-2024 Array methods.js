// reduceRight() : 

let numbers = new Array(10, 20, 30);
console.log(numbers);

numbers = Array.of(40, 50, 60, 70, 80, 90);
let result = numbers.reduceRight((accumlator, currentValue) => {
	return accumlator + currentValue;
}, 10);
console.log(result);

console.log();

// some() : return true if any one condition is true or return false
numbers.some((value) => {
	console.log(value);
}); 

console.log();

let booleanValue = numbers.some((value, index, ogArr) => {
	return value > 80;
});

console.log("somee() : " + booleanValue);

console.log();

// every() : return true if all the element is satisfied with condition it return true. or return false
booleanValue = numbers.every((value, index, ogArr) => {
	return value < 100;
});

console.log("every() : " + booleanValue);

console.log();

// forEach() vs map()
// forEach() method return type is void
// map() method returntype is new Array

// forEach() : 
numbers.forEach((value, index, ogArr) => {
	console.log(value, index, ogArr);
});

console.log();
var res = numbers.forEach((value, index, ogArrb) => {
	return value + 5;
});

console.log(res);

console.log();

// map() : 
numbers.map((value, index, ogArr) =>{
	console.log(value, index, ogArr);
})

console.log();

res = numbers.map((value) => {
	return value + 5;
});

console.log(res);

console.log();

// indexOf() takes two argument first is element and second is index to start searching from position.
console.log(numbers.indexOf(50))

console.log();

// lastIndexOf()
console.log(numbers.lastIndexOf(80));

let bubbleSort = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] > arr[j]) {
				let temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
	}
	return arr;
}



let binarySearch = (arr, target) => {
	let start = 0;
	let end = arr.length - 1;
	while(start <= end) {
		let mid = start + Math.floor((end - start) / 2);
		if (target > arr[mid]) {
			start = mid + 1;
		} else if (target < arr[mid]) {
			end = mid - 1;
		} else {
			return parseInt(mid);
		}
	}

	return -1;
}

let nums = [9,7, 6, 5, 1, 2, 3, 4];

let arr = bubbleSort(nums);

console.log(arr)
let target = 6;
res = binarySearch(arr, target);

console.log("index position : " + res);