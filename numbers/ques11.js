//Write a Program to cyclically Rotate a Number by X positions in the left direction, as provided by the user.

const rotate = (num, xPosition) => {
  while (xPosition > 0) {
    let rem = num % 10;
    let div = parseInt(num / 10);
    num = rem * Math.pow(10, numberOfDigits(num) - 1) + div;
    xPosition--;
  }
  return num;
};

const numberOfDigits = (num) => {
  let count = 0;
  while (num > 0) {
    let rem = num % 10;
    count++;
    num = parseInt(num / 10);
  }
  return count;
};

rotate(1234, 2);
