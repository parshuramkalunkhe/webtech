// concat() : It will merge/concat one or more array 

const x = [10, 20];
const y = [30, 40];
const z = [50, 60];

let result = x.concat(y, z); 
console.log("x :", x);
console.log("y :", y);
console.log("z :", z);
console.log("MERGE :", result);

console.log();
// includes() : It will return true if element is present or false if element is not present.

let arr = [10n, 100, null, true, () => {return false;}, [10, 20], "str"];

console.log("str :", arr.includes("str")); 
console.log("() => {} :", arr.includes(() => {return false;}));

console.log();
// fill() : It used to replace the array element into the existing array
// fill(valueToReplace, startingIndex, endIndex); if we not passed endIndex it will replace all the element in array from startIndex.

arr.fill("sai", 1, 5);

console.log(arr);

console.log();
// flat() : It is used to convert the multidimension array into single dimension array.
// flat(depth); depth is a dimension, and dimension - 1 = result & the result should be passed to argument as depth.

arr = [10, 20, [30, 40, [50, 60], 70], 80, 90];

let _2d = arr.flat();
console.log("3D -> 2D :", _2d);
let _1d = _2d.flat();
console.log("2D -> 1D :", _1d);

console.log("3D -> 1D :", arr.flat(2));

console.log();
// sort() : It is used to sort array in asc or desc order. for string or number it will sort ascii value.
// sort() It take one function as argument that is compare() function. compare() will return a > b : +ve or a < b : -ve or a == b : 0
let names = ["ashwini", "surekha", "bhagyshree", "pushpa", "radhika", "archita", "ruchira", "zawla"];

names.sort();
console.log(names);

let nums = [9, 2, 1, 5, 4, 6, 8, 7, 3];

nums.sort(function (a, b) {
	return a - b;
});

console.log(nums);

nums.sort((a, b) => b - a);

console.log(nums);

let heteroGene = [10n, 100, "str", null, true, () => { return 100; }, false];
heteroGene.sort();
console.log(heteroGene);

heteroGene.reverse();

console.log(heteroGene);

