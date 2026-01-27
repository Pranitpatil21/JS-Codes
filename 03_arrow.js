const user = {
    username:"pranit",
    price: 999,
   
    welcomeMessage: function(){
       console.log(`${this.username} ,welcome to website`);
       console.log(this);//refer to the current object
    }
}

// user.welcomeMessage();
// user.username = "sahil";
// user.welcomeMessage();


console.log(this) //it will give {} according to node if we check this on browser console we will get other o/p such as window..


// function chai(){
//     let username = "hitesh"
//     console.log(this.username);//can not use   undefined
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);      //undefined can not use this here also
// }
// chai()

// const chai = () => {
//     let username = "hitesh"
//     console.log(this);
// }
// chai()


// const addTwo = (a,b) => {
//     return a+b;               
// }
// console.log(addTwo(1,2));


// const addTwo = (a,b) =>  a+b;   //we can directly return withouth using return keyword from arrow function if we use curly braces then we need to use return keyword
// console.log(addTwo(1,2));

// const addTwo = (num1, num2) => ( num1 + num2 )

// console.log(addTwo(19,20));


const addTwo = () => ({username: "hitesh"}) //if we are giveing object then we required to use these () inside it we give key value

console.log(addTwo())
