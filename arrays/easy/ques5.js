/*
Find sum of two arrays.
[3,5,2,9,4] = 3+5+2+9+4 = 23
[6,2,8,1,3] = 6+2+8+1+3 = 20
Final Output : 20+23 = 43
*/

const arraySum = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
};

const sumOfTwoArrays = (arr1, arr2) => arraySum(arr1) + arraySum(arr2);

sumOfTwoArrays([3, 5, 2, 9, 4], [6, 2, 8, 1, 3]);
