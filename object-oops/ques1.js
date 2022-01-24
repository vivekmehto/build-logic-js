/*
Given an array of objects of student's marks:

Print the name and total marks of each student.
Print the name of student whose total marks is highest.
Print the name of student whose total marks is lowest.
Print the average marks of the class in computer subject.
Print the grades of all students:
(Grade A if total marks is higher than or equal to 75%,
Grade B if higher than or equal to 60%,
Grade C if higher than or equal to 35%,
Grade D if lower than 35%.)
Print the total number of students passed and their names. Pass when total marks is greater than 35%.
*/

const studentDetails = [
  {
    roll: "1",
    name: "Rohan Singh",
    maths: 86,
    science: 90,
    english: 75,
    computer: 85,
  },
  {
    roll: "2",
    name: "Ritvik Patel",
    maths: 27,
    science: 30,
    english: 35,
    computer: 30,
  },
  {
    roll: "3",
    name: "Neha Maurya",
    maths: 75,
    science: 69,
    english: 40,
    computer: 75,
  },
  {
    roll: "4",
    name: "Mohit Verma",
    maths: 21,
    science: 31,
    english: 45,
    computer: 40,
  },
  {
    roll: "5",
    name: "Karan Trivedi",
    maths: 70,
    science: 80,
    english: 35,
    computer: 60,
  },
];

const printTotalMarks = (arr) => {
  let totalMarks = 0;
  for (let i = 0; i < arr.length; i++) {
    let obj = arr[i];
    totalMarks = obj.maths + obj.science + obj.english + obj.computer;
    let grade = "";
    let avg = totalMarks / 4;
    if (avg >= 75) {
      grade = "A";
    } else if (avg >= 60) {
      grade = "B";
    } else if (avg >= 35) {
      grade = "C";
    } else {
      grade = "D";
    }
    let result = "";

    if (avg > 35) {
      result = "passed";
    } else {
      result = "fail";
    }

    console.log(
      `Name : ${obj.name} and Total Marks ${totalMarks} and grade is : ${grade} and result is : ${result}`
    );
  }
};

printTotalMarks(studentDetails);

// const highestMarks = (arr) => {
//   let max = 0;
//   let min = 500;
//   let name = "";
//   let lowestName = "";
//   for (let i = 0; i < arr.length; i++) {
//     let obj = arr[i];
//     let totalMarks = obj.maths + obj.science + obj.english + obj.computer;
//     if (max < totalMarks) {
//       max = totalMarks;
//       name = obj.name;
//     }
//     if (min > totalMarks) {
//       min = totalMarks;
//       lowestName = obj.name;
//     }
//   }
//   console.log(`Name : ${name} and Highest marks : ${max}`);
//   console.log(`Name : ${lowestName} and Lowest marks : ${min}`);
// };

// highestMarks(studentDetails);

// const avgComputer = (arr) => {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let computermarks = arr[i].computer;
//     sum += computermarks;
//   }

//   return sum / arr.length;
// };

// avgComputer(studentDetails);
