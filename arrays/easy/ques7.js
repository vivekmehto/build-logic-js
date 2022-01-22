// Shift an array by X to right.
// Example [1,2,3,4,5] after shifting to right [5,1,2,3,4]

const shiftArray = (arr, num) => {
  if (num === 0 || num === arr.length) {
    return arr;
  }
  let newAray = arr;
  while (num > 0) {
    newAray = shift(newAray);
    num--;
  }
  return newAray;
};

const shift = (arr) => {
  let temp = [];
  temp[0] = arr[arr.length - 1];
  for (let i = 0; i < arr.length - 1; i++) {
    temp[i + 1] = arr[i];
  }
  return temp;
};

shiftArray([1, 2, 3, 4, 5], 2);
