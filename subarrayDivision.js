let s = [2, 5, 1, 3, 4, 4, 3, 5, 1, 1, 2, 1, 4, 1, 3, 3, 4, 2, 1];
let d = 18;
let m = 7;

function birthday(s, d, m) {
  const copiaS = s.map((number) => {
    return number;
  });
  let counterS = 0;
  if (s.length == 1) {
    counterS++;
  }
  for (let counter = 0; counter <= s.length; counter++) {
    var newS = copiaS.slice(0, m);
    let elementF = newS[0];
    for (
      let counter2 = 1;
      counter2 < newS.length && newS.length == m;
      counter2++
    ) {
      let elementNewS = newS[counter2];

      if (elementF + elementNewS == d && counter2 == m - 1) {
        counterS++;
      }
      elementF = elementF + elementNewS;
    }
    copiaS.shift();
  }
  return counterS;
}

let counterSquare = birthday(s, d, m);
console.log(counterSquare);
