/* 
 How forEach works :->>>
    - forEach() takes a callback function and automatically runs it for each element  in the array
    - it is higher-order loop
    */

 const coding = ["js", "ruby", "java", "python", "cpp"]


 //A minor update that :- A callback function can have named, anonymous or arrow function , it is not necessary for them to NOT have a name. However, anonymous or arrow functions are often used for simplicity , Situations where you don’t need reuse or  Inline logic etc. 

//we have to pass callback function here in for each loop
//coding array values such as js ,ruby are passed to function as values

// coding.forEach(  function (val){
//     console.log(val);
// }
// ) 

//  using arrow function 
// coding.forEach( (item) => {
//     console.log(item);
// } )




// function printMe(item){
//     console.log(item);
// }

 // Passing function as refrence
// coding.forEach(printMe)

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((item) => {
 console.log(item.languageName);
})