/* console.log(Math.min(2, 10, 11, 1)); = 1 Devuelve el valor minimo
console.log(Math.max(100, 12, 300, 30)); = 300 Devuelve el valor maximo */

/*//Aprendiendo a usar la comilla sencilla y las comillas dobles
const sampleStr = 'Alan said, "Peter is learning JavaScript".';
console.log(sampleStr); //=>  Alan said, "Peter is learning JavaScript".
const myStr = 'I am a "double quotes" string inside "double quotes".';
console.log(myStr); //=> I am a "double quoted" string inside "double quotes".

//Acá estoy usando una comilla para escribir la palabra let`s
const goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"';
const badStr = 'Finn responds, "Let\'s go!"';
console.log(goodStr);
console.log(badStr);

//Acá estoy concatenando 2 string
console.log("My name is Alan," + " I concatenate.");
const ourStr = "I come first. " + "I come second.";
console.log(ourStr);  //=> I come first. I come second.

//Acá le estoy agregando mas strig a la variable ourStr2, estoy uniendo las cadenas en una sola variable
let ourStr2 = "I come first. ";
ourStr2 += "I come second.";
console.log(ourStr); */

/* aqui puedo unir cadenas de string
const anAdjective = "awesome!";
let ourStr = "freeCodeCamp is ";
console.log((ourStr += anAdjective));
console.log("Alan Peter".length); con esto puedo saber la longitud de un string

//Aqui imprimira la primera letra de el string
const firstName = "Charles";
const firstLetter = firstName[0];
console.log(firstLetter);

//No se pueden cambiar los caracteres de un strig pero si el string completo
let myStr = "Bob";
myStr[0] = "J";
console.log(myStr);

//Aprendiendo sobre como acceder a la longitud de un string o a los caracteres
const lastName = "Lovelace";
const thirdLetterOfLastName = lastName[2];
console.log(thirdLetterOfLastName); */

//Aprediendo sobre el Number wrapper
/* let theNumber = Number("6");
if (!Number.isNaN(theNumber)) {
  console.log("Your number is the square root of " + theNumber * theNumber);
} else {
  console.log("Por favor ingresa un número");
}

//Aprendendo sobre pasar parámetros a las funciones
/* function testFun(param1, param2) {
  console.log(param1, param2);
}
testFun("te", "amo"); */
/* 

//Aprendiendo sobre el alcance de las variables dentro de las funciones
function myTest() {
  const loc = "foo";
  console.log(loc);
}

myTest(); */ // cuando llamo la función si encuentra la variable loc
//console.log(loc); // si imprimimos eso dice que la variable no a sido definida

//Alcance global vs local en funciones, el alcance local tiene prioridad sobre el global
/* const someVar = "Hat";

function myFun() {
  const someVar = "Head";
  return someVar;
}
let algo = myFun();
console.log(algo); */

//cuando retorna undefined en funciones, devuelve undefined cuando no return nada
/* 
let sum = 0;
function addSum(num) {
  sum = sum + num;
  console.log(sum);       
}
console.log(addSum(3)); //=> 3  undefined */

//Aprendiendo sobre la declaración Break que salta fuera del lopp
/* for (let current = 20; ; current = current + 1) {
  if (current % 7 == 0) {
    console.log(current);
    break;
    console.log("Yesenia");
  }
} //=> 21 */

//Aprendiendo sobre la declaración continue, que hace que la iteración salte cuando llegue a esa condición
/* var text = "";
var i;
for (i = 0; i < 5; i++) {
  if (i === 3) {
    console.log("Yesenia");
    continue;
    console.log("González");
  }
  text += "The number is  " + i + "\n";
}
console.log(text); */
/* Yesenia
The number is  0
The number is  1
The number is  2
The number is  4 */

//Estas funciones que no tienen return devuelven el valor que imprimimos y un undefined, pero acá no lo hace
/* const makeNoise = function () {
  console.log("Pling!");
};
makeNoise();

const square = function (x) {
  return x * x;
};
console.log(square(12));
console.log(x); // la variable x solo es de alcance local */

