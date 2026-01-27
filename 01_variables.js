const accountID = 14343
let accountemail = "pranit@gmail.com"
var accountpassword = "pranit@123"

//we can also declare this way but its BAD Way 
accountcity = "Pune"
//Semicolons are not necessary but its good to give 


// accountID = 2 //Not Allowed 

console.log(accountID);

accountemail = "pranit2121@yahoo.com";
accountpassword = 2121
accountcity = "Nashik"
console.log(accountcity);

//var is depricated not used now because of Scope issue at current time we use let and const

console.table([accountID,accountemail,accountpassword,accountcity])

//Error for const and let accesing before initilization
console.log(practice1);
const practice1 = 101

//no erro Undefined because Var has global Scope
console.log(practice2);
var practice2 = 101

//We can also only Decalre Variable 
let email;
console.log(email);

/* Prefer not to use var 
because of issue in block scope and functional Scope
 */