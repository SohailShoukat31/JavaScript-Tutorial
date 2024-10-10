console.log("Hello World!");

// var price = 9.95;
// var taxRate = 6.5;
// console.log(price*taxRate);

// Using toFixed()


// Example;
let value = 3.14159;
let formattedValue = value.toFixed(2);   // Format to 2 decimal places
console.log(formattedValue);  // Output: "3.14"



let value2 = 3.1;
let formatValue = value.toFixed(3); 
console.log(formatValue);  // Output: "3.1000"



let value3 = 3.14159;
let decimalPlaces = 2;
let factor = Math.pow(10, decimalPlaces); // 10^2 = 100
let roundedValue = Math.round(value * factor) / factor; // Round and then divide
console.log(roundedValue); // Output: 3.14




  