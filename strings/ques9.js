//Write a program which receives a string str that calculates the length of a string and return true
// if the length is greater than 7 without using strlen()

const strLength = (str) => {
  let length = 0;
  while (str[length] !== undefined) {
    length++;
  }
  return length;
};

const func = (str) => strLength(str) > 7;

func("Full Stack NEOGrad");
