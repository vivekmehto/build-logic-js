//Given two arrays, your function should return single merged array.

const mergeArray = (arr1, arr2) => {
  let resArr = [];
  for (let i = 0; i < arr1.length; i++) {
    resArr.push(arr1[i]);
  }

  for (let i = 0; i < arr2.length; i++) {
    resArr.push(arr2[i]);
  }

  return resArr;
};

mergeArray([1, 3, 5], [2, 4, 6]);
