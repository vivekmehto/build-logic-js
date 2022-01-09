//Write a program to take an input from a user and find its Factorial. Example: Factorial of 5 is 120

const fact = (num) => {
  let factNum = 1;
  while (num > 0) {
    factNum = factNum * num;
    num--;
  }
  return factNum;
};

console.log(fact(5));
