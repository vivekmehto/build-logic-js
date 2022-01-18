//Given a and b, your function should return the value of a power b

const pow = (a, b) => {
  let res = 1;
  for (let i = 1; i <= b; i++) {
    res *= a;
  }
  return res;
};

pow(2, 3);
