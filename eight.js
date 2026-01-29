const myNums = [1,2,3];

//reduce function acceps callback function as argument
//basicly in this function accepts two arguments accumalator , current value
//accumulator is starting point we have to pass starting value for it by default zero aur we need to pass it at end of function 
//after that current value will target the current value of array
//then both addition will done and there sum will return to accumulator again
//then the next addition will wih accumulator previous calulated sum with second array values and thiss keep onforword repeating

// const myTotal = myNums.reduce(function (acc,currval){
//     console.log(`acc:  ${acc} and  currval: ${currval}`);
//     return acc+currval;
// },0)  //0  <-- passed to accumulator starting value

//acc + curr  <--result stored in acc for next calculation
// 0 + 1 => 1  <--- stored in acc
// 1+ 2 =>  3  <--- acc
//3 + 3 => 6    <--acc returned

// console.log(myTotal)

//by using arrow function
const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const pricetoPay = shoppingCart.reduce((acc,values) => {
    return acc+values.price},0)
console.log(pricetoPay)