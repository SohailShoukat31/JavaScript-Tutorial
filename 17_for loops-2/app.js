// Tables  Using loops

// Table of 2
for (var i = 1; i <= 10; i++) {
  console.log(2 + " * " + i + " = " + 2 * i);
}

// Table of 3
for (var i = 1; i <= 10; i++) {
  console.log(3 + " * " + i + " = " + 3 * i);
}
// Table of 4
for (var i = 0; i <= 10; i++) {
  console.log(4 + " * " + i + " = " + 4 * i);
}

// Your can print your Desire Tables
var userValue = prompt("Enter Only digit which you want to  print ");
for (var i = 1; i <= 10; i++) {
  console.log(userValue + "*" + i + "=" + userValue * i);
}
