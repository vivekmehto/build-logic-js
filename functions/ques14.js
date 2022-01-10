//Given a sentence, return a sentence with first letter of all words as capital.

const toSentenceCase = (str) => {
  let givenStr = str.trim();
  let result = "";
  let isCaps = true;
  for (let i = 0; i < givenStr.length; i++) {
    if (isCaps) {
      result += givenStr[i].charAt(0).toUpperCase();
      isCaps = false;
    } else if (givenStr[i] === " ") {
      isCaps = true;
      result += " ";
    } else {
      result += givenStr[i];
    }
  }
  return result;
};

toSentenceCase("we are neoGrammers");
