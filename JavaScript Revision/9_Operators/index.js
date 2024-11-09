window.console.log("Hello World");

// Arithmetic Operators

// + (Addition)
// - (Subtraction)
// * (Multiplication)
// / (Division)
// % (Modulus – remainder of a division)
// ++ (Increment by 1)
// -- (Decrement by 1)

var applePrice = 200;
var orangePrice = 150;
var totalPrice = applePrice + orangePrice; // Addition
console.log(totalPrice);

var applePrice = 200;
var discount = 50;
var finalPrice = applePrice - discount; // Subtraction
console.log(finalPrice);

var applePrice = 200;
var quantity = 3;
var totalQuantity = applePrice * quantity; // Multiplication
console.log(totalQuantity);

var applePrice = 200;
var dividePrice = 4;
var totalDivide = applePrice / dividePrice; // Divide
console.log(totalDivide);

// % (Modulus – remainder of a division)
console.log(5 % 2);
console.log(-5 % 2);
console.log(5 % -2);
console.log(-5 % -2);

//  Assignment Operators

var appleBought = 5;
appleBought++; // Increment
console.log(appleBought);

var appleBought = 5;
--appleBought; // Decrement
console.log(appleBought);

// //   (Equality Operator) ==

console.log(5 == 5);
console.log(5 == "5");
console.log(true == 1);
console.log(false == 1);
console.log(0 == false);
// console.log(null = undefined);

var number1 = 10;
var number2 = 10;
console.log(number1 == number2);

var strNumber = "10";
var num = 10;
console.log(strNumber == num);

var booleanValueTrue = true;
var equalValueOne = 1;
console.log(booleanValueTrue == equalValueOne);

var booleanValueFalse = false;
var equalValueZero = 0;
console.log(booleanValueFalse == equalValueZero);

var undefinedValue = undefined;
var nullValue = null;
console.log(undefinedValue == null);

// // (Strict Equality)   ===

// // Note Also check Data Types;

console.log(5 === 5); // true: both are numbers and equal in value
console.log(5 === "5"); // false: different types (number vs string)
console.log(true === 1); // false: different types (boolean vs number)
console.log(0 === false); // false: different types (number vs boolean)
console.log(null === undefined); // false: different types (null vs undefined)

// = (Simple Assignment)
var x = 5;
console.log(x);

// += (Add and Assign)

var x = 5;
x += 3;
console.log(x);

// -= (Subtract and Assign)

var x = 5;
x -= 3;
console.log(x);

// *= (Multiply and Assign)

var x = 5;
x *= 3;
console.log(x);

// *= (Multiply and Assign)
var x = 5;
x /= 3;
console.log(x);

//  Comparison Operators

// == (Equal to)
// === (Strictly equal to – checks both value and type)
// != (Not equal to)
// !== (Strictly not equal to)
// > (Greater than)
// < (Less than)
// >= (Greater than or equal to)
// <= (Less than or equal to)

// == (Equal to)

var a = 5; // Number
var b = "5"; // String
console.log(a == b);

// Donot matter Data Type

// === (Strictly equal to)

var a = 5;
var b = "5";
console.log(a === b); //false

// != (Not equal to);

var a = 5;
var b = "5"; // False
console.log(a != b);
