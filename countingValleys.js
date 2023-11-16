/*An avid hiker keeps meticulous records of his hikes. During the last walk that took exactly steps steps, for each step it was noted whether it was an uphill step, U, or a downhill step, D. Walks always begin and end at sea level, and each up or down step represents a change of 1 unit of altitude. We define the following terms:

A mountain is a sequence of consecutive steps above sea level, beginning with a step up from sea level and ending with a step down to sea level.
A valley is a sequence of consecutive steps below sea level, beginning with a step down from sea level and ending with an up step to sea level.
Given the sequence of steps up and down during a walk, find and print the number of valleys through which it passed. */

let path = "UDUUUDUDDD";
let steps = path.length;

function countingValleys(steps, path) {
  let altitude = 0;
  let valleys = 0;

  for (let counter = 0; counter < steps; counter++) {
    if (path[counter] === "U") {
      altitude++;
    } else if (path[counter] === "D") {
      altitude--;
    }

    if (altitude === 0 && path[counter] === "U") {
      valleys++;
    }
  }

  return valleys;
}

console.log(countingValleys(steps, path));