//Alcance de las variables
/* let x = 10;
if (true) {
  let y = 20; // si y fuera var si se podria ver, fuera de esta condición
  var z = 30;
  console.log(x + y + z);
  // → 60
}
console.log(x + y + z); // sale error porque let es de alcance local */

/* const hummus = function (factor) {
  const ingredient = function (amount, unit, name) {
    let ingredientAmount = amount * factor;
    if (ingredientAmount > 1) {
      unit += "s";
    }
    console.log(`${ingredientAmount} ${unit} ${name}`);
  };
  ingredient(1, "can", "chickpeas");
  ingredient(0.25, "cup", "tahini");
  ingredient(0.25, "cup", "lemon juice");
  ingredient(1, "clove", "garlic");
  ingredient(2, "tablespoon", "olive oil");
  ingredient(0.5, "teaspoon", "cumin");
};
console.log(hummus);
console.log(ingredientAmount); //No es visible
console.log(name); //No es visible */

/* var suma2 = num10 + num11;
var num10 = 6; si estas variables fueran let, devolverian errir
var num11 = 6;

console.log(suma2); */

/* let n = 5;
for (let i = 0; i < n; i++) {
  console.log(i);
}
console.log("this2", i); // i no esta definida, por lo tanto dará error */

//Puedo usar valores de funciones como parámetros de otra función
/* function nameIs() {
  let nombre1 = "Yesenia";

  return nombre1;
}
let nombre = nameIs();
function sayName(nombre) {
  console.log("Hola soy", nombre);
}
sayName(nombre); */

//Las funciones se pueden usar antes de ser definidas
/* console.log("The future says:", future());
function future() {
  return "You'll never have flying cars";
} */
//Apprendiendo sobre la función de flecha,
/* const square1 = (x) => {
  return x * x;
};
let square3 = square1(10);
console.log(square3); //=> 100

//Si tiene un solo parámetro y una sola expresión se puede colocar sin flechas y sin llaves

const square2 = (x) => x * x;
let square4 = square2(12);
console.log(square4); //=> 144 */

// Call Stack                                                           Falta
/* function chicken() {
  return egg();
}
function egg() {
  return chicken();
}
console.log(chicken() + " came first."); */

//El valor de las variables, cambian cada vez que se llama la función
/* function wrapValue(n) {
  let local = n;
  return () => local;
}
let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
// → 1
console.log(wrap2());
// → 2 */

//Closure                                                              Falta
/* function multiplier(factor) {
  return (number) => number * factor;
}
let twice = multiplier(2);
console.log(twice(5));
// → 10 */

//Recursion                                                            Falta
/* function power(base, exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    // 2 * power( 2, 2)
    resultado = base * power(base, exponent - 1);
    return resultado;
  }
}
console.log(power(2, 3));
// → 8 */

//OBJETOS

//Usar cochetes para acceder a una proiedad
/* let casa = {
  puerta: "blanca",
  pared: "marrón",
};
console.log(casa["puerta"]); */

//Acceder a propiedaddes de objetos con variables
/* const dogs = {
  Fido: "Mutt",
  Hunter: "Doberman",
  Snoopie: "Beagle",
};

const myDog = "Hunter"; //Guarde la propiedad en una variable
const myBreed = dogs[myDog]; // Guarde el objeto con la variable myDog que tiene la propiedad "Hunter" guardada
console.log(myBreed); // Imprime Doberman */

//Los arreglos son un tipo de objeto
/* console.log(typeof []); */

/* //Asignar propiedades y valores de un objeto a otro, o al mismo
let objectA = { a: 1, b: 2 };
Object.assign(objectA, { b: 3, c: 4 });
console.log(objectA); // -> {a: 1, b: 3, c: 4}
let objectB = {};
Object.assign(objectB, { b: 3, c: 4 });
console.log(objectB); // → {b: 3, c: 4} */

//Permite saber las proiedades que tiene un objeto, esto devuelve un qrreglo
/* let casa = {
  puerta: "blanca",
  pared: "marrón",
};
console.log(Object.keys(casa)); //=> ["puerta", "pared"] */
//Eliminar una propiedad de un objeto
/* delete casa.puerta; */
//Saber si un objeto tiene una propiedad
/* console.log("puerta" in casa);
console.log("pared" in casa) */

