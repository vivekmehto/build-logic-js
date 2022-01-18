//Write a program to find the maximum out of three given numbers. The numbers are num1=8, num2=23 and num3=17.

const max = (num1, num2, num3) => {
  //   if (num1 >= num2) {
  //     if (num1 >= num3) {
  //       return num1;
  //     } else if (num3 >= num2) {
  //       return num3;
  //     }
  //   } else if (num2 >= num3) {
  //     return num2;
  //   }
  //   return num3;

  return Math.max(num1, Math.max(num2, num3));
};

console.log(max(8, 23, 17));
