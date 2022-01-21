//Find maximum and minimum of an array.

const minMaxOfArray = (arr) => {
  let max = arr[0];
  let min = arr[0];
  for (let i = 1; i < arr.length - 1; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }

    if (min > arr[i]) {
      min = arr[i];
    }
  }
  return `Minimum of Array is ${min} and Maximum is ${max}`;
};

minMaxOfArray([10, 4, 5, 2, 5, 6, 9]);
