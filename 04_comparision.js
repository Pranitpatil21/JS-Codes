console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);


//it will convert string to a number [ > , < ,  >=  , <=  ], this operators works differently
console.log("2" > 1);
console.log("02" > 1);


console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

//  1.console.log(null > 0); // false
// Comparison (>) converts null to a number before comparing.
// null is converted to 0.

// 0 > 0 is false.

// 2. console.log(null == 0); // false
// The equality check (==) does not convert null to a number.

// null is only equal to undefined in loose equality (==), not to numbers.

// So, null == 0 is false.

// 3. console.log(null >= 0); // true
// The >= comparison also converts null to a number (0).

// It becomes 0 >= 0, which is true.

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);


// ===  this is strictly comaprision checks the data type also
console.log("2" === 2);       //false

// ==  this covert string to int 
console.log("2" == 2);       //true