/* //Objetos guardados en la misma dirección de memoria
let object1 = { value: 10 };
let object2 = object1;
let object3 = { value: 10 };
console.log(object1 == object2); //=> true  Son el mismo objeto en realidad
console.log(object1 == object3);  //=> false  como son direcciones de memoria distintas me dicen false
object1.value = 15;
console.log(object2.value); // → 15 // Reemplazo el valor de la propiedad, si cambia el valor del objeto 1, cambia el valor del objeto2
console.log(object3.value); // → 10 */

//METHODS                        falta
/* let doh = "Yesenia";
console.log(typeof doh.toUpperCase);
// → function
console.log(doh.toLowerCase()); //toUpperCase devuelve el string en mayúscula "YESENIA"
// → yesenia */
/* 
let array = [1, 2, 3, 4, 5];

console.log(array.pop(4));
console.log(array); */

/* const someObj = {
  propName: "John",
};

function propPrefix(str) {
  const s = "prop";
  return s + str;
}

const someProp = propPrefix("Name");
console.log(someObj[someProp]); */

/* const score = { visitors: 0, home: 0 };*/
// This is okay
/* score.visitors = 1; */
// This isn't allowed

/*score = { visitors: 1, home: 1 };
console.log(score); */

//Uso de algunos metodos
//let array = [1, 2, 3, 4, 2];

/* console.log(array.indexOf(2)); // -> 1 posición
console.log(array.lastIndexOf(2)); // -> 4 posición */

/* let array2 = [6, 7, 8, 9, 10];

let array3 = array.concat(array2);
console.log(array3); */

//Metodo trim quita los espacios en blanco de el principio y el final de un string
/* let hermanos = " Diego, Yesenia, Zaina, Ricardo, Gabriela ";
console.log(hermanos.trim()); */

//Uso del metodo padStart
//console.log(String(6).padStart(3, "0"));
// → 006

/* //Cortar y unir string
let nombre = "Yesenia Paola González Peñaranda";
let array = nombre.split(" ");
console.log(array);

//Join() convierte un array en una cadena
console.log(array.join(" ")); */

/* let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
/* console.log([...array, 50]); Esto mismo se puede hacer con un array de string*/
/*array = [...array, 50];
console.log(array); */

//Imprime números decimales aleatorios entre 0 y uno pero no llega al uno
/* for (counter = 0; counter <= 3; counter++) {
  console.log(Math.random());
} */
/* console.log(Math.floor(Math.random() * 10)); */
// → 2

//devuelve un número entero
//console.log(Math.round(95.8));

/* function greaterThan(n) {
  return (m) => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(typeof greaterThan);
console.log(greaterThan10(11));
// → true */

//Si hicieramos un while no entraria ningún elemento al array
/* const ourArray = [];
let i = 5;

do {
  ourArray.push(i);
  i++;
} while (i < 5);
console.log(ourArray); */

//Con la función Object.freeze() los objetos y sus propiedades no se pueden cambiar, ni se ueden agregar nuevas

/* let obj = {
  name: "FreeCodeCamp",
  review: "Awesome",
};
Object.freeze(obj);
obj.review = "bad";
obj.newProp = "Test";
console.log(obj); //=> { name: 'FreeCodeCamp', review: 'Awesome' }
 */

/* //Establecer parámetros
const greeting = (name = "Anonymous") => "Hello " + name;
console.log(greeting("John")); //=> Hello John
console.log(greeting()); //=> Hello Anonymous */

/* //función shift, quita el primer elemento de un arreglo
let array = ["Yesenia", "González", 29];
let nombre = array.shift();
console.log(array); //=>  [ 'González', 29 ]
console.log(nombre); //=>   Yesenia */

//Desestructuración
/* let a, b, rest;
[a, b] = [10, 20];
console.log(a); // 10
console.log(b); // 20

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a); // 10
console.log(b); // 20
console.log(rest); // [30, 40, 50]

({ a, b } = { a: 10, b: 20 });
console.log(a); // 10
console.log(b); // 20 */

/* // Propuesta de etapa 4 (terminada)
({ a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40 });
console.log(a); // 10
console.log(b); // 20
console.log(rest); // {c: 30, d: 40} */

