/* There is a string, s, of lowercase English letters that is repeated infinitely many times. Given an integer, n, find and print the number of letter a's in the first n letters of the infinite string. */

/* let s =
  "kmretasscityylpdhuwjirnqimlkcgxubxmsxpypgzxtenweirknjtasxtvxemtwxuarabssvqdnktqadhyktagjxoanknhgilnm";
let n = 736778906400; */

let s = "aba";
let n = 10;

function repeatedString(s, n) {
  let lengthS = s.length;

  if (lengthS === 1 && s === "a") {
    return n;
  }

  let counterAInTotal = 0;
  let numTimesToRepeatS = Math.floor(n / lengthS);
  let sRemaining = n % lengthS;
  let counterAInS = 0;

  for (let letter of s) {
    if (letter === "a") {
      counterAInS++;
    }
  }

  counterAInTotal = counterAInS * numTimesToRepeatS;

  for (let counter = 0; counter < sRemaining; counter++) {
    let letter = s[counter];
    if (letter === "a") {
      counterAInTotal++;
    }
  }

  return counterAInTotal;

}

console.log(repeatedString(s, n));
