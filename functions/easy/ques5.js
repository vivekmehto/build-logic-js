//Given n numbers, your function should return the maximum of them all. The number of parameters won't be accepted from user.

const max = (...rest) => rest.reduce((acc, curr) => Math.max(acc, curr));

max(3, 5);
max(3, 5, 9, 1);
