// Rounding numbers is the process of reducing the number of digits in a number
//  while keeping its value close to the original.
//   It's commonly used when you need to simplify numbers for easier interpretation, calculations, or display purposes.

// Example: 4.6 rounds to 5, and 4.4 rounds to 4.
console.log(Math.round(4.6)); // 5;
console.log(Math.round(4.4)); // 4;

// Example: 77.7 rounds to 78, and 12.345 rounds to 12.
var roundOf = 77.7;
console.log(Math.round(roundOf));
var itemPrice = 12.345;
console.log(Math.round(itemPrice));
var roundedPrice = Math.round(itemPrice);
console.log(roundedPrice);

// // // Example of Age through round number
var totalAge = 17.5;
var currentAge = Math.round(totalAge);
console.log(currentAge); // Output will be 18

// Round down (Math.floor()
// Always rounds the number down to the nearest integer.
// Example: 4.9 becomes 4, and -4.1 becomes -5.

console.log(Math.floor(4.7)); // 4
console.log(Math.floor(-4.1)); // 5

var discountedPrice = 19.99;
var floorPrice = Math.floor(discountedPrice);
console.log(floorPrice);
// // Example
var applicantAge = 29.8;
var flooredAge = Math.floor(applicantAge);
console.log(flooredAge);

// Round up (Math.ceil()
// Always rounds the number up to the nearest integer.
// Example: 4.1 becomes 5, and -4.9 becomes -4.
console.log(Math.ceil(4.1)); // 5
console.log(Math.ceil(-4.9)); // -5

// Quick Reference:
// round(): Rounds to the nearest integer.
// floor(): Always rounds down.
// ceil(): Always rounds up.
