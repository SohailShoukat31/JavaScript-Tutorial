console.log("Hello");

function greet() {
  alert("Hello i Love my Js");
}
// Callling the Function
greet();

// Example
function greet() {
  return "I Love JavaScript";
}
var result = greet();
console.log(result);

// Passing Data to Functions
// // Functions can accept parameters, which allow you to pass data into them.

function add(a, b) {
  return a + b;
}
var result = add(5, 5);
console.log(result);

// Returning Data from Functions
// You can use the return statement to send a value back from a function.

function square(number) {
  return number * number;
}
var total = square(4);
console.log(total);

// //  Multiple Return Values
// // JavaScript does not support multiple return values directly, but you can return an object or an array.

function arithemeticOperators(a, b) {
  return {
    sum: a + b,
    difference: a - b,
    product: a * b,
    quotient: a / b,
  };
}
var { sum, difference, product, quotient } = arithemeticOperators(10, 2);
console.log(sum, difference, product, quotient);
// Output 12, 8 , 20 , 5

// Default Parameters

function greet(name = "Guest") {
  return `Hello ${name}`;
}
console.log(greet()); // Output Hello Guest
console.log(greet("Sohail")); // Output Hello Sohail

const greet1 = function () {
  return "Hello, World!";
};

console.log(greet1()); // Output: Hello, World!
