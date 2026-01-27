//Primitive

// 7 types : String , Number , Boolean , Null, undefined , Symbol , BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

//Symbol is a primitive data type introduced in ES6 (ECMAScript 2015). It’s used to create unique and immutable identifiers — often for object properties — that won’t accidentally collide with other property names.

const Id = Symbol("123")
const anotherId = Symbol("123")
console.log(Id == anotherId) 

// for big number for bigint we need to give n at last to identfi=y
const bigNumber = 34565435766543567454n
console.log(bigNumber)


// Reference (Non primitive)

// Array, Objects, Functions

//array
const arr = ["hey","hii","a"]
console.log(arr)

//object
let myobj = {
    Name:"Pranit",
    age:22,
}
console.log(myobj)
console.log(myobj.Name)

//funtction

const myFun = function(){
    console.log("Hello World")
}

function fun1(){
    console.log("2 hello world")
}

//function call
myFun()
fun1()

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3