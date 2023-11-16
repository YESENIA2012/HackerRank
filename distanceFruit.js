/* Sam's house has an apple tree and an orange tree 
that yield an abundance of fruit. Using the information given below, 
determine the number of apples and oranges that land on Sam's house. */

function distanceFruit(apples, a, rankApplesDis) {
  for (
    let counterDistApple = 0;
    counterDistApple < apples.length;
    counterDistApple++
  ) {
    var distanceApple = apples[counterDistApple];
    var rankA = a + distanceApple;

    rankApplesDis.push(rankA);
  }
  return rankApplesDis;
}
function counterFruits(rankApples, s, t, counterApple) {
  for (
    let counterRankApple = 0;
    counterRankApple < rankApples.length;
    counterRankApple++
  ) {
    let rankElementApp = rankApples[counterRankApple];
    if (rankElementApp >= s && rankElementApp <= t) {
      counterApple = counterApple + 1;
    }
  }
  return counterApple;
}
let s = 7;
let t = 11;
let a = 5;
let b = 15;
let apples = [-2, 2, 1];
let oranges = [5, -6];
function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let rankApplesDis = [];
  let rankOrangesDis = [];

  let rankApples = distanceFruit(apples, a, rankApplesDis);
  let rankOranges = distanceFruit(oranges, b, rankOrangesDis);

  let counterApple = 0;
  let counterOrange = 0;

  let cantApples = counterFruits(rankApples, s, t, counterApple);
  let cantOranges = counterFruits(rankOranges, s, t, counterOrange);
  return { cantApples: cantApples, cantOranges: cantOranges };
}

let cantFruits = countApplesAndOranges(s, t, a, b, apples, oranges);
let cantApples = cantFruits.cantApples;
let cantOranges = cantFruits.cantOranges;
console.log(cantApples);
console.log(cantOranges);
