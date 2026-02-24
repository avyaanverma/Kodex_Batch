JavaScript has many well-known "quirks," which often stem from its ==loosely-typed, dynamic nature and backward compatibility with early design choices==. These behaviors can lead to unexpected results if not understood. 

Key types of JavaScript quirks include:

- **Type Coercion:** JavaScript automatically converts values from one type to another in certain contexts (like using the `+` or `==` operators), which can lead to surprising results.
    - `1 + '1'` results in `'11'` (string concatenation).
    - `[] + {}` results in `'[object Object]'`.
    - `0 == ''` evaluates to `true`.
- **Equality Comparisons:** The loose equality operator (`==`) performs type coercion, while the strict equality operator (`===`) does not.
    - `true == 1` is `true`, but `true === 1` is `false`.
    - `NaN === NaN` evaluates to `false` (NaN is not equal to anything, including itself; use `Number.isNaN()` to check for it).
- **The `typeof` operator:** This operator returns unexpected results for certain values.
    - `typeof null` returns `'object'`, which is a legacy bug in the language.
    - `typeof NaN` returns `'number'`.
    - `typeof []` returns `'object'`.
- **Hoisting:** Variable (declared with `var`) and function declarations are conceptually "lifted" to the top of their scope during compilation, which can cause confusion.
- **Scoping Issues (especially with `var` in loops):** Variables declared with `var` are function-scoped, not block-scoped, leading to issues where callbacks in a loop might all reference the same final value of the loop counter.
- **Array Behavior:**
    - Sorting an array with the default `sort()` method converts elements to strings and sorts them alphabetically (e.g., `[10, 2].sort()` results in `[10, 20]`, not `[2, 10]`, unless a custom comparison function is provided).
    - Changing the `length` property of an array directly can permanently delete elements.
- **Floating-Point Arithmetic:** JavaScript uses the IEEE 754 standard for floating-point numbers, which can lead to precision issues.
    - `0.1 + 0.2` does not strictly equal `0.3` (it's `0.30000000000000004`).
- **Date Objects:** Months in the `Date` object are zero-indexed (January is 0), while days of the month are one-indexed.
- **`for...in` loops:** These loops iterate over all enumerable properties, including those inherited from the prototype chain, which is often not the intended behavior for arrays or plain objects.


📦 What Are Data Types?
In JavaScript, every value has a type.
These types define what kind of data is being stored — a number, text, boolean, object, etc.
There are two categories:
Primitive types – stored directly.
Reference types – stored as memory references.

🔹 Primitive Data Types
. String → Text
"hello" , 'Sheryians'
. Number → Any numeric value
3 , -99 , 3.14
. Boolean → True or false
true , false
. Undefined → Variable declared but not assigned
let x; → x is undefined
. Null → Intentional empty value
let x = null;
. Symbol → Unique identifier (rarely used)
. BigInt → Very large integers
123456789012345678901234567890n

🔹 Reference Data Types
Object → { name: "Harsh", age: 26 }
28/06/2025, 15:10 Complete JS Course Syllabus

6/36

Array → [10, 20, 30]
Function → function greet() {}
These are not copied directly, but by reference.

🔍 typeof Operator
Used to check the data type of a value:

Note: typeof null === "object" is a bug, but has existed since the early days of JS.

🔁 Type Coercion (Auto-Conversion)
JavaScript auto-converts types in some operations:

🚨 Loose vs Strict Equality
js
typeof "Sheryians" // "string"
typeof 99 // "number"
typeof true // "boolean"
typeof undefined // "undefined"
typeof null // "object" ← known bug
typeof [] // "object"
typeof {} // "object"
typeof function(){} // "function"

js
"5" + 1 // "51" → number converted to string
"5" - 1 // 4 → string converted to number
true + 1 // 2
null + 1 // 1
undefined + 1 // NaN
28/06/2025, 15:10 Complete JS Course Syllabus

7/36
== compares value with type conversion
=== compares value + type (no conversion)

Always prefer === for accurate comparisons.

🧪 NaN – Not a Number

Even though it means “Not a Number”, NaN is actually of type number .
This is because operations like 0 / 0 or parseInt("abc") still produce a numeric result —
just an invalid one.

🔦 Truthy and Falsy Values
Falsy values:
false , 0 , "" , null , undefined , NaN
Everything else is truthy, including:
"0" , "false" , [] , {} , function(){}
Example:
js
5 == "5" // true
5 === "5" // false

js
typeof NaN // "number"

js
if ("0") {
console.log("Runs"); // "0" is a non-empty string = truthy
}
28/06/2025, 15:10 Complete JS Course Syllabus

8/36

🧠 Mindset
JavaScript will often auto-convert types behind the scenes.
Always stay aware of what data type you’re working with.

❓ Common Confusions
typeof null is "object" — this is a bug.
undefined means the variable was never assigned.
null means you intentionally set it to "nothing".
'5' + 1 is "51" but '5' - 1 is 4 .


