let n = 3;
function viralAdvertising(n) {
  let liked = 0;
  let sharedPeole = 5;

  for (let counter = 1; counter <= n; counter++) {
    let division = Math.floor(sharedPeole / 2);
    liked = liked + division;
    sharedPeole = division * 3;
  }
  return liked;
}

let likedAdvertising = viralAdvertising(n);

console.log(likedAdvertising);
