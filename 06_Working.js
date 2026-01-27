//Primitive data stores in stack
//non primitive data stores in heap 

//in primitive data there is seprate copie creates orignal value does not changes

let str1 = "hello its pranit here"
let str2 = str1

    console.log(str2)

    str2 = "heyy its monday"
   console.log(str2)
   console.log(str1)
//like whem we change str2 value str1 value does not changes



//this non primitive data here object refrence is given thats why when we changed value of obj2 value of obj1 also changes

let obj1 = {
    Name : "pranit",
    age : 22
}

let obj2 = obj1;

obj2.Name = "Sahil";
console.log(obj2.Name);
console.log(obj1.Name);
