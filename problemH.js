// INTERFACE FOR USER INPUT
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// GET USER INPUT AND APPLY THE BUSINESS LOGIC
rl.question("Enter count of words: ", (numWords) => {
  numWords = parseInt(numWords);

  if (isNaN(numWords) || numWords <= 0) {
    console.log("Invalid input. Please enter a positive number of words.");
    rl.close();
    return;
  }

  const words = [];

  // GET USER INPUT AND APPLY BUSINESS LOGIC
  const enterWord = (wordIndex) => {
    if (wordIndex === numWords) {
      words.sort((a, b) => a.length - b.length);
      console.log("Output:");
      console.log(words.join(" "));
      rl.close();
      return;
    }

    rl.question(`Enter next word: `, (word) => {
      words.push(word);
      enterWord(wordIndex + 1);
    });
  };

  enterWord(0);
});
