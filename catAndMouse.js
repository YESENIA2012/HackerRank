let x = 2;
let y = 5;
let z = 4;

function catAndMouse(x, y, z) {
  let distanceXtoC = Math.abs(z - x);
  let distanceYtoC = Math.abs(z - y);

  if (distanceXtoC < distanceYtoC) {
    return "Cat A";
  } else if (distanceYtoC < distanceXtoC) {
    return "Cat B";
  } else {
    return "Mouse C";
  }
}

console.log(catAndMouse(x, y, z));
