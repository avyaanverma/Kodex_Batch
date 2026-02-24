const arr = [10, 20, 30, 40, 50];
const avgNo = arr.reduce((a, sum) => a + sum, 0) / arr.length;

const greaterThanAvg = arr.filter((num) => num > avgNo);
console.log(greaterThanAvg);


const output = document.querySelector("#output");

output.textContent = `Output arr[10,20,30,40,50] no who are greater than avg is : ${greaterThanAvg}`
output.classList.add('output-code')