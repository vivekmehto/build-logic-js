//Given an input string S and two characters c1 and c2, you need to replace every occurrence of character c1 with character c2 in the given string

const replaceChar = (str, char1, char2) => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char1) {
      result += char2;
    } else {
      result += str[i];
    }
  }
  return result;
};

replaceChar("I am a neogrammer", "g", "G");
