//Given a string and an index, your function should return the character present at that index in the string.

const findChar = (str, index) => {
  for (let i = 0; i < str.length; i++) {
    if (index === i) {
      return str[i];
    }
  }

  return -1;
};

findChar("neoGcamp", 4);
