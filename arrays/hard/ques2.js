//Display transpose of matrix.

const transposeMatrix = (matrix) => {
  let transpose = [[], [], []];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      transpose[i][j] = matrix[j][i];
    }
  }
  return transpose;
};

transposeMatrix(
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]
);
