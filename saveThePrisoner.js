let n = 7;
let m = 19;
let s = 2;
function saveThePrisoner(n, m, s) {
  if ((s + m - 1) % n == 0) {
    return n;
  } else {
    return (s + m - 1) % n;
  }
}

console.log(saveThePrisoner(n, m, s));
