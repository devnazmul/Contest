const readline = require("readline");

// INTERFACE FOR GET USER INPUT
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// FUNCTIONTO CALCULATE THE MINIMUM AMOUNT THAT MUST BE HANDS
function calculateMinimumExchange(numTravelers, amountsPaid) {
  const totalAmount = amountsPaid.reduce((acc, amount) => acc + amount, 0);
  const averageAmount = totalAmount / numTravelers;
  let totalChange = 0;

  for (let i = 0; i < numTravelers; i++) {
    if (amountsPaid[i] < averageAmount) {
      totalChange += averageAmount - amountsPaid[i];
    }
  }

  return totalChange.toFixed(2);
}

// READ THE NUMBER OF TRAVELERS FROM USER
rl.question("Enter the number of travelers: ", (numTravelers) => {
  numTravelers = parseInt(numTravelers, 10);

  // READ THE PAID AMOUNT OF EACH TRAVELER PAID FOR FOOD
  rl.question(
    "Enter the amounts paid by each traveler (separated by spaces): ",
    (input) => {
      const amountsPaid = input.split(" ").map(parseFloat);

      // CALCULATE THE MINIMUM AMOUNT THAT MUST BE CHANGE HANDS
      const minimumExchange = calculateMinimumExchange(
        numTravelers,
        amountsPaid
      );

      // OUTPUT
      console.log("Minimum amount to be exchanged:", minimumExchange);

      // Close
      rl.close();
    }
  );
});
