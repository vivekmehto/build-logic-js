//Write a program that masks all but last four characters of the string "5565534276455423" to '#'

const maskStr = (str) => {
  let resultStr = "";
  for (let i = 0; i < str.length - 4; i++) {
    resultStr += str[i];
  }
  resultStr += "#";
  return resultStr;
};

maskStr("5565534276455423");
