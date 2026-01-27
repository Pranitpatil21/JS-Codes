const score = 400           //primitive number // JS auto detects it as a number
console.log(score)              

const balance = new Number(100)      //non-primitive number object // Using Number Function to explicitly define number in JS
console.log(balance)     

// Note: Number has comparatively less prototype properties (methods) than String



console.log(balance.toString().length)//after converting to string we can use string properties also
console.log(balance.toFixed(2))  // use to add decimal point  //100.00


const othernumber = 123.8966

console.log(othernumber.toPrecision(3)) //as we give value in it will do roundoff nearest number

const hundred = 1000000
console.log(hundred.toLocaleString('en-IN'));

//      Other methods
//     .MAX_VALUE
//     .MIN_VALUE
//     .MAX_SAFE_INTEGER
//     .MIN_SAFE_INTEGER

// --------------math------------------

// ----- Maths in JS ----
// Maths library comes along with JS

console.log(Math)
console.log(Math.abs(-4)) //will make -ve values to +ve
console.log(Math.round(4.6)); //roundoff value 
console.log(Math.floor(4.9))//  value will be 4.2 or 4.9 anything will become to number 4
console.log(Math.ceil(4.2));// if value is slightly greater than 4 then it will consider as 5

console.log(Math.random())//this will genrate any vaue between 0 and 1

//---- Trick to randomize value between range ----

console.log(Math.random()*10 + 1) // This assures that values are atleast 1 & more than 1
console.log((Math.random()*10) + 1) // To avoid any BODMAS rule miscalculation
console.log(Math.floor(Math.random()*10)+1);

const min = 10
const max = 20
  
console.log(Math.floor(Math.random()*(max - min + 1)) + min)