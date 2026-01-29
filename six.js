const coding = ["js", "ruby", "java", "python", "cpp"];

// any name for variable as argument we can pass to arrow function inside which will aim each item in array such we hve given forEach("items") also can given  any another name 
const values = coding.forEach((items) => {
    // console.log(items);
    return items;
})
             //return values are not stored 
        
// console.log(values);  


// it just a loop perform action forEach doesnt return any data  If you want to store returned values, we use map() 

const myNums = [1,2,3,4,5,6,7,8,9,10];

//filter also accept call backfunction as argument
// for eg we pass arrow function
// const newNum = myNums.filter((num) => num>4 )

//OR

const newNum = myNums.filter((num) =>{
      return num>4; 
} )

// console.log(newNum) 


//we know return values are not stored in forEach loop but if we want to store values using a forEach loop then by this we can 

const newNums = []

myNums.forEach( (num) => {
    if (num > 4) {
        newNums.push(num)
    }
} )

// console.log(newNums);



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// let userBook = books.filter((bk) => bk.genre)
// let userBook = books.filter((bk) => bk.genre === 'History');

let userBook = books.filter((bk) =>{
    return bk.publish >= 1995 && bk.genre === "History"
})



// console.log(userBook)


//filter is used for filter the data 
// filter expect any boolean contion such as true /false 
// in map data is changed return value is new transformed value
//in filter return value is boolean true/false 

