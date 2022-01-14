//Given a string, determine if it is a palindrome, considering only alphanumeric characters

const reverseStr = (str) => {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
};

const checkPalindrome = (str) => {
  let reverse = reverseStr(str);
  for (let i = 0; i < str.length; i++) {
    if (reverse[i] !== str[i]) {
      return false;
    }
  }
  return true;
};

console.log(checkPalindrome("HELLEH"));
