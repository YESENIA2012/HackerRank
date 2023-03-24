/* const person = [];
person["A"] = 1;
person[0] = 2;
person[true] = typeof person[true];
console.log(person, person.length); */
/* console.log('javascript""'.length);
const cedula = "V-11122233"; // --- cadena a probar
const regExp = /[VE]-[0-9]{1,8}/; // --- sin comillas
const resultado = regExp.test(cedula);
//--
console.log(resultado); */

/* let a = -true;
let b = -false;

let c = a == b;
console.log(c); */

/* let a = { y: 10 };
a.x = a;
console.log(JSON.stringify(a)); */

/* let eventDelete = 3;

let array = [1, 2, 3, 4];

for (let element of array.values()) {
  console.log(element);
}

var arr = [10, 20, 30];

const print = function (arr) {
  console.log(arr);
};

console.log(print.name); */

/* let numbers = [53, 64, 25, 37, 78];

console.log(Math.max.apply(null, numbers));

function sleep() {
  let reply = [
    this.animal,
    "tipicamente duerme entre",
    this.sleepDuration,
  ].join(" ");
  console.log(reply);
}

let obj = { animal: "1", sleepDuration: "12 y 16 horas" }; */
/* 
var i = 3;
function change(j) {
  j = 4;
}

change(i);
console.log(i); */

/* let plustra = {
  cities: [
    { name: "Paris", pop: 2 },
    { name: "London", pop: 8 },
    { name: "New York", pop: 9 },
  ],
};

console.log(plustra.cities[0].pop); // 2

var x = "2",
  y = 10;
console.log(x < y);

var i = 3;
function change(j) {
  j = 4;
}

change(i);
console.log(i); */

//15511210043330985984000000

let n = 6;

function extraLongFactorials(n) {
  let result = BigInt(n * (n - 1));

  for (let counter = 2; counter < n; counter++) {
    result = result * BigInt(n - counter);
  }
  result = result.toString();
  console.log(result);
  return result;
}

console.log(extraLongFactorials(n));
