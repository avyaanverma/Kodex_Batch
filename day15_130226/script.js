// 1. Regular Function inside Object
// A function has its own lexical environment 
// lexical environment is the local memory along with the reference to the outer environment
// regular function has its own this context 
// this ka use karke hum current object ko access kar sakte hain
// 2. Arrow Function inside Object
// Arrow function does not have its own lexical environment
// Arrow function takes this from the outer environment
var obj1 = {
    name: "Isha",
    age: 24,
    city: "Pune",
    // greet: function(){
    //     console.log(this);
        
    //     console.log("Hello from ", this.name);
    // },
    greet: ()=>{
        console.log(this);
        
        console.log("Hello from ", this.name);
    },
}


console.log(obj1.greet());
