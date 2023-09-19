const readline = require("readline");

// FUNCTION TO CHECK IF A SENTENCE CAN BE FORMED
function canFormSentence(characters, sentence) {
  const charArray = characters.split("");
  const sentenceArray = sentence.split("");

  for (const char of sentenceArray) {
    //   CHECK IF THE CHAR IS IN THE CHAR-LIST
    const index = charArray.indexOf(char);
    if (index === -1) {
      return "not possible";
    }

    // REMOVE THE USED CHARACTER FROM THE LIST
    charArray.splice(index, 1);
  }

  return "possible";
}

// INTERFACE FOR GET USER INPUT
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// GET USER INPUT AND APLY THYE BUSINESS LOGIC
rl.question("Enter the list of characters: ", (characters) => {
  rl.question("Enter the sentence: ", (sentence) => {
    const result = canFormSentence(characters, sentence);
    console.log(result);

    // CLOSE
    rl.close();
  });
});
