// map returns data new array 
// map takes call back function as input
//purpose is to transform data
//return length is same as orignal array

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums =  myNumers.map( (num) => {
//    return num+10;
// })

// console.log(newNums);


//we can also do in this way
const newnums = myNumers.map((num) => {return num+20})     // 21,22,23,24....30
                        .map((num) => num*2)    // 42,44,46,48...60
                        .filter((num) => num>50) //52,54,56,58  
                                                //filter condition applied 

//here first map will do full calculation of add by 20 then that whole new array will pass to second map then it will multiply by 2 each element in array and return neww array then filter condition will aplied
              console.log(newnums);

              