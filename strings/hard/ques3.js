//Reverse the given string word wise. That is, the last word in given string should come at 1st place,
//last second word at 2nd place and so on. Individual words should remain as it is.
//example: Input : Welcome to NeoG Camp → Camp NeoG to Welcome

const reverse = (str) => {
  let reverse = "";
  let len = str.length - 1;
  while (len >= 0) {
    reverse += str[len];
    len--;
  }
  return reverse;
};

const reverseString = (str) => {
  let result = "";
  let word = "";
  let sentence = reverse(str);
  for (let i = 0; i <= sentence.length; i++) {
    if (sentence[i] === " ") {
      result += reverse(word);
      result += " ";
      word = "";
    } else if (i === sentence.length) {
      result += reverse(word);
    } else {
      word += sentence[i];
    }
  }
  return result;
};

reverseString("Welcome to NeoG Camp");
