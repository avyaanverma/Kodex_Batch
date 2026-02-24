// 3. Write a function that uses `filter()` to return only numbers greater than 50.

function noGreaterThan50(arr){
    let newArr = arr.filter((el)=>{
        return el > 50;
    });
    return newArr;
}

let arr = [14,21,25,125,3,6,77,3,112];

let filteredArr = noGreaterThan50(arr); 

console.log(noGreaterThan50);
