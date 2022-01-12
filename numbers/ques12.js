//Write a Program to convert Decimal to Binary.

const decimalToBinary = (num) => {
  let binary = 0;
  let i = 1;
  while (num > 0) {
    let rem = num % 2;
    num = parseInt(num / 2);
    binary = binary + rem * i;
    i = i * 10;
  }
  return binary;
};

//Follow up Question : Write a Program to Convert Octal to Decimal.

const octalToDecimal = (num) => {
  let decimalNumber = 0;
  let i = 0;
  while (num > 0) {
    let rem = num % 10;
    decimalNumber = decimalNumber + rem * Math.pow(8, i);
    num = parseInt(num / 10);
    i++;
  }
  return decimalNumber;
};

decimalToBinary(5);
octalToDecimal(116);
