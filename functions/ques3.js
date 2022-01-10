//Given a sentence, your functions should return the number of words in the sentence.

const numOfWords = (sentence) => {
  let sen = sentence.trim();
  let count = 1;
  for (let i = 0; i < sen.length; i++) {
    if (sen[i] === " ") {
      count++;
    }
  }
  return count;
};

numOfWords("We are NEOGRAMMERS");
