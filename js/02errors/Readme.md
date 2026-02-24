JavaScript errors are problems that disrupt the normal execution of code. 

They can be broadly categorized into **syntax errors** (problems with the code structure) and **runtime errors** or exceptions (problems that occur during execution).

The standard built-in error types in JavaScript, all derived from the base `Error` object, include :

- **`SyntaxError`**: Occurs when the code does not conform to valid JavaScript syntax, such as a missing parenthesis, bracket, or an invalid token. These errors are detected during the parsing phase and cannot be caught by `try...catch` blocks within the same script.
- **`ReferenceError`**: Thrown when you try to access a variable or function that has not been declared or is outside the current scope. A common example is a typo in a variable name.
- **`TypeError`**: Occurs when a value is not of the expected type or an operation is invalid on that type. Examples include trying to call a method on `undefined` or a number (e.g., `1.toUpperCase()`).
- **`RangeError`**: Thrown when a numeric variable or parameter is outside of its valid range. Examples include passing an invalid number to `new Array()` or using too much recursion (which causes the call stack to exceed its critical size).
- **`URIError`**: Occurs when an invalid URI is passed to a global URI handling function like `encodeURI()` or `decodeURI()`.
- **`EvalError`**: Indicates an error regarding the global `eval()` function. Modern JavaScript engines and specifications generally do not throw this error; `SyntaxError` is often used instead for `eval()` related issues.
- **`InternalError`**: A non-standard, but well-supported error in some environments, that occurs when an internal error in the JavaScript engine is thrown, often due to an excessive amount of data or too much recursion. 

Error Handling
JavaScript provides mechanisms to handle runtime errors gracefully, preventing the entire script from crashing: 

- **`try...catch...finally` statements**:
    - The `try` block contains the code to be tested for errors.
    - If an error occurs, the execution stops and control flows to the `catch` block, which receives an error object with details.
    - The `finally` block executes unconditionally after `try` and `catch` (if present), useful for cleanup operations.
- **`throw` statement**: Used to generate custom errors or re-throw caught errors, allowing for more specific error messages and handling.
- **Global Error Handling**: In browsers, the `window.onerror` event handler can catch uncaught errors, which is useful for logging errors to a service for developers

