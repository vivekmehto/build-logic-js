//Write a program to delete all vowels from a string. Assume string is not more than 80 characters long

const deleteVowel = (str) => {
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let finalStr = "";

  for (let i = 0; i < str.length; i++) {
    if (!includeChar(str[i], vowels)) {
      finalStr += str[i];
    }
  }

  return finalStr;
};

const includeChar = (char, arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === char) {
      return true;
    }
  }
  return false;
};

deleteVowel("Hello my name is VIVEK MEHTO and i am NEOGRAMMER");
