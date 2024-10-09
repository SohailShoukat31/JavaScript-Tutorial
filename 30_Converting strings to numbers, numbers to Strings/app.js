// Converting Strings to Numbers

var str = "49";
var num = Number(str);
console.log(num);

// parseInt() converts a string to an integer.

var stringValue = "123.45";
var numberValue = parseInt(stringValue);
console.log(numberValue);

var floatValue = "123.45";
var floatNumber = parseFloat(floatValue);
console.log(floatNumber);

// Converting Numbers to Strings

// Using String()

// The String() function can convert a number to a string.
var numberValue = 123;
var stringValue = String(numberValue);
console.log(stringValue);

// Using toString()

// The toString() method can be called on a number to convert it to a string.

var toString = 123;
var toNumber = toString.toString();
console.log(toNumber);

var integerString = "24";
var num = Number(integerString);
console.log(num);

var numberAsNumber = 1234;
var numberAsString = numberAsNumber.toString();
console.log(numberAsNumber);
