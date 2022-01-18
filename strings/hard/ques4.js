//A program that counts the value of each character and prints the most repeated character?

const arr = [];

const countChar = (str, char) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (char === str[i]) {
      count++;
    }
  }

  arr.push({ char: char, count: count });
};

const maxChar = (str) => {
  for (let i = 0; i < str.length; i++) {
    countChar(str, str[i]);
  }
  let max = 0;
  let maxChar = "";
  for (let i = 0; i < arr.length; i++) {
    if (max <= arr[i].count) {
      max = arr[i].count;
      maxChar = arr[i].char;
    }
  }
  return `Most Repeated Character is ${maxChar} : ${max}`;
};

maxChar("Full Stack Developer");
