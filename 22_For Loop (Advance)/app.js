console.log("Hello");
//  There are Three Basic Loops
// For Loops
// While Loops
// Do While Loops

// if you want to read more in details so there a file is available in this documents you can read it.

// Initialization: Var cookie = 0:
// Condition: cookie <= 10
// Update : cookie++
for (var cookie = 0; cookie <= 10; cookie++) {
  document.write(`Baking cookie number ${cookie}  <br>`);
}

// eg

for (var i = 0; i <= 10; i++) {
  console.log(`${i} This runs from 0 to 10`);
}

// Just do Simple Task

for (var number = 1; number <= 10; number++) {
  if (number % 2 === 0) {
    console.log(`${number} is even`);
  } else {
    console.log(`${number} is odd`);
  }
}
// Now we learn reverse Loop

for (var j = 10; j >= 0; j--) {
  console.log(`${j} Reverse `);
}
