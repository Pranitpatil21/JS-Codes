let score = "33"

console.log(typeof score)
console.log(typeof(score))

//Coverting to number
let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

// "33" => 33
// "33abc" => NaN -> Not an Number
//  true => 1; false => 0


//Converting to boolean

let isLoggedIn = "hitesh"
let bolleanIsloggedIn = Boolean(isLoggedIn)
console.log(typeof bolleanIsloggedIn)
console.log(bolleanIsloggedIn)

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

//COnverting to String
let someNumber = 13213
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)


//--------------------------OPERATIONS--------------------------//


let value = 3
let negValue = -value
console.log(negValue)

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
console.log(2/3);
console.log(2%3);

let string1 = "Hello"
let string2 = " pranit"
console.log(string1 + string2);


console.log("1" + 2)
console.log( 1 + "2")
console.log( 1 + 2 + "2") // 1 + 2 + "2" --> 3 + "2" --> 32
console.log("1" + 2 + 2 )  // "1" + 2 + 2 --> "12" + 2 --> "122"
console.log("1"+ (2 + 2))   // "1" + (4) --> 14


//we can also assign this way but dont use try to keep it simple
let num1,num2,num3

num1 = num2 = num3 = 2+2
 

let gameCounter = 100
gameCounter++
console.log(gameCounter)

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

