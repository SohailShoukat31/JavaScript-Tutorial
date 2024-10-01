var cityTocheck = prompt("Enter your city");
cityTocheck = cityTocheck.toLowerCase();
var cleanesCities = ["karachi", "japan", "new delhi", "beijing"];
for (var i = 0; i <= 4; i++) {
  if (cityTocheck === cleanesCities[i]) {
    alert("It's one of the cleanest cities");
  }
}

// var myName = prompt("Enter your Name");
// myName = myName.toLowerCase();
// var  names = ["sohail" , "tufail" , "sadaqat" , "wajid"];
// for(var i =0; i < 5; i++){
//     if(myName === names[i]){
//         document.write(myName +" " +"is the one the clearst boy" )
//     }
// }

//  toUpperCase () ;  and  toLowerCase (); method
var smallLetter = "hello world";
document.write("Small Letters: " + smallLetter);
//  Now Just add .toUpperCase ()
document.write("<br>"); // Line break
document.write("Capital letters: " + smallLetter.toUpperCase());
document.write("<hr>");
var capLetter = "HELLO WORLD";
document.write("Capital Letters : " + capLetter);
document.write("<br>");
//  Now Just add .toLowerCase ()
document.write("Small Letter : " + capLetter.toLowerCase());
