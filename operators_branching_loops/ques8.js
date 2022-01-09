/*
Print the following star pattern :-

*
* *
* * *
* * * *
* * * * *
*/

const star = (num) => {
  let string = "";
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
      string += "*";
    }
    string += "\n";
  }
  console.log(string);
};

star(5);
