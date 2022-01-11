//Write a program to calculate sum of N natural digits, as input by the users?

const sum = (num) => {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
};

sum(100);
