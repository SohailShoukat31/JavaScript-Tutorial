// Understanding if, if-else, and else Statements in JavaScript: Step-by-Step
// if Statement

// Real-life example:
// Imagine you are deciding whether or not to go outside based on the weather:

// Condition: "Is it raining?"
// Action: If yes, stay inside

var weather = "raining";

if (weather === "raining") {
  console.log("Stay Inside");
}

// Real-life example:
//  If it's not raining, you might decide to go outside.

// Condition: "Is it raining?"
// If yes: Stay inside.
// If no: Go outside

var weather = "raining";
if (weather === "raining") {
  // Condition is true
  console.log("Stay inside");
} else {
  console.log("Go Outside");
}

var temperature = 75;
if (temperature < 50) {
  console.log("Wear a Jacket");
} else if (temperature >= 50 && temperature <= 75) {
  console.log("Wear a sweater");
} else {
  console.log("Wear a t-shirt");
}

// Student score

var score = 100;
if (score >= 90) {
  console.log("Grade : A");
} else if (score >= 80) {
  console.log("Grade : B");
} else if (score >= 70) {
  console.log("Grade : C");
} else if (score >= 60) {
  console.log("Grade : C");
} else {
  console.log("Fail");
}
