/* A video player plays a game in which the character competes in a hurdle race. Hurdles are of 
varying heights, and the characters have a maximum height they can jump. There is a magic potion 
they can take that will increase their maximum jump height by 1 unit for each dose. How many doses 
of the potion must the character take to be able to jump all of the hurdles. If the character can 
already clear all of the hurdles, return 0. */

let k = 47; // resultado debe dar 53
let height = [
  52, 99, 93, 84, 50, 64, 61, 87, 89, 97, 64, 69, 61, 90, 82, 53, 50, 63, 82,
  87, 76, 78, 75, 55, 80, 68, 75, 83, 69, 81, 95, 89, 60, 59, 90, 100, 90, 64,
  53, 60, 88, 93, 62, 50, 75, 77, 60, 93, 55, 79, 52, 47, 65, 74, 62, 60, 96,
  49, 73, 92, 79, 54, 100, 81, 63, 58, 75, 80, 89, 94, 52, 85, 57, 72, 97, 81,
  97, 66, 84, 77, 83, 94, 85, 68, 99, 54, 64, 83, 67, 84, 81, 65, 59, 89, 68,
  91, 60, 79, 74, 57,
];

function hurdleRace(k, height) {
  let counterPotion = 0;
  height.sort(function (a, b) {
    return a - b;
  });

  for (let counter = 0; counter < height.length; counter++) {
    let hundle = height[counter];

    if (hundle > k) {
      return height[height.length - 1] - k;
    }
  }

  return 0;
}

console.log(hurdleRace(k, height));
