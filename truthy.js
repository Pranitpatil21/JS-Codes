const userEmail = []  //truthy value

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}


// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN    //if string has nothing then it is false

//truthy values
// "0", 'false', " ", [], {}, function(){}     // anything inside string even space it is considerd as true 

// if (userEmail.length === 0) {       //if we want to check array is empty or not
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {   // if we want to check that object is empty or not
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

/*

      ??  <-- returns the first value that is NOT null or undefined.
         It ignores other falsy values like:
                   0  , "" ,   false             */
      
let val1;              
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

//it check first value is null or not if null then check second null or not if not then it will print that
console.log(val1);


// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")