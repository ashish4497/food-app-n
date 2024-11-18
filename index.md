// 1 What is closures Explain with example ?
A closure occurs when a function is defined inside another function and gains access to the outer function's variables.
The inner function can still access the variables of the outer function, even after the outer function has finished executing.
function outerFunction() {
let outerVar = 'I am from the outer function!';

// This is the inner function (closure)
function innerFunction() {
console.log(outerVar); // Accesses outerVar from outerFunction
}

return innerFunction;
}

const myClosure = outerFunction();
myClosure(); // Output: 'I am from the outer function!'

// 2 What is CallBack Explain with example ?
// 3 What is Recursion Explain with example ?
// 4 What is Hoisting Explain with example ?
// 5 What is Debouncing Explain with example ?
// 6 What is dataTypes Explain with example ?
// 7 Different Types of Data types ?
// 8 Array methods any Five explain with example ?
// 9 String methods any Five explain with example ?
// 10 call(), apply(), and bind() methods Explain ?
