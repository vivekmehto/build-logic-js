//Find the sum of two matrix.

const sumOfTwoMatrix = (arr1, arr2) => {
  let sumMatrix = [[], []];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[i].length; j++) {
      sumMatrix[i][j] = arr1[i][j] + arr2[i][j];
    }
  }
  return sumMatrix;
};

sumOfTwoMatrix(
  [
    [1, 2],
    [1, 2],
  ],
  [
    [1, 2],
    [1, 2],
  ]
);
