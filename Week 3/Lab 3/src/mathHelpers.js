const calcDiff = (num1, num2) => num2 - num1;

const square = (numDiff) => 2 ** numDiff;

const squareRoot = (squareDiff1, squareDiff2) => Math.sqrt(squareDiff1 + squareDiff2);

const findDistance = (num1, num2, num3, num4) => {
  const xDiff = calcDiff(num3, num1);
  const yDiff = calcDiff(num4, num2);
  const xDiffSquare = square(xDiff);
  const yDiffSquare = square(yDiff);
  return squareRoot(xDiffSquare + yDiffSquare);
};

module.exports = { findDistance };
