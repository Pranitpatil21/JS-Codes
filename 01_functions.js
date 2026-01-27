function sayMyName(){
    console.log("P")
    console.log("R")
    console.log("A")
    console.log("N")
    console.log("I")
    console.log("T")
}

// sayMyName  //refreance
// sayMyName()   //execution

//creating function function_Name(){ ... }

function addTwoNumber(a,b){ //parameters
    return a+b;
}

         //passing arguments
let x = addTwoNumber(2,3) //need to store value returning from function
console.log(x);  

console.log(addTwoNumber(4,5));//also this we can do direct run withouth storing

const result = addTwoNumber(6,7);
console.log("result : ",result);

// function logInUserMessage(userName){
//     console.log(`${userName} Just Logged In`);
// }

// logInUserMessage() // if we dont pass value then it will print undefined



function logInUserMessage(userName = "sahil"){  //if we dont pass any userName then by defaul user name will be sahil if we pass any data then user name will be overload
    if(!userName){   // OR  userName === undefined    
        console.log("Please enter a userName");
        return;
    }
    return (`${userName} Just Logged In`);
}

console.log(logInUserMessage())

   
    //rest operator or spread operator is same just depend on work or usage where we are using it
function calculateCartPrice(...num1){ //using rest or spread operator num1 can recived all the values other wise it will print only 100
    return num1;
}

console.log(calculateCartPrice(100,200,300));

function calculateCartPrice2(a,b,...num2){ //using rest or spread operator num1 can recived all the values other wise it will print only 100
    return num2;
}

console.log(calculateCartPrice2(100,200,300,400));  //a=100,b=200,c = remaning 

//object
const user = {
    username:"Pranit",
    prices:200
}


function handleobject(object){
    console.log(`Username is ${object.username} and price is ${object.prices}`);
}

handleobject(user) //passing object to function
handleobject({username:"sahil",prices:1000}) //in this way also we can pass value


const newArray = [200,400,100,600]

function returnSecondValue(getArray){
            return getArray[1];
}

console.log(returnSecondValue(newArray));
console.log(returnSecondValue([10,20,30,40]));







