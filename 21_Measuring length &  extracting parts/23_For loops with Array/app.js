// Array
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers);
for (var i = 0; i < 10; i++) {
  document.write(numbers[i] + "<br>");
}

var names = ["Sohail", "Wajid", "Tufail", "Sadaqat"];
for (var i = 0; i < 4; i++) {
  console.log(names[i] + "<br>");
}

// Use Length in Array

var mixArray = [1, 2, 3, 4, "Saad", 5, 6, 7, 8, 9, 10, "Sohail", true];
for (var i = 0; i < mixArray.length; i++) {
  console.log(mixArray[i] + "<br>");
}