//Cree otra variable que se llame name DESTRUCTURACIÓN
/* const user = { name: "John Doe", age: 34 };
const { name: userName, age: userAge } = user;
console.log(user.name); */

//METODO REDUCE
/* let array = [1, 2, 3, 4];
console.log(array.reduce((a, b) => a + b, 0)); */

// Two emoji characters, horse and shoe
/* let horseShoe = "🐴👟";
console.log(horseShoe.length);

let roseDragon = "🌹🐉";
for (let char of roseDragon) {
  console.log(char);
} */

//${variable}
/* let a = 1;
let b = 2;
let suma = `El resultado es ${a + b}, gracias`;
console.log(suma); */

//const getMousePosition = (x, y) => ({ x, y });

/* class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const novel = new Book("anonymous");
console.log(novel.writer);
novel.writer = "newAuthor";
console.log(novel.writer); */

/* function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex((countObject) => {
      countObject.name == name;
    });
    if (known == -1) {
      counts.push({ name, count: 1 });
    } else {
      counts[known].count++;
    }
  }
  return counts;
}
console.log(countBy([1, 2, 3, 4, 5], (n) => n > 2)); */

//Encontrar caracteres en una cadena de string
/* let nombre = "Yesenia Paola González Peñarada @#";
let regex = /[^aeiou]/gi;
console.log(nombre.match(regex)); */

//CONSTRUCTORES

/* class Rabbit {
  eyes = "";
  ears = "";
  legs = "";
  constructor(eyes, ears, legs) {
    this.eyes = eyes;
    this.ears = ears;
    this.legs = legs;
  }
  getName() {
    console.log("My eyes are " + this.eyes);
  }
}
let obje = new Rabbit("blue", 2, 4);
obje.getName();
console.log(obje); */

/* let ages = {
  Boris: 39,
  Liang: 22,
  Júlia: 62,
};
console.log(`Júlia is ${ages["Júlia"]}`); // → Júlia is 62
console.log("Is Jack's age known?", "Jack" in ages); // → Is Jack's age known? false
console.log("Is toString's age known?", "toString" in ages); // → Is toString's age known? true */

/* console.log({ x: 1 }.hasOwnProperty("x")); // → true
console.log({ x: 1 }.hasOwnProperty("toString")); // → false */

/* function Persona(first, last, age, gender, interests) {
  // definiendo propiedades y métodos
  this.first = first;
  this.last = last;
  this.age = age;
  this.gender = gender;
  this.interests = interests;
  //...
}
var person1 = new Persona("Bob", "Smith", 32, "hombre", ["music", "skiing"]);
console.log(person1.valueOf());
Person.prototype.farewell = function () {
  alert(this.name.first + " has left the building. Bye for now!");
}; */

/* Object.create = "hands";

class Animal {
  constructor(type) {
    this.type = type;
  }
  run() {
    console.log(`El ${this.type} esta corriendo`);
    return 1;
  }
}

class Perro extends Animal {
  constructor(name, legs, eyes) {
    super("Perro");
    this.name = name;
    this.legs = legs;
    this.eyes = eyes;
  }
} */
/* class Gato extends Animal {
  constructor(name, legs, eyes) {
    super("Gato");
    this.name = name;
    this.legs = legs;
    this.eyes = eyes;
  }
}
let perrito = new Perro("Bruno", 4, 2);
console.log(perrito.run());

let gatico = new Gato("Bruno", 4, 2);
console.log(gatico.run());

console.log(Object.getPrototypeOf(perrito));
let type = gatico.hands;
console.log("type", type); */

/* class Rectangulo {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }
}

let medida = new Rectangulo(10, 20); */

/* const users = [
  { name: "John", age: 34 },
  { name: "Amy", age: 20 },
  { name: "camperCat", age: 10 },
];

const usersUnder30 = users.filter((user) => user.age < 30);
console.log(usersUnder30); */

//función slice()
/* const arr = ["Cat", "Dog", "Tiger", "Zebra"];
console.log(arr);
const newArray = arr.slice();
newArray[0] = "Bird";
console.log(newArray); */

