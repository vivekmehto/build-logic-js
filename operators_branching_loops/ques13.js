//Write a program to take a day as an input and determine whether it is a weekday or weekend. Example: Tuesday is weekday.

const weekend = ["saturday", "sunday"];
const weekday = ["monday", "tuesday", "wednesday", "thursday", "friday"];

const findDay = (day) => {
  if (weekend.includes(day.toLowerCase())) {
    return "weekend";
  } else if (weekday.includes(day.toLowerCase())) {
    return "weekday";
  }
  return "INVALID INPUT";
};

findDay("tuesday");
