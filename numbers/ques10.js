//Write a JavaScript program that reverses a number.

const reverseNum = (num) => {
  let givenNum = parseInt(num);
  let reverse = 0;
  while (givenNum > 0) {
    let rem = givenNum % 10;
    reverse = reverse * 10 + rem;
    givenNum = parseInt(givenNum / 10);
  }
  return reverse;
};

reverseNum(32243);
