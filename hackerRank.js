// sumar los elementos quitando uno
/* let arr = [769082435, 210437958, 673982045, 375809214, 380564127];
let sumaElementos = 0;
let diferencia = 0;
let sumMaxima = 0;
let subtractElements = [];

for (let counter = 0; counter < arr.length; counter++) {
  let elementArray = arr[counter];
  sumaElementos = sumaElementos + elementArray;
}

for (let counter2 = 0; counter2 < arr.length; counter2++) {
  diferencia = sumaElementos - arr[counter2];
  subtractElements.push(diferencia);
}

console.log(subtractElements);
// saber cual es el número mayor y el número monimo
let minimum = Math.min(subtractElements);
let max = Math.max(...subtractElements);
console.log(minimum, max); */

// saber cual es el número mayor
/* let candles = [4, 4, 3, 1];

let numMayor = Math.max(...candles);
console.log(numMayor); */

// cambiar hora a hora militar
/* var s = "06:40:03AM";

let hora = s[0] + s[1];
let min = s[3] + s[4];
let sec = s[6] + s[7];
let t = s[8] + s[9];
let horaConverInt = parseInt(hora);
let horaM = 0;

if (t == "AM") {
  if (horaConverInt == 12) {
    horaM = "00";
  } else if (horaM < 10) {
    horaM = "0" + horaConverInt;
  } else {
    horaM = horaConverInt;
  }
} else if (t == "PM") {
  if (horaConverInt == 12) {
    horaM = horaConverInt;
  } else {
    horaM = horaConverInt + 12;
    console.log(horaM);
  }
}
let horaS = String(horaM);

console.log(horaM + ":" + min + ":" + sec); */
/* 

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
