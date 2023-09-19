const readline = require("readline");

// FUNCTION TO CHECK FOR CONSECUTIVE NUMBERS
function checkConsecutiveNumbers(numbers) {
  for (let i = 2; i < numbers.length; i++) {
    if (numbers[i] === numbers[i - 1] && numbers[i] === numbers[i - 2]) {
      return numbers[i];
    }
  }
  return null;
}

// INTERFACE FOR USER INPUT
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// GET USER INPUT AND APPLY BUSINESS LOGIC
rl.question(
  "Enter your numbers separated by a space (end with 0): ",
  (input) => {
    const numbers = input.split(" ").map(Number);

    numbers.pop();

    const result = checkConsecutiveNumbers(numbers);

    if (result !== null) {
      console.log(`Consecutive values found for ${result}`);
    } else {
      console.log("Consecutive values not found");
    }

    // CLOSE
    rl.close();
  }
);
