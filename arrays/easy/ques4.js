//Find Median and Mode of an array.
// Median : ((N+1)/2)th term.
// Mode : Most repeating term

const median = (arr) => arr[Math.floor((arr.length + 1) / 2) - 1];

const mode = (arr) => {
  let frequencyArray = [];
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }
    frequencyArray.push({ name: arr[i], count: count });
  }

  let max = 0;
  let name = frequencyArray[0].name;
  for (let i = 0; i < frequencyArray.length; i++) {
    if (max < frequencyArray[i].count) {
      max = frequencyArray[i].count;
      name = frequencyArray[i].name;
    }
  }

  return `Mode is ${name}`;
};

median([10, 4, 5, 2, 5, 6, 9]);
mode([10, 4, 5, 2, 5, 6, 9]);
