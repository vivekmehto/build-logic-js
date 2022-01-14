//For a given input string(str), write a function to print all the possible substrings.Without using substr method

const subString = (str) => {
  let isSpace = false;
  for (let i = 0; i < str.length; i++) {
    //starting point
    for (let j = 0; j < str.length - i; j++) {
      //ending point
      let len = i + j;
      let resultStr = "";
      for (let k = i; k <= len; k++) {
        //looping string
        resultStr += str[k];
      }
      console.log(resultStr);
    }
  }
};

subString("Hello");