/* let arreglo2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(arreglo2[1][0]); */
/* 
let myArray = [4, 5, 6];
let myNum = myArray.pop();
console.log(myArray); //=> [4,5]
console.log(myNum); */

/* let numbers = [1, 2, 3, 4, 5];
numbers.unshift(6);
console.log(numbers); // => [ 6, 1, 2, 3, 4, 5 ] */

/* //variables globales
const someVar = "hat";
function myfun() {
  const someVar = "Head";
  return someVar;
}

console.log(myfun()); // => Head */

/* function suma(num) {
  return num + 3;
}
let resultado = suma(3);
console.log(resultado); //=> 6

function testFun(para1, para2) {
  console.log(para1, para2);
}

console.log(testFun(Yesenia, González)); //=> Yesenia González

function saludar() {
  console.log("Hello, world!");
}

console.log(saludar); //=>  Hello, world!

let myArray = [4, 5, 6];
let myNum = myArray.pop();
console.log(myArray); //=> [4,5]
console.log(myNum); //=> 6

let arreglo3 = [1, 2, 3];
arreglo3.push(4);
console.log(arreglo3); //=> [1,2,3,4]

let arreglo2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(arreglo2[1][0]); //=> 4

const arreglo = [1, 2, 3, 4, 5, 6, 7];
console.log(arreglo[3]); //=> 4
arreglo[5] = 8;
console.log(arreglo); //=> 1234587 */

/* let string = "Bob";
string[0] = "J";
console.log(string); //=> Bob */

/* let myName = "Yesenia";
console.log(myName[1]); //=> e */

/* let myName = "Yesenia";
let str = "Hello, your name is " + myName + ", How are you?";
console.log(str); //=> Hello, your name is Yesenia, How are you? */

/* let myName = "Yesenia";
console.log(myName.length); //=> 7 */

/* // switch
let val = "b";

switch (val) {
  case "a":
    console.log("apple");
    break;
  case "b":
    console.log("bird");
    break;
  case "c":
    console.log("cat");
    break;
  default:
    console.log("stuff");
}

//=> bird */

//Devolver booleanos de una función
/* function isLess(a, b) {
  return a < b;
}

console.log(isLess(10, 15)); //=> true
console.log(isLess(15, 10)); //=> false */

/* let casa = { "color puerta": "blanca", pared: "marron" };
console.log(casa["color puerta"]); //=> blanca */

/* //Acceder a propiedades de un objeto con variables
const dogs = { fido: "mutt", hunter: "doberman", snoopie: "beagle" };
const myDog = "hunter";
const myBreed = dogs[myDog];
console.log(myBreed); //=> doberman */

//Actualización de las propiedades de un objeto
/* const ourDogs = { name: "camper", legs: 4, tails: 1, friends: ["everithing"] };
ourDogs.name = "Happy camper";
console.log(ourDogs); //=> { name: 'Happy camper', legs: 4, tails: 1, friends: [ 'everithing' ] } */

//Agregar una nueva propiedad a un objeto
/* const ourDogs = { name: "camper", legs: 4, tails: 1, friends: ["everithing"] };
ourDogs.bark = "bow-wow";
console.log(ourDogs); //=> { name: 'Happy camper', legs: 4, tails: 1, friends: [ 'everithing' ],  bark: 'bow-wow' } */

/* //Eliminar propiedades de un objeto
const ourDogs = {
  name: "camper",
  legs: 4,
  tails: 1,
  friends: ["everithing"],
  bark: "bow-wow",
};
delete ourDogs.bark;
console.log(ourDogs); //=> { name: 'Happy camper', legs: 4, tails: 1, friends: [ 'everithing' ] } */

/* //Uso de objetos para búsqueda
const alpha = { 1: "7", 2: "y", 3: "x", 4: "w", 24: "c", 25: "b", 26: "a" };
console.log(alpha[2]); //=> y
console.log(alpha[24]); //=> c
const value = 2;
console.log(alpha[value]); //=> y */

/* //Saber si un objeto tiene determinada propiedad
const myObjec = { top: "hat", bottom: "plants" };
console.log(myObjec.hasOwnProperty("top")); //=> true
console.log(myObjec.hasOwnProperty("middle")); //=> false */

