console.log("js is working");

// object jo hota h 
// 1. property - variables
// 2. method - functions ()

// let pen = {
//     color: "blue",
//     type: "ballpoint",
//     price: 10,
//     write: function(){
//         console.log("writing with a blue ballpoint pen");
//     }
// }

// isse ke help se js html me jaan daal deta h 
// dom api - document object model naam h yeh
// dom api convert karta h html document ko ek object me jise hum manipulate kar sakte h js ke through
// document - object
// object ke andar properties and methods hote h
// document.getElementById() - method

// function sum(a , b){
//     let s = a + b;
//     console.log(s);
// }

// console.log(sum(3,2));

// my_script.js

// // Sample data for the chart
// const xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
// const yValues = [55, 49, 44, 24, 15];
// const barColors = ["red", "green", "blue", "orange", "brown"];

// // Get the canvas element
// const ctx = document.getElementById('myChart');

// // Create the chart instance
// new Chart(ctx, {
//     type: "bar", // Specify the chart type (e.g., 'bar', 'line', 'pie', 'scatter')
//     data: {
//         labels: xValues,
//         datasets: [{
//             backgroundColor: barColors,
//             data: yValues,
//             label: 'Wine Production (billions of liters)' // Label for the dataset
//         }]
//     },
//     options: {
//         // Customize chart options (e.g., title, scales, responsiveness)
//         plugins: {
//             title: {
//                 display: true,
//                 text: "World Wide Wine Production 2026"
//             }
//         },
//         scales: {
//             y: {
//                 beginAtZero: true // Ensure the Y-axis starts at zero
//             }
//         }
//     }
// });

// dom methods for selection
// 1. getElementById() - select element by id
// 2. getElementsByClassName() - select elements by class name
// 3. getElementsByTagName() - select elements by tag name
// 4. querySelector() - select the first element that matches a CSS selector
// 5. querySelectorAll() - select all elements that match a CSS selector

// const bebu = document.getElementById("bebuHeading");
// bebu.innerHTML = "Hello Puchi Rani Mwah Mwah";

// // caller
// function calculateEquation(f1){
//     let result = 2 * 8 * 9 / 19 / 15 + 12;

//     // callback 
//     let finalResult = f1(result);

//     return finalResult;

// }


// function sqrt(a){
//     return a*a;
// }

// calculateEquation(sqrt);

// // anonymous function or lambda function
// calculateEquation(function (a){
//     return "hello";
// })

const bebu = document.getElementById("bebuHeading");
    // bebu.onclick = function() {
//     alert("Hello Bebu");
    // }

// use kar rahe h ek function
bebu.addEventListener("click", function(){
    console.log("hello bebuuu mwah mwah");
} ); 


bebu.addEventListener("mouseover", function(){
    bebu.textContent = "I love you bebu 😘😘😘😘😘";
    bebu.style.color = "pink";
    bebu.style.fontSize = "50px";

    console.log("😘😘😘😘😘😘😘😘😘😘");
})

const neelaBox = document.getElementById("neela-box");


neelaBox.addEventListener("mouseenter", function(){
    neelaBox.style.backgroundColor = "blue"
});


neelaBox.addEventListener("", function(){
    neelaBox.style.backgroundColor = "pink"
});





