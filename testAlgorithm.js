/*
Consider an array of sheep. Each sheep has a name and color (separate by commas).
Make an algorithm that obtains the number of sheep and the name and color one and prints in the 
console the names of the sheep that are red whose name also contains the letters n and a, 
regardless of order, capitalization, or spaces.
Remember: It must contain the two letters n and a in the name. Do not count
sheep that only have one of the letters, it must have both 
*/

let sheepData = [
  { name: "Noah", color: "blue" },
  { name: "Euge", color: "red" },
  { name: "Ki Na Ma", color: "red" },
  { name: "bi ap na", color: "red" },
];
let counterSheep = 0;
let nameSheeps = [];

for (let counter = 0; counter < sheepData.length; counter++) {
  counterSheep++;
  let nameSheepLowerCase = sheepData[counter].name.toLocaleLowerCase();
  let colorSheep = sheepData[counter].color.toLocaleLowerCase();

  if (colorSheep == "red") {
    if (nameSheepLowerCase.includes("n") && nameSheepLowerCase.includes("a")) {
      nameSheeps.push(sheepData[counter].name);
    }
  }
}

console.log(nameSheeps); //Ki Na Ma
console.log(nameSheeps.length); // 3
