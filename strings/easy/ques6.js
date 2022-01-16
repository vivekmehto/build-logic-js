//Write a program to check whether the string is alphanumeric or not , eg:batman@45 contains digit 45

const checkAlphaNumeric = (str) => {
  return !checkSpace(str) && checkAlpha(str) && checkNum(str);
};

const checkSpace = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) === 32) return true;
  }
  return false;
};

const checkAlpha = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) > 96 && str.charCodeAt(i) < 123) {
      return true;
    }
  }
  return false;
};

const checkNum = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) > 47 && str.charCodeAt(i) < 58) {
      return true;
    }
  }
  return false;
};

checkAlphaNumeric("batman@45");
