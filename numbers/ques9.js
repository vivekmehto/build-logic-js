//Write a JavaScript program to compute the sum of all digits that occur in a given string.

const sumOfDigits = (num) => {
  let sum = 0;
  let givenNum = parseInt(num);
  while (givenNum > 0) {
    let rem = givenNum % 10;
    sum += rem;
    givenNum = parseInt(givenNum / 10);
  }
  return sum;
};

sumOfDigits(1234);
