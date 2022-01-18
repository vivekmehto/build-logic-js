//Write program to take a month as an input from the user and find out whether the month has 31 days or not.

const monthArray = [
  "january",
  "march",
  "may",
  "july",
  "august",
  "october",
  "december",
];

const isThirtyOne = (month) => monthArray.includes(month.toLowerCase());

isThirtyOne("january");
