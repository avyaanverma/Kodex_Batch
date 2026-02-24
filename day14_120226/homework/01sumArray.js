// 1. Write a function that uses `forEach()` to calculate the total sum of an array.

function calculateSum(arr){
    let sum = 0;
    arr.forEach((el)=>{
        sum += el;
    })
    return sum;
}

const arr = [14,21,25,125,3,6,77,3,112];

let sum = calculateSum(arr);

console.log(`The sum of array is ${sum}`);
