const calcDiff = (xy2, xy1) => xy2 - xy1;

const square = (numDiff) => 2 ** numDiff;

const squareRoot = (squareDiff1, squareDiff2) => Math.sqrt(squareDiff1 + squareDiff2);

const findDistance = (x1, y1, x2, y2) => {
  const xDiff = calcDiff(x2, x1);
  const yDiff = calcDiff(y2, y1);
  const xDiffSquare = square(xDiff);
  const yDiffSquare = square(yDiff);
  return squareRoot(xDiffSquare, yDiffSquare);
};

module.exports = { findDistance };
