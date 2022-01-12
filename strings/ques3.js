//Program that reads string and count number of characters present in the string

const charCount = (str) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
    if ((charCode > 96 && charCode < 123) || (charCode > 64 && charCode < 91))
      count++;
  }
  return count;
};

charCount("Hello my name is vivek.");
