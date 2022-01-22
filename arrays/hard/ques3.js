//Find Identity matrix.

const IdentityMatrix = (matrix) => {
  let isIdentity = true;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i === j && matrix[i][j] === 1) {
        isIdentity = true;
      } else if (matrix[i][j] === 0) {
        isIdentity = true;
      } else {
        return false;
      }
    }
  }
  return isIdentity;
};

IdentityMatrix([
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1],
]);
