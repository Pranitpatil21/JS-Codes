/*
A for...of loop is used to iterate over values of any iterable object:

- Arrays
- Strings
- Maps
- Sets
- NodeLists
 
It gives you each element directly, not the index.
 */

const arr = [10,20,30,40,50];
for(const num of arr){
    // console.log(num);
}

const greeting = "Hello world";

for(const greet of greeting){
    // console.log(greet)
}

// maps in JavaScript are known for unique keys rather than unique values. Each key in a map must be unique, but the values associated with those keys can be same.
const  map = new Map();
map.set("IN","India")
map.set("US","United state of America")
map.set("Aus","Austrilia")
map.set("IN","India")

// console.log(map);

for(const [key,values] of map){
    console.log(key,"->",values);
}

const myObject = {
    game1 : 'Nfs',
    game2 : 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);  //error we can not iterate over object using ( for.. of ) loop
// }




/*
_____________________________________________________________________
| Loop                | Best for                    | Returns       |
|---------------------|-----------------------------|---------------|
|   for...in          | objects                     | keys          |
|   for...of          | arrays, strings, maps, sets | values        |
|   normal for loop   | indexed control             | index numbers |
|   forEach           | arrays                      | value + index |
---------------------------------------------------------------------
*/