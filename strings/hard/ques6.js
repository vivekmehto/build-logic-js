//Given a string "how was your day?" and a word "how", write a program that removes the occurrence of the specified word from given sentence.
// ( input: string⇒"programming camp are amazing",word⇒ "programming"; output:" camp are amazing")

const strToArr = (str) => {
  let arr = [];
  let word = "";
  for (let i = 0; i <= str.length; i++) {
    if (str[i] === " ") {
      arr.push(word);
      word = "";
    } else if (i === str.length) {
      arr.push(word);
      word = "";
    } else {
      word += str[i];
    }
  }
  return arr;
};

const checkEqual = (word, givenWord) => {
  let count = 0;
  for (let i = 0; i < givenWord.length; i++) {
    if (word[i] === givenWord[i]) {
      count++;
    }
  }

  return count === givenWord.length;
};

const removeWord = (str, word) => {
  let arrayOfString = strToArr(str);
  let resultStr = "";
  for (let arrayWord of arrayOfString) {
    if (!checkEqual(arrayWord, word)) {
      resultStr += arrayWord + " ";
    }
  }
  return resultStr;
};

removeWord("Hello I am Full stack developer", "Hello");
