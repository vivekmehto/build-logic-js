//Write a program that converts the string into uppercase

const stringToUpperCase = (str) => {
  upperCaseStr = "";
  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    upperCaseStr += String.fromCharCode(
      code > 96 && code < 123 ? code - 32 : code
    );
  }
  return upperCaseStr;
};

stringToUpperCase("neogcamp");
