//Find number of constants and vowels in a string.

const numOfConsonantsAndVowel = (str) => {
  let vowels = ["a", "e", "i", "o", "u"];
  let countVowel = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (str[i].toLowerCase() === vowels[j]) {
        countVowel++;
      }
    }
  }
  let numOfLetter = 0;
  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    if ((code > 96 && code < 123) || (code > 65 && code < 91)) {
      numOfLetter++;
    }
  }

  return `Number of consonants are ${
    numOfLetter - countVowel
  } and Number of vowels are ${countVowel}`;
};

numOfConsonantsAndVowel("I am a neogrammer.");
