//Funciones recursivas

function power(base, exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    // 2 -
    const myPower = power(base, exponent - 1);
    console.log("myPower ", myPower);
    resultado = base * myPower;
    return resultado;
  }
}

/* 
3 * 2 = 6
6 * 2 = 12
12 * 2 = 24
24 * 2 = 48
48 * 2 = 96

sayAge(4,2)
sayAge(3,2)
sayAge(2,2)
sayAge(1,2)
sayAge(1,2)
*/

/* function sayAge(age, year) {
  if (age == 0) {
    return 1;
  } else {
    let myFn = sayAge(age - 1, year);
    return year * myFn;
  }
}

let result = sayAge(5, 2);
console.log(result); */

/* resultado = power(2, 3);
console.log("resultado ", resultado); */

/* let parImpar = (numero) => {
  if (numero === 0) {
    return "Par";
  } else if (numero === 1) {
    return "Impar";
  } else {
    console.log(numero - 2);
    return parImpar(numero - 2);
  }
};

console.log(parImpar(20)); */
