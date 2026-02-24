![[Pasted image 20260216182339.png]]

In JavaScript, *var* is **function-scoped** with hoisting (initialized as undefined), while *let* and *const* are **block-scoped** with no default initialization. var and let  allow reassignment, but const prohibits it after initialization. 
Modern JS prefers const for immutability and let for reassignable, block-scoped variables. [[1]]

  
Line-by-Line Comparison
![[Pasted image 20260216182617.png]]



Detailed Notes

  
1. (Legacy/Function Scope)

- Scope: Function-scoped. If declared outside a function, it becomes global.
- Hoisting: Hoisted to the top and initialized with undefined . You can access it before declaration.
- Redeclaration: Allowed within the same scope.
```js
var x = 10;
var x = 20; // No error
```

1. (Modern/Block Scope)

- Scope: Block-scoped. Only exists within the it was defined in.
- Hoisting: Hoisted but not initialized. Accessing before declaration throws a .
- Redeclaration: Not allowed within the same block.
```js
if (true) {
    let y = 10;
}
// console.log(y); // ReferenceError: y is not defined
```

3. (Constant/Block Scope)

- Scope: Block-scoped.
- Hoisting: Hoisted but not initialized.
- Reassignment: Cannot be reassigned. Note: If it's an object or array, its _contents_ can still change.
- Initialization: Must be initialized at declaration.
```js
const z = 30;
// z = 40; // TypeError: Assignment to constant variable
```

Best Practices

- Use by default for variables that won't change.
- Use if you need to reassign a variable (e.g., loops).