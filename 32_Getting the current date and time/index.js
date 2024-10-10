console.log("Hello Getting the current date and time");

// Your webpage includes a notice telling the user the current local date and time in his
// particular time zone. But what is the current date and time? Here's how JavaScript finds out.

var rightNow = new Date();
console.log(rightNow);

var rightNow = new Date();
var dateString = rightNow.toString();
console.log(rightNow);

var rightNow = new Date();
var theDay = rightNow.getDay();
console.log(theDay);

var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var now = new Date();
var theDay = now.getDay();
var nameOfToday = dayNames[theDay];
console.log(nameOfToday);

// More Examples

var currentDate = new Date();
console.log(currentDate); // Outputs the current date and time

var now = new Date();
var year = now.getFullYear();
console.log(year); // Get the current year (e.g., 2024)

var month = now.getMonth() + 1;
console.log(month); // Get the current month (0-11, so add 1)

var theDay = now.getDay();
console.log(theDay); // Get the current Day

var hours = now.getHours();
console.log(hours); // Get the current hour (0-23)

var minutes = now.getMinutes();
console.log(minutes); // Get the current minute (0-59)

var seconds = now.getSeconds();
console.log(seconds); // Get the current second (0-59)
