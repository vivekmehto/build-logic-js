//A program that reads three strings and prints the longest and smallest one

const longSmallString = (str1, str2, str3) => {
  console.log(maxStr(str1, str2, str3));
  console.log(minStr(str1, str2, str3));
};

const maxStr = (str1, str2, str3) => {
  let a = str1.length;
  let b = str2.length;
  let c = str3.length;

  if (a >= b) {
    if (a >= c) {
      return str1;
    } else if (c >= b) {
      return str3;
    }
  } else if (b >= c) {
    return str2;
  } else {
    return str3;
  }
};

const minStr = (str1, str2, str3) => {
  let a = str1.length;
  let b = str2.length;
  let c = str3.length;

  if (a <= b) {
    if (a <= c) {
      return str1;
    } else if (c <= b) {
      return str3;
    }
  } else if (b <= c) {
    return str2;
  } else {
    return str3;
  }
};

longSmallString("Hello my name is vivek", "abc", "neogrammer");
