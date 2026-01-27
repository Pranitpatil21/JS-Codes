const name = 'Pranit'
const value = 70

console.log(name+value+"result")         //old style
console.log(`my name is ${name} and my weight is ${ value}`) //new type(reccomanded)

console.log(name[0]) 

const gamename = new String('Hitesh')
console.log(gamename[0])
console.log(gamename.__proto__);  //there are many methods inside curly braces check it onbrowser console by inside this const gamename = new String('Legendsleague') then check inside proto

console.log(gamename.length);
console.log(gamename.charAt(4));
console.log(gamename.toUpperCase())//not change orignal string

const newString =  gamename.substring(4);
console.log(newString)

const anotherString = gamename.slice(-8,4)   //in slice we can provide -ve values
console.log(anotherString);   

const newstingone = "   pranit  "
console.log(newstingone);
console.log(newstingone.trim())


const url = "www.pranitpatil21%20@gmail.com"
console.log(url.replace('%20','_'))
console.log(url.includes('pranit'))

const gamename3 = new String('pranit-heloa_aa-a')
console.log(gamename3.split('-'));

