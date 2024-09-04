var x = 15;
if (x > 10) {
  console.log("X is Greater");
} else {
  console.log("X is Smaller");
}

// example 01
var x = 100;
if (x == 100) {
  document.write("X is Same");
} else {
  document.write("X is not Same");
} // Answer X is Same because here run if condition

// example 02
var x = 100;
if (x == 99) {
  document.write("X is Same");
} else {
  document.write("\nX is not Same"); //\n is use for Space between them
} // Answer will be  X is not  Same because here run else condition

// // example 02
// var x = "100";     // Date type changed from string to Number
// if(x === 100){
//     document.write("X is Same")
// } else{
//     document.write("X is not Same")
// }

// Real Life example

var name = "Sohail Shoukat";
var gender = "Male";
if (gender == "Male") {
  alert("Hello Mr: " + name);
} else {
  alert("Hello Miss: " + name);
}
