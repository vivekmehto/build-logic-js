//Given a string "tic tac toe is a fun game" convert the first 6 characters to capital case

const capitalCase = (char) => String.fromCharCode(char.charCodeAt(0) - 32);

const firstSixCapital = (str) => {
  let resultStr = "";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (count !== 6) {
      if (str[i] === " ") {
        resultStr += str[i];
      } else {
        let capitalChar = capitalCase(str[i]);
        resultStr += capitalChar;
        count++;
      }
    } else {
      resultStr += str[i];
    }
  }
  return resultStr;
};

firstSixCapital("tic tac toe is a fun game");
