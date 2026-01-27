// array

const myArr = [0, 1, 2, 3, 4, 5];
const myHeors = ["shaktiman", "naagraj"];

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);


// const arr = [1,2,3,4,'hello'];

const arr = new Array(1,2,3,4,5);
const arr2 = arr;

// console.log(arr)
arr2[0] = 5;
console.log(arr2);
console.log(arr);

//Array methods

arr.push(15);
console.log(arr);
arr.pop();
console.log(arr);

arr.unshift(10); //add element at starting of array
console.log(arr);

arr.shift(); //remove first element from starting of array 
console.log(arr);

console.log(myArr.includes(9));//check that array have this element or not
console.log(myArr.indexOf(3));//return the index of given element if not present in array then it returns -1

const myarr = arr.join();//store array in string format
console.log(myarr);
console.log(arr);

const arr3 = [1,3,4,5,7,8];
console.log(arr3);


const arr311 = arr3.slice(1,3); //it does not affect orignal array keep it as it just give starting to a one number before the given end value
console.log(arr311);
console.log(arr3);

const arr422 = arr3.splice(1,3); //it affect orignal array delete element from orignal array 
console.log(arr422);
console.log(arr3);
/*

SUMMARRY:

1. Array is written in brackets [  ].
2.Array data type is an object.
3.Array can contain different data types . i.e string,number,boolean,array etc.
4. Array is zero based indexing. It starts with zero.
5. Once changed its original value will also change beacause it is non primitive (refrence) type.

ARRAY METHODs :

1.Push = adds value to last of an array.
2. Pop = removes last value of an array.
3. Unshift = adds value at first of an array.
4.Shift = removes first value of an array.
5. Includes = checks true or false.
6. IndexOf = checks the position of value in number form.
7.Join = converts to string.
8. Slice(value to remove from,value remove upto but don't include)= returns new array and original value remains unchanged. Use when you need to extract a portion of an array without modifying it.
9. Splice(value to delete from, number of value to delete) = returns new array with deleted one and original value changed.Use when you need to add, remove, or replace elements within an array.

*/