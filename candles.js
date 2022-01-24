let candles = [3, 2, 1, 3];
function birthdayCakeCandles(candles) {
  // Write your code here
  let numMayor = Math.max(...candles);
  let counterNumMayor = 0;

  for (var counter = 0; counter < candles.length; counter++) {
    let elementArray = candles[counter];
    if (elementArray == numMayor) {
      counterNumMayor = counterNumMayor + 1;
    }
  }
  return counterNumMayor;
}

var candle = birthdayCakeCandles(candles);
console.log(candle);
