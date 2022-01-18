//Given an input string S that contains multiple words,
//you need to remove all the spaces present in the input string. There can be multiple spaces present after any word

const removeAllSpace = (str) => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      result += str[i];
    }
  }
  return result;
};

removeAllSpace("Hello       NEOGRAMMER       ");
