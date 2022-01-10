//Given three angles of a triange, your function should return if it is a scalene, isosceles, equilateral triangle or not a triangle at all

const isTriangle = (angle1, angle2, angle3) =>
  angle1 + angle2 + angle3 <= 180 && (angle1 > 0 || angle2 > 0 || angle3 > 0)
    ? true
    : false;

const isEquilateral = (angle1, angle2, angle3) => {
  return angle1 === angle2 && angle1 === angle3 && angle2 === angle3
    ? true
    : false;
};

const isIsosceles = (angle1, angle2, angle3) =>
  angle1 === angle2 || angle1 === angle3 || angle2 === angle3 ? true : false;

const findTriangle = (angle1, angle2, angle3) => {
  if (isTriangle(angle1, angle2, angle3)) {
    if (isEquilateral(angle1, angle2, angle3)) {
      console.log("Its an equilateral Triangle.");
    } else if (isIsosceles(angle1, angle2, angle3)) {
      console.log("Its an isosceles triangle.");
    } else {
      console.log("Its a scalene triangle.");
    }
  } else {
    console.log("It is not a triangle.");
  }
};

findTriangle(90, 45, 45);
