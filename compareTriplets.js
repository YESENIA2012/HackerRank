var a = [5, 6, 7];
var b = [3, 6, 10];

function compareTriplets(a, b) {
  var array = [];
  var pointsAlice = 0;
  var pointsBob = 0;
  for (var counter = 0; counter < a.length; counter++) {
    var elementArrayA = a[counter];

    for (var counter2 = 0; counter2 < b.length; counter2++) {
      var elementArrayB = b[counter2];

      if (counter == counter2) {
        if (elementArrayA > elementArrayB) {
          pointsAlice = pointsAlice + 1;
          console.log(pointsAlice);
        }
        if (elementArrayA < elementArrayB) {
          pointsBob = pointsBob + 1;
          console.log(pointsBob);
        }
        if (elementArrayA == elementArrayB) {
          pointsAlice = pointsAlice;
          pointsBob = pointsBob;
        }
      }
    }
  }
  array = [pointsAlice, pointsBob];
  return array;
}
