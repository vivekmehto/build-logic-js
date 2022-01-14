//Write a program that takes two strings and copies smaller string into bigger string

const copyStr = (str1, str2) => {
  let tempStr = "";
  if (str1.length > str2.length) {
    tempStr = str1 + str2;
  } else {
    tempStr = str2 + str1;
  }
  return tempStr;
};
