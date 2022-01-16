//Write a program that removes the time from the given date string "Wed April 15, 7pm". It should return only the date without the time.

const removeTime = (str) => {
  let resultStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ",") {
      break;
    }
    resultStr += str[i];
  }
  return resultStr;
};

removeTime("Wed April 15,7pm");
