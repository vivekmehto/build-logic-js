//Write a function which generates a secret code from a given string, by shifting characters of alphabet by N places

const encodeString = (str, code) => {
  let resStr = "";
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charAt(i).charCodeAt();
    charCode += code;
    resStr += String.fromCharCode(charCode);
  }
  return resStr;
};
console.log(encodeString("neogcamp", 2));
