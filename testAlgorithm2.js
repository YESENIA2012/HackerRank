/*We are making the final adjustments to Santa's sleigh!
As you already know. the sled is flying and we are adjusting the motor so that it makes parabolas 
as optimal as possible. For this, the jump must always be upwards and, from the highest 
point, it must always go downwards.
Our trusted mechanic, Alexander, who has a great Tesla, has explained to us that the jumps can 
be seen as arrays... and that we just have to make sure that the numbers go up and down 
correctly. He also warns us that we will only pass arrays of at least three positions
Make an algotithm that receives in the console a text with values (separate by commans) and prints 
true in the console if tye values go up and down strictly, otherwise it prints false */
/* let data = '1,2,3' */

let data = "1,2,3";
let arrayData = data.split(",");

if (arrayData.length < 3) {
  console.log(false);
} else {
  let counterUploads = 0;

  for (let counter = 0; counter < arrayData.length; counter++) {
    if (parseInt(arrayData[counter]) < parseInt(arrayData[counter + 1])) {
      counterUploads++;
    }
  }

  if (counterUploads == arrayData.length - 1) {
    console.log(false);
  } else {
    let counterDowns = 0;

    for (let counter = 2; counter < arrayData.length; counter++) {
      if (parseInt(arrayData[1]) > parseInt(arrayData[counter])) {
        counterDowns++;
      }
    }

    if (counterDowns == arrayData.length - 2) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
}
