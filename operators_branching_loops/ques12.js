//Write a Program to take a number input from user and find if the number is Prime or not.

const isPrime = (num) => {
  if (num === 1) {
    return "Neither prime nor composite";
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return "Not Prime";
      break;
    }
  }
  return "prime";
};

isPrime(7);
