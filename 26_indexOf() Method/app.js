// The indexOf() method

//  in JavaScript is used to find the position (or index) of a specified value in a string or an array. It returns the index of the first occurrence of the value.
//  If the value isn't found, it returns -1.

// Example with Strings:

var str = "The World War II";
var position = str.indexOf("War");
console.log(position);

// // Example with Strings:
var str2 = "Hello, world!";
var position = str2.indexOf("world");
console.log(position); // Output will be 7

// // Example with Arrays:

var arr3 = ["10", "20", "30", "40", "50"];
var index = arr3.indexOf("50");
console.log(index); // Output will be 4 because The Position of 50 is at 4

// // Example with Arrays:

var fruits = ["Apple", "Banana", "Grapes", "PineApple"];
var index2 = fruits.indexOf("Grapes");
console.log(index2); // Output will be 2 because The Position of Grapes is at 2

// The includes() method in JavaScript is used to check whether a string or an array contains a specified value. It returns true if the value is found, and false if not.
// Example of true
var checkInput = ["10", "20", "30", "40", "50"];
var exists = checkInput.includes("40");
console.log(exists); // Output: true
// Example of False
var checkInput2 = ["10", "20", "30", "40", "50"];
var exists2 = checkInput2.includes(10);
console.log(exists2); // Output: False because Data Type is same

// General Example
var mixValue = [1, "sohail", true];
var findValue = mixValue.includes("sohail");
console.log(findValue);

// Common Bugs or Limitations with indexOf():

var count = [1, 2, 3];
console.log(count.indexOf("1")); // Output: -1 (because '1' is not strictly equal to 1)

// Case Sensitivity in Strings

let strr = "Hello World";
console.log(strr.indexOf("world")); // Output: -1 (because "world" is not the same as "World")

// let mixValues = [true, false, 1, '1', null];
// console.log(mixValues.indexOf());

var sampleData = ["10", "20", "30", "40"];
if (sampleData.indexOf("10") !== -1) {
  alert("Value found");
} else {
  alert("Value not found ");
}
