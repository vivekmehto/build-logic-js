// Find average of an array and display the output.

const avgOfArray = (arr) => {
  let numOfElements = arr.length;
  let sum = 0;
  for (let i = 0; i < numOfElements; i++) {
    sum += arr[i];
  }

  return sum / numOfElements;
};

avgOfArray([10, 4, 5, 2, 5, 6, 9]);
