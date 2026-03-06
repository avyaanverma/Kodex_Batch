function greet(){
    return 10;
}

console.log(greet); // pura function print hojayega
console.log(greet()); // function call hua h toh run hoga 
// function run hone ke baad console.log() 
// iss line ke execute hote 2 cheezein hongi 
// 1. functoin run hoga 
// 2. console.log print karega jo functoin return karega ya function dega
// without () brackets ke function run nahi hua tha
// so log ne function ko pura ka pura print kardiya
// ye waisa hi h jaise ki hum ko varaible daalte h 
// aur uski value print hojaeti h 


// abhi parr jab main call kiya toh woh apni functionaltiy ko chalaega
// aur phir kuch log function ko dega print karne ke liyeh via return 
// prr kuch return na hone parrr woh undefiend aata hain 



// FUNCTIONS ARE FIRST CLASS CITIZENS OF JS
// JavaScript mein functions ko variables ki tarah treat kar sakte ho.

const hello = function() {
    return "hello"
}

console.log(hello());

// Higher Order Function (HOF)
// Higher Order Function = function that takes another function as argument OR returns a function

// problem 1
function execute(callback){
    callback();
}

function giveLife(name){
    console.log(`Give life to ${name}`);
}

// execute(giveLife("Garud")); // yeh error dega as giveLife() yaha iss tareeke se pass karke ye call hojayega
execute(function(){
    giveLife("Harish")
}); // iske liye method 1 use a wrapper function


// problem 2 
const fn = function(){
    return function(){
        console.log("Inner");
    }
}

fn(); // mujhe ek function print hojayega , console.log nahi kiya na 
// fn()(); // andar wala function jo return hua h woh bhi chal jaayega IIF

console.log(fn());
console.log(fn()());

// problem 3 
function run(fn){
    fn();
}

function greet(){
    console.log("Hello");
}

run(greet);


// problem 4
// function run(fn){
//     fn();
// }

// function greet(){
//     console.log("Hello");
// }

// run(greet());　// type error aayega


function process(callback){
    console.log("Start");
}

process();


// prob 5 
function outer(fn){
    return fn;
}

function greet(){
    console.log("Hi");
}

outer(greet)();


function execute(callback){
    callback();
}

execute(function(){
    console.log("Running");
});


function execute(callback){
    callback();
}

// implemented map function 

const arr = [1,2,3,4,5,6]

arr.mapArr = function (callback){
    let newArr = []
    for(let i =0; i<this.length; i++){
        newArr[i] = callback(arr[i]);
    }

    return newArr;
}


let newArr = arr.mapArr(function(el){
    return el * el;
})

console.log(newArr);

// implementing filter function
Array.prototype.filterArr = function (callback){
    let newArr = [];
    for(let i =0; i<this.length; i++){
        if(callback(this[i])){
            newArr.push(this[i]);
        }
    }

    return newArr;
};


newArr = arr.filterArr(function(el){
    return el > 5;
})

console.log(newArr);


// implementing reduce function 
// Array.prototype.reduce = function (callback){
//     let acc += callback.a;
//     for(let i =0; i<this.length; i++){
//         acc = callback(acc,this[i]);
//     }

//     return acc;
// };
