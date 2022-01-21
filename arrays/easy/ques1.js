//Find sum of an array and display the output . Example [10,4,5,2,5,6,9].

const sumOfArray = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
};

sumOfArray([10, 4, 5, 2, 5, 6, 9]);
