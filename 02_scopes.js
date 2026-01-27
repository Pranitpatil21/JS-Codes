var c = 300; //var have global scope
let a = 300  //block or local level scope   -> let,const
let d = 300

if(true){
    let a = 10;
    const b = 20;
     d = 24; // if we use let d = 24 will be different and we directly use d = 24 then it will take previous d refrence
    // console.log("INNER: ",a);
}

console.log(a);
// console.log(b); //cannot accesed outside block
console.log(c);
console.log(d);


console.log(p);//undefined because declare after print
var p = 10;
console.log(p);


function one(){
    username = "Pranit"
    function two(){
        const website = "Youtube"
        console.log(username);
    }
   // console.log(website);
    two()
}

one()


if(true){
    const username = "pranit"
    if(username === "pranit"){
        const website = "youtube"
        console.log(username+website);
    }
    // console.log(website);    
}

// console.log(username);



// ++++++++++++++++++ interesting ++++++++++++++++++



console.log(addone(5))        //working this way

function addone(num){
    return num + 1
}



console.log(addTwo(5));         //error 

const addTwo = function(num){
    return num + 2
}