/* //Estructura de datos compleja
const ourMusic = [
  {
    artist: "Dark Punk",
    title: "Homework",
    "release.year": 1997,
    formats: ["CD", "casstte", "LP"],
    gold: true,
  },
]; */

/* //Acceder a estructuras de datos complejas
const ourStorage = {
  desk: { drawer: "stapler" },
  cabinet: {
    "top drawer": { folders: "a file", folfer2: "secrets" },
    "bottom drawer": "soda",
  },
};
console.log(ourStorage.cabinet["top drawer"].folfer2); //=> secrets
console.log(ourStorage.desk.drawer); //=> stapler */

/* //Acceder a arreglos anidados
const ourPets = [
  { animalTypes: "cat", names: ["mono", "salen", "silvers"] },
  { animalType: "dog", names: ["blanca", "mery", "flaca"] },
];
console.log(ourPets[0].names[1]); //=> salen
console.log(ourPets[1].names[0]); //=> blanca */

//undefined y null
/* console.log(null == undefined); //=> true
console.log(null === undefined); //=Z false

let nombre = null;
nombre = "Yesenia";
console.log(nombre); //=> Yesenia */

/* let theNumber = Number(null);
console.log(theNumber); //=> 0
console.log(typeof theNumber); //=> number

let dato = String(6);
console.log(dato); //=> 6
console.log(typeof dato); //=> string */
/* 
let data = Boolean(0);
console.log(data); //=> false
console.log(typeof data); //=> boolean */

/* console.log(Math.floor(5 / 2)); //=> 2 Devuelve un número entero
console.log(5 % 2); //=> 1 Este devuelve el residuo de una división
console.log(11 % 3); //=> 2 */

//Parámetro Rest

/* function howMany(...args) {
  return "You have pased " + args.length + " argumments";
}
console.log(howMany(1, 2, 3)); //=> You have pased 3 argumments

const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
};
console.log(sum(1, 2, 3, 4, 5)); // 15 */

//Operador propagación
/* const array1 = ["jan", "feb", "mar", "apr", "may"];
const array2 = [...array1];
array2.push("dec");
console.log(array1); //=> [ 'jan', 'feb', 'mar', 'apr', 'may' ]
console.log(array2); //=> [ 'jan', 'feb', 'mar', 'apr', 'may', 'dec' ]

//También permite anidar un array dentro de otro array
let array = ["jan", "feb", "mar", "apr", "may", "june"];
let array_2 = [...array, "july", "augus", "sept", "oct", "nov", "dec"];

console.log(array_2); //=> ['jan', 'feb', 'mar', 'apr', 'may', 'june', 'july', 'augus', 'sept','oct', 'nov', 'dec']*/

//clusures
/* function crearContador() {
  let contador = 0;

  return function incrementar() {
    contador = contador + 1;
    return contador;
  };
}

const contador1 = crearContador(); */

/*Recursión
function factorial(x) {
  if (x == 1) {
    return 1;
  } else {
    return x * factorial(x - 1);
  }
}*/

//Desestructuración
/* let a = 1;
let b = 2;
let array2 = [3, 4, 5, 6, 7];
let newArray = [a, b, ...array2];
console.log(newArray); // [ 1, 2, 3, 4, 5, 6, 7] */

/* let array = [1, 2, 3, 4, 5, 6, 7, 8];
let newArray = [...array];
console.log(array); // [ 1, 2, 3, 4, 5, 6, 7, 8 ]
console.log(newArray); // [ 1, 2, 3, 4, 5, 6, 7, 8 ]

newArray.push("Yesenia");

console.log(array); // [ 1, 2, 3, 4, 5, 6, 7, 8 ]
console.log(newArray); // [ 1, 2, 3, 4, 5, 6, 7, 8, 'Yesenia' ] */

/* const person = {
  name: "Taylor",
  sayHello() {
    return `Hello! my name is ${this.name}.`;
  },
};

console.log(person.sayHello()); */

//función constructora
/* function Animal(name, gender) {
  this.name = name;
  this.gender = gender;

  this.sayName = function () {
    console.log(`Hello!, mi name is ${this.name}`);
  };

  this.sayGender = function () {
    console.log(`Hello!, I am a ${this.gender}`);
  };
}
const dog = new Animal("blanca", "hembra");
console.log(dog); */

