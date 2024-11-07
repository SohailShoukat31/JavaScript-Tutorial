// Syntax Prompt();

var userInput = prompt("Please enter your name ");
console.log(userInput);

var firstName = prompt("Enter your first name");
var lastName = prompt("Enter your last name");
document.write(firstName + " " + lastName);

var question = "Your species?";
var defaultAnswer = "human";
var spec = prompt(question, defaultAnswer);

var numberOfCats = prompt("How many cats you have ?");
var tooManyCats = numberOfCats + 1;
document.write(numberOfCats);

var englishMarks = +prompt("Enter your English Marks");
var sindhiMarks = +prompt("Enter your Sindhi Marks");
var computerSci = +prompt("Enter your Computer Marks");
var urduMarks = +prompt("Enter your Urdu Marks");
var totalMarks = englishMarks + sindhiMarks + computerSci + urduMarks;
document.write("You got  :" + totalMarks);

// document.write( "Total Marks :" , englishMarks + sindhiMarks + computerSci + urduMarks);

var userName = prompt("What is your name ?");
if (userName !== null) {
  alert("Hello" + userName + "!");
} else {
  alert("You didn`t enter a name");
}
