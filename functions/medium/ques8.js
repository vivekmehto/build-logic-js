//Given an array and an item, your function should return the index at which the item is present.

const indexOf = (arr, item) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      return i;
      break;
    }
  }
  return -1;
};

indexOf([1, 2, 3, 4, 5], 5);