//Herencia prototípica
/* function Animal(name, gender) {
  this.name = name;
  this.gender = gender;
}

Animal.prototype.sayName = function () {
  console.log(`Hello!, mi name is ${this.name}`);
};

Animal.prototype.sayGender = function () {
  console.log(`Hello!, I am a ${this.gender}`);
};

//Esta función hereda las características de su padre
function Perro(name, gender, size) {
  this.super = Animal;
  this.super(name, gender);
  this.size = size;
}

// Esta es una nueva instancia de la función constructora Animal
Perro.prototype = new Animal();

//Acá le asignamos su proio constructor a perro

Perro.prototype = Perro;

//Puedo usar los métodos de Animal y sobre escribirlos
Perro.prototype.sayName = function () {
  console.log(`I am a dog and my name is ${this.name}`);
};

let dog = new Perro("Niña", "Hembra", "Big");
dog.sayName();

Perro.prototype.saySize = function () {
  console.log(`I am ${this.size}`);
};

dog.saySize(); */

//Clases

/* class Animal {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
  sayGender() {
    console.log(`Hello!, I am a ${this.gender}`);
  }
  sayName() {
    console.log(`Hello!, mi name is ${this.name}`);
  }
}

const dog = new Animal("niña", "hembra");
const cat = new Animal("mono", "macho");

dog.sayName();
cat.sayName();

class Dog extends Animal {
  constructor(name, gener, breedOfDog) {
    super(name, gener);
    this.breedOfDog = breedOfDog;
  }
  sayGender() {
    console.log(`Hello!, I am a ${this.gender}`);
  }
  sayName() {
    console.log(`Hello!, mi name is ${this.name}`);
  }
  myBreed() {
    console.log(`I am a ${this.breedOfDog}`);
  }
}

const tuto = new Dog("Tuto", "macho", "cocker spaniel")

tuto.myBreed()
tuto.sayName()
 */

//Object.create()

/* const person = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human ? ${this.isHuman}`);
  },
};

const me = Object.create(person);
me.name = "Yesenia";
me.isHuman = true;

me.printIntroduction();

const sister = Object.assign(me);

Object.keys(sister);

const sister2 = Object.assign(person);

Object.keys(sister2); */

const arrayQuotes = [
  {
    quote:
      'Life is not about getting and having, it is about giving and being.',
    author: 'Kevin Kruse',
  },
  {
    quote: 'Whatever the mind of man can conceive and believe, it can achieve.',
    autor: 'Napoleon Hill',
  },
  {
    quote: 'Strive not to be a success, but rather to be of value.',
    author: 'Albert Einstein',
  },
  {
    quote:
      'Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.',
    author: 'Robert Frost',
  },
  {
    quote: 'I attribute my success to this: I never gave or took any excuse.',
    author: 'Florence Nightingale',
  },
  {
    quote: 'You miss 100% of the shots you do not take.',
    author: 'Wayne Gretzky',
  },
  {
    quote:
      'The most difficult thing is the decision to act, the rest is merely tenacity.',
    author: 'Amelia Earhart',
  },
  {
    quote: 'Every strike brings me closer to the next home run.',
    author: 'Babe Ruth',
  },
  {
    quote: 'Definiteness of purpose is the starting point of all achievement.',
    author: 'W. Clement Stone',
  },
  {
    quote: 'We must balance conspicuous consumption with conscious capitalism.',
    author: 'Kevin Kruse',
  },
];

class Quotes {
  constructor() {
    this.state = {
      arrayQuotesIndex: 0,
    };
  }
  onClickQuotes() {
    let randomIndex = Math.floor(
      Math.random() * (arrayQuotes.length - 1 - 0 + 1) + 0
    );
    this.state = { arrayQuotesIndex: randomIndex };
  }
  showQuotes() {
    console.log('yesenia');
    console.log(arrayQuotes[this.state.arrayQuotesIndex]);
  }
}

let quote = new Quotes();
console.log(quote.onClickQuotes());
console.log(quote.showQuotes());
