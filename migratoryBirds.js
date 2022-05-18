let arr = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4];

function migratoryBirds(arr) {
  let newArray = arr.sort(function (a, b) {
    return a - b;
  });

  let objectBirds = {};
  let counter = 0;
  let species = "";

  arr.map((typeBird) => {
    let counterType = 0;
    if (objectBirds.hasOwnProperty(typeBird)) {
      counterType = objectBirds[typeBird] + 1;
      objectBirds[typeBird] = counterType;
    } else {
      objectBirds[typeBird] = 1;
    }
    if (counterType > counter) {
      counter = counterType;
      species = typeBird;
    }
    console.log(objectBirds);
    console.log(counter);
    console.log(counterType);
  });

  return species;
}

console.log(migratoryBirds(arr));
