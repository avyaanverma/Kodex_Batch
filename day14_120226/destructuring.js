// Destructuring is a JavaScript expression introduced in ES6 that makes it possible to unpack values from arrays or properties from objects into distinct, local variables. It provides a more concise and readable way to extract data than traditional methods, without modifying the original array or object. 


// Array destructuring allows you to extract elements from an array based on their position. The syntax uses square brackets [] on the left-hand side of the assignment. 


// Basic Assignment: Values are assigned to variables in the order they appear in the array.
const colors = ['red', 'yellow', 'green'];
const [firstColor, secondColor, thirdColor] = colors;
console.log(firstColor); // Output: 'red'

// Skipping Values: You can ignore elements by using extra commas.
const [first, , third] = colors;
console.log(first); // Output: 'red'
console.log(third); // Output: 'green'


// Swapping Variables: Destructuring is a clean way to swap the values of two variables without a temporary variable.
// let a = 1;
// let b = 3;
// [a, b] = [b, a];
// console.log(a); // Output: 3
// console.log(b); // Output: 1

// Rest Syntax: The rest syntax (...) can collect the remaining elements into a new array. It must be the last element in the destructuring pattern.
const numbers = [10, 20, 30, 40, 50];
const [a, b, ...rest] = numbers;
console.log(a); // Output: 10
console.log(rest); // Output: [30, 40, 50]
