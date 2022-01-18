//Write a program to add 5 numbers. The value of numbers are num1=5, num2=13, num3=7, num4=21 and num5=48.

const sum = (...rest) => rest.reduce((sum, curr) => (sum += curr));

console.log(sum(1, 5, 6, 9, 4));
