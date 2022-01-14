//A program that counts number of vowels and consonants in a String?

const countVowelsAndConsonants = (str) => {
  console.log(
    `Number of vowels : ${countVowel(str)} and Number of Consonants : ${
      countConsonants(str) - countVowel(str)
    }`
  );
};

const countVowel = (str) => {
  let givenStr = str.toLowerCase();
  let vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let i = 0; i < givenStr.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (givenStr[i] === vowels[j]) {
        count++;
      }
    }
  }
  return count;
};

const countConsonants = (str) => {
  let givenStr = str.toLowerCase();
  let count = 0;

  for (let i = 0; i < givenStr.length; i++) {
    if (givenStr.charCodeAt(i) > 96 && givenStr.charCodeAt(i) < 123) count++;
  }
  return count;
};

countVowelsAndConsonants("Hello NeoGrammer");
