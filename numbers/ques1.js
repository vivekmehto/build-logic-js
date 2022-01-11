//Write a program to input 2 numbers and display the sum of the numbers to the console.

const add = (...rest) => rest.reduce((acc, curr) => (acc += curr));

add(20, 40);
add(99, 99);
