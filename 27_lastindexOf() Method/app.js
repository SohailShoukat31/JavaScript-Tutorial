// The lastIndexOf() method
// in JavaScript is used to search for the last occurrence of a specified value
//  (string or character) within a string or array, and it returns the index of that occurrence.
//   If the value is not found, it returns -1.

// // Example
var str = "Hello World";
var index = str.lastIndexOf("o");
console.log(index); // output will be 7

var strr = "The World War II";
var position = strr.lastIndexOf("War");
console.log(position);

var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var number2 = number.lastIndexOf(10);
console.log(number2); // Output will be 9

var nbr = [1, 2, 3, 1, 2, 3];
var nbr2 = nbr.lastIndexOf(2);
console.log(nbr2);

// The main difference between indexOf() and lastIndexOf() in JavaScript is how they search for a value within a string or array:

// indexOf():
// Search Direction: Starts searching from the beginning of the string or array and returns the first occurrence of the specified value.
// Return Value: Returns the index of the first occurrence, or -1 if the value is not found.
// lastIndexOf():
// Search Direction: Starts searching from the end of the string or array and returns the last occurrence of the specified value.
// Return Value: Returns the index of the last occurrence, or -1 if the value is not found.

var testValue = "Hello World";
var checkValue = testValue.indexOf("o");
console.log(checkValue); // output will 4

var testValue2 = "Hello World";
var checkValue2 = testValue.lastIndexOf("o");
console.log(checkValue2); // output will 7 beacuse use lastindexOf is used;
