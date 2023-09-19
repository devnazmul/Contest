const readline = require("readline");

// FUNCTION TO CALCULATE THE DIGITAL ROOT OF A NUMBER
function calculateDigitalRoot(number) {
  while (number >= 10) {
    let sum = 0;
    while (number > 0) {
      sum += number % 10;
      number = Math.floor(number / 10);
    }
    number = sum;
  }
  return number;
}

// INTERFACE FOR USER INPUT
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// GET INPUT AND CALCULATE THE RESULT
rl.question("Enter a non-negative integer number: ", (input) => {
  const number = parseInt(input, 10);

  if (isNaN(number) || number < 0) {
    console.log("Invalid input. Please enter a non-negative integer.");
  } else {
    const digitalRoot = calculateDigitalRoot(number);
    console.log(`The digital root of ${number} is ${digitalRoot}`);
  }

  // CLOASE
  rl.close();
});
