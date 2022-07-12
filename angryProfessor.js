/*A Discrete Mathematics professor has a class of students. 
Frustrated with their lack of discipline, the professor decides to 
cancel class if fewer than some number of students are present when 
class starts. Arrival times go from on time (arrivalTime <= 0) 
to arrived late (arrivalTime > 0).

Given the arrival time of each student and a threshhold number of attendees,
determine if the class is cancelled. */

let a = [-1, -3, 4, 2];
let k = 3;

function angryProfessor(k, a) {
  let arrivalCounterOnTime = 0;

  for (let counter = 0; counter < a.length; counter++) {
    if (a[counter] <= 0) {
      arrivalCounterOnTime++;
    }
  }

  if (arrivalCounterOnTime >= k) {
    return "Class is not canceled";
  } else {
    return "The class is canceled";
  }
}

let desition = angryProfessor(k, a);

console.log(desition);
