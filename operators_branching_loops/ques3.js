//Write a program to find the maximum and minimum out of two given numbers. The numbers are num1=129 and num2=251.

const maxMin = (num1, num2) => {
  return num1 > num2
    ? `${num1} is maximun and ${num2} is minimum`
    : `${num2} is maximun and ${num1} is minimum`;
};

console.log(maxMin(129, 251));
