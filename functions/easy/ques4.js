//Given n numbers, your function should return the minimum of them all. The number of parameters won't be accepted from user.

const min = (...rest) => rest.reduce((acc, curr) => Math.min(acc, curr));

min(3, 5);
min(3, 5, 9, 1);
