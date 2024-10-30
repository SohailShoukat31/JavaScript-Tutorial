console.log("Hello World 1");

// Increment Operator (++)

// The increment operator (++) is used to increase the value of a variable by 1. It can be used in two ways

var a = 5;
console.log(a++);
console.log(a);

var b = 5;
console.log(++b);
console.log(b);

// Decrement Operator (--)

var c = 5;
console.log(c--);
console.log(c);

var d = 6;
console.log(--d);

var counter = 0;
function increment() {
  counter++;
  // counter++;
  // counter++;
  console.log(`Counter after increment: ${counter}`);
}
increment();

var counter2 = 1;
function decrement() {
  counter2--;
  console.log(`Counter after decrement: ${counter2}`);
}
decrement();

var score = 0;
function addPoints() {
  score++;
  console.log(`Increment : ${score}`);
}
addPoints();

function removerPoints() {
  score--;
  console.log(`Decrement : ${score}`);
}
removerPoints();
