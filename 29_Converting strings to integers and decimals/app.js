console.log("Hello The World of programming!");

// In JavaScript, converting strings to integers and decimals (floats) can be done using parseInt() and parseFloat().
//  Here’s a detailed explanation of each method:

// Converting Strings to Integers

var str = "123";
var intValue = parseInt(str); // Converts the string "123" to the integer 123
console.log(intValue); // Output: 123

var binaryString = "1010";
var decimalValue = parseInt(binaryString, 2);
console.log(decimalValue); // Output: 10

// Converting Strings to Decimals (Floats)

var floatString = "123.45";
var floatValue = parseFloat(floatString);
console.log(floatValue);

// Note Both parseInt() and parseFloat() will stop parsing when they reach a character that is not part of the number.

var mixString = "123abc";
var numberValue = parseInt(mixString);
console.log(numberValue);

var invalidString = "abc";
var result = parseInt(invalidString);
console.log(isNaN(result)); // Output: true

var whitespaceString = "   42   ";
var result2 = parseInt(whitespaceString); // Converts to 42
console.log(result2); // Output: 42

console.log(0.1 + 0.2);

// var currentAge = +prompt("Enter Your Age");
// console.log(currentAge);

var plus = "20" - "15";
console.log(plus);
//output will be 5

var minus = "20" + "15";
console.log(minus);
// // output will be  concatenates

var multiply = "20" * "5";
console.log(multiply);
//Output will be 100

var divide = "20" / "5";
console.log(divide);
// // Output will be 4

var strNum1 = "20" - 10;
console.log(strNum1);
// // 20 is string but 10 is number output will be minus;

var strNum2 = "20" + 10;
console.log(strNum2);
// // Output will be 2010

var strNum3 = "20" * 10;
console.log(strNum3);
// // output will be 200

var strNum4 = "20" / 10;
console.log(strNum4);
// // output will be  2 ;

var number = "20" + "abc";
console.log(number);

var number2 = "20" - "abc";
console.log(number2); // // Answer will be NaN means Not a number

// // If you want to do addition, you must convert any strings to numbers

var currentAge = prompt("Enter your age.");
var qualifyingAge = parseInt(currentAge);
console.log(qualifyingAge);

var myAge = 19;
var newAge = parseInt(myAge);
console.log(newAge);
