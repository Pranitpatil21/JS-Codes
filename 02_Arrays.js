const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros);  //we want to merge array but it take whole array as object at  4 place
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);// how we can acces it


const all_heroes = marvel_heros.concat(dc_heros); //this is use to merge two or more arrays
console.log(all_heroes);

const all_new_heros = [...marvel_heros, ...dc_heros]; //spread operator syntax ->  ...
console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity) //this will sole innter means sub array and create it into one single array
console.log(real_another_array);


console.log(Array.isArray("Hitesh")) //it tells that it is array or not
console.log(Array.from("Hitesh")) //this convert the given string into array 
console.log(Array.from({name: "hitesh"})) // this will return empty array because we can do one thing we can convert keys or values one 


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));//returns new array from set of elements 



