// const instaUser = new Object();      //singleton object
const instaUser = {};       //non singleton object

instaUser.id = "121abc";
instaUser.name = "sammy"
instaUser.isLoggedIn = false;
// console.log(instaUser);

//we can create object inside object 
const regularuser = {
    id : 121,
    fullname : {
        userfullname : {
            firstname: "Pranit",
            lastname: "Patil"
        }
    }
}

// console.log(regularuser.fullname.userfullname.firstname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj4 = {5:"e",6:"f"}

// obj3 = {obj1,obj2,obj4} //same issue like array all object are stored at index not independent combined
// console.log(obj3)

// const obj3 = Object.assign({}, obj1, obj2, obj4) //this will cobine perfectly we use {} it is opptional but good to give its like we storing al the key values in sequence in this object
// console.log(obj3)

// const obj3 = {...obj1,...obj2,...obj4};// object spread way 
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "k@gmail.com"
    },
    {
        id: 1,
        email: "p@gmail.com"
    },
]

// console.log(users[1].email);

console.log(instaUser);
console.log(Object.keys(instaUser));   //will print all keys from instauser object
console.log(Object.values(instaUser));  //will print all Values from instauser object
console.log(Object.entries(instaUser));//at each index one key value pair will be there assigned


console.log(instaUser.hasOwnProperty("id"));//tell that object contains the given property or not

const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor:"Pranit"
}

// console.log(course.courseInstructor);


// this is use to destructure object because some we want to call any value multiple times and its name is to big then we destructure it which make easy to acces by giving short name
const {courseInstructor:instructor} = course
console.log(instructor);

 