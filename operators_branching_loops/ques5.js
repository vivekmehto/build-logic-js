//Write a program to find the minimum out of three given numbers. The numbers are num1=35, num2=29 and num3=46.

const min = (num1, num2, num3) => Math.min(num1, Math.min(num2, num3));

min(35, 29, 46);
