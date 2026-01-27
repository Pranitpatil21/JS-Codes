
let mydate = new Date();

console.log(mydate)

// We can use various methods to convert this date into more readable value.

console.log(mydate.toString())
console.log(mydate.toDateString())
console.log(mydate.toDateString())
console.log(typeof mydate)


// let  myCreateDate = new Date(2023,0,23);
// console.log(myCreateDate.toDateString())

let  myCreateDate = new Date(2023,0,23,5,3);
console.log(myCreateDate.toLocaleString());