// singleton
// Object.create
//In Javascript,Objects created using the literal notation are singletons, but objects created using a function constructor are not.  //chatgpt this line for understanding




// object literals

const mySym = Symbol("Key1");

const JsUser = {
    name: "Pranit",         //by default name,age is string internally it is "name":"Hitesh"
    "full name": "Pranit Patil",
    [mySym]: "mykey1", //to acces symbol inside object we need to use bracket [mySym] if we not use then it will treated as string
    age: 22,
    location: "Maharashtra",
    email: "Sahil@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])//in this way we can also acces elements in object 
// console.log(JsUser."full name") //but if we declare it as string in object then we can not acces it in this way 
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);
console.log(JsUser);

JsUser.email = "pranitpatil21@gmail.com";
console.log(JsUser);

// Object.freeze(JsUser); //freeze  object no new changes will apply from onward we cannot change the value of  the any data inside object 

JsUser.email = "pranit%@.com"
console.log(JsUser); //email not changed after freezing object


JsUser.greeting = function(){              //means creating new key with value as function like inside Jsuser object it is like -> greeting: function() { ... } 
    console.log("Hello Js user");
}
JsUser.greeting = function(){
    console.log(`Hello Js User, ${this.name}`);
}

console.log(JsUser.greeting());//we getting one extra line undefined because of we not returning anything from function or we can try to call withouth  using console.log
console.log(JsUser)


/*SUMMARY :

Object name = {
keyname1: value,
keyname2: value
}

1. To declare object there is two method. Object literals and Object constructor(singleton).
2. To declare symbol in object use [ ] on keyname .
3.To freeze/lock an object = Object.freeze(object name).
4.To access object use objectname.keyname and it is called dot notation.
5. Use [key name] notation to access object key with special characters and it is called bracket notation. */