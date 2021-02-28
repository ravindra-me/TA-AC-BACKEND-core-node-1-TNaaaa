function circleArea(redius) {
  return Math.PI * redius * redius;
}

function squareArea(side) {
  return side * side;
}

function rectangle(width, height) {
  return width * height;
}

module.exports = {
  circleArea,
  squareArea,
  rectangle,
};
