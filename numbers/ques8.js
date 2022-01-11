//Write a Program to Print N Odd Number in Descending Order.

const isOdd = (num) => (num % 2 === 0 ? false : true);

const oddInDesc = (num) => {
  for (let i = 2 * num; i > 0; i--) {
    if (isOdd(i)) {
      console.log(i);
    }
  }
};

oddInDesc(4);
