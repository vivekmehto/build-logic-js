//Write a program to take a number input from user and print multiplication table 12 times for that number.

const table = (num) => {
  for (let i = 1; i <= 12; i++) {
    console.log(`${num} X ${i} = ${num * i}`);
  }
};

table(4);
