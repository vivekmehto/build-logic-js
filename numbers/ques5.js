//Calculate the area, perimeter of a square of side 'a'. Also, calculate the surface area and the volume of a cube of side 'a'.

const areaPerimeter = (side) => {
  let area = side * side;
  let perimeter = 4 * side;

  console.log(
    `Area of Square is ${area} and Perimeter of Square is ${perimeter}`
  );
};

const volumeArea = (side) => {
  let volume = Math.pow(side, 3);
  let surfaceArea = 6 * side * side;
  console.log(
    `Surface Area of Cube is ${surfaceArea} and Volume of Square is ${volume}`
  );
};

areaPerimeter(4);
volumeArea(6);
