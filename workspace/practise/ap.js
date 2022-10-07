const array = [9, 16, 81];

function checkSquares() {
  const sqares = array.every((x) => Math.sqrt(x));
  console.log(sqares);
}

checkSquares();
