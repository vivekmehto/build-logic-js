const sum = (...rest) => rest.reduce((sum, curr) => (sum += curr));

console.log(sum(1, 5, 6, 9, 4));
