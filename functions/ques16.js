//Given a sentence, your function should reverse the order of characters in each word, keeping same sequence of words.

const reverseString = (str) => {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
};

const reverseCharactersOfWord = (str) => {};

reverseCharactersOfWord("we are neoGrammers");
