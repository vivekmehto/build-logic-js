//Write a program to return a Fibonacci series : 0,1,1,2,3,5,8,13,21....

const fibo = (num) => {
  let firstNumber = 0;
  let secondNumber = 1;
  let fiboArray = [0, 1];
  for (let i = 1; i < num - 1; i++) {
    let temp = firstNumber + secondNumber;
    fiboArray.push(temp);
    firstNumber = secondNumber;
    secondNumber = temp;
  }
  console.log(fiboArray);
};

fibo(10);
