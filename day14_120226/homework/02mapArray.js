// 2. Write a function that uses `map()` to return a new array where each number is squared.

function squareArray(arr){
    let newArr = arr.map((el)=>{
        return el * el;
    });
    return newArr;
}

let arr = [1, 2, 3, 4, 5];

arr = squareArray(arr);

console.log(arr);