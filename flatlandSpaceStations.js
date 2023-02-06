/*Flatland is a country with a number of cities,
some of which have space stations. Cities are numbered consecutively and each has a road of 1km length 
connecting it to the next city. It is not a circular route, so the first 
city doesn't connect with the last city. Determine the maximum distance from any city to its nearest space station. */

let n = 3;
let c = [1];

function flatlandSpaceStations(n, c) {
  let newArray = [];
  let maxDistance = null;

  for (let counter = 0; counter < n; counter++) {
    let elementN = counter;
    let arrayDistance = [];

    for (let counter2 = 0; counter2 < c.length; counter2++) {
      let elementC = c[counter2];

      if (!isNaN(elementC)) {
        let result = Math.abs(elementN - elementC);
        arrayDistance.push(result);
      }
    }

    let distanceMin = Math.min(...arrayDistance);
    newArray.push(distanceMin);
  }

  maxDistance = newArray.reduce((a, b) => Math.max(a, b), -Infinity);
  return maxDistance;
}

console.log(flatlandSpaceStations(n, c));
