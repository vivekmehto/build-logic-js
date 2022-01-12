//Write a Program to convert Decimal to Binary.

const decimalToBinary = (num) => {
  let binary = 0;
  while (num > 0) {
    let rem = num % 2;
    num = num - 2;
    binary = binary * 10 + rem;
  }
  return binary;
};

//Follow up Question : Write a Program to Convert Octal to Decimal.
