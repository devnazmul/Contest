const readline = require("readline");
// FUNCTION TO CHECK IF ALL SPECIAL CHAR HAVE A MATCH
function checkSpecialCharacters(line) {
  const stack = [];
  const specialChars = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (const char of line) {
    if (char in specialChars) {
      stack.push(char);
    } else if (char === ")" || char === "]" || char === "}") {
      if (stack.length === 0 || specialChars[stack.pop()] !== char) {
        return "Not all special characters have a match";
      }
    }
  }

  return stack.length === 0
    ? "All special characters have a match"
    : "Not all special characters have a match";
}

// INTERFACE FOR USER INPUT
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// USER INPUT AND APPLY THE BUSINESS LOGIC
rl.question("Enter a line of characters: ", (input) => {
  const result = checkSpecialCharacters(input);
  console.log(result);

  // CLOSE
  rl.close();
});
