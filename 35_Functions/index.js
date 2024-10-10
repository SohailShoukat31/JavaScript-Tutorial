// console.log("Hello Functions");
var now = new Date();
var theHr = now.getHours();
var theMin = now.getMinutes();
var theSec = now.getSeconds();
alert("Time :" + theHr + ":" + theMin + ":" + theSec);

function tellTime() {
  var now = new Date();
  var theHr = now.getHours();
  var theMin = now.getMinutes();
  var theSec = now.getSeconds();
  alert("Current Time :" + theHr + ":" + theMin + ":" + theSec);
}
tellTime();
//Just call the function

// Basic example for practice
function sayHello() {
  console.log("Hello Function !");
}
// To execute the code inside a function, you "call" it by using its name followed by parentheses:
sayHello();
// Example
function greet(name) {
  console.log("Hello, " + name + "!");
}
greet("Sohail"); // Output will be Hello Sohail!

// Example
function myName(name) {
  console.log("Hello My name is " + name);
}
myName("Sohail");

// Returning Values

function add(a, b) {
  return a + b;
}
var sum = add(5, 5);
console.log(sum);

function minus(a, b) {
  return a - b;
}
var substraction = minus(5, 5);
console.log(substraction);

// Type of Function: You can check if a variable is a function using typeof:
console.log(typeof sayHello);

// Function Length: You can check the number of parameters a function takes:
function LengthFunc(a, b, c) {
  console.log(LengthFunc.length);
}
LengthFunc();
// Example
function test() {
  return 5;
}
console.log(test());
/// Example
function greet(name = "Guest") {
  return "Hello, " + name + "!";
}
console.log(greet());
