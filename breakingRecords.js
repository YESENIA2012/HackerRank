let scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];

function breakingRecords(scores) {
  let timeBrokeRecords = [];
  let arrayScoresMin = [];
  let arrayScoresMax = [];

  for (let counterScores = 0; counterScores < scores.length; counterScores++) {
    let elementScores = scores[counterScores];
    let scoreMinimun = scores[0];
    if (elementScores < scoreMinimun) {
      arrayScoresMin.push(elementScores);
    } else if (elementScores > scoreMinimun) {
      arrayScoresMax.push(elementScores);
    }
  }

  let scoreMinimum2 = scores[0];
  var counterMin = 0;
  for (let counter = 0; counter < arrayScoresMin.length; counter++) {
    let elementScoreMin = arrayScoresMin[counter];

    if (elementScoreMin < scoreMinimum2) {
      scoreMinimum2 = elementScoreMin;
      counterMin++;
    }
  }
  let score2 = 0;
  var counterMax = 0;
  for (let counter2 = 0; counter2 < arrayScoresMax.length; counter2++) {
    let elementScoreMax = arrayScoresMax[counter2];

    if (elementScoreMax > score2) {
      score2 = elementScoreMax;
      counterMax++;
    }
  }
  timeBrokeRecords = [counterMax, counterMin];
  return timeBrokeRecords;
}

var records = breakingRecords(scores);
console.log(records);
