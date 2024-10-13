// console.log("Hello Iam Sohail")
// Local Variables
//Definition: Local variables are declared within a function or a block and can only
// be accessed within that function or block.
// Example 1
// function exampleFunction() {
//     let localVar = "I am local!";
//     console.log(localVar); // This will work
// }

// exampleFunction();
// console.log(localVar); // This will cause an error: localVar is not defined

function exampleFunction() {
  var localVar = "I am Local !";
  console.log(localVar);
}
exampleFunction();
console.log(localVar);

// Example 2 ;

function fullName() {
  var myName = "Sohail Shoukat";
  console.log(myName);
}

fullName();
console.log(fullName);

// Global Variables
//Definition: Global variables are declared outside any function and can
//be accessed from any part of the code.

var globalVar = "I am global!";
function anotherFunction() {
  console.log(globalVar);
}

anotherFunction();
console.log(globalVar);
