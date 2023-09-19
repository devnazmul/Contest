const readline = require("readline");

// FUNCTON TO ADD A BINARY NUMBER AND A DECIMAL NUMBER AND RETURN THE RESULT AS BINARY
function addBinaryAndDecimal(binary, decimal) {
  const binaryInt = parseInt(binary, 2);
  const sum = binaryInt + decimal;
  return sum.toString(2);
}

// INTERFACE TO GET UER INPUT
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// GET BNARY AND DECIMAL AND ADD THEM
rl.question("Enter a binary number: ", (binaryInput) => {
  rl.question("Enter a decimal number: ", (decimalInput) => {
    // CALCULATION
    const result = addBinaryAndDecimal(binaryInput, parseInt(decimalInput, 10));

    // OUTPUT
    console.log("Sum as Binary:", result);

    // CLOSE
    rl.close();
  });
});
