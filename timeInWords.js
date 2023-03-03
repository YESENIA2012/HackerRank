/* Given the time in numerals we may convert it into words, as shown below: */
const h = 1;
const m = 1;

function timeInWords(h, m) {
  const tens = ["", "", "twenty", "thirty", "forty", "fifty"];
  const units = [
    "o' clock",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  let hour = null;
  let stringInPhrase = null;
  let minutesInWord = null;
  let minuteInPosition0 = null;
  let minuteInPosition1 = null;
  let timeInWords = null;

  if (m == 1) {
    stringInPhrase = " minute";
  } else {
    stringInPhrase = " minutes";
  }

  if (h <= 12 && h >= 0) {
    if (m > 30) {
      h = h + 1;
      hour = units[h];
    } else {
      hour = units[h];
    }
  }

  if (m <= 19 && m >= 0) {
    minuteInPosition0 = units[m];
  } else {
    if (m <= 29 && m > 19) {
      let arrayMinutes = m.toString();
      let firstNumberInMinutes = parseInt(arrayMinutes[0]);
      let secondNumberInMinutes = parseInt(arrayMinutes[1]);

      if (secondNumberInMinutes == 0) {
        minuteInPosition0 = tens[firstNumberInMinutes];
      } else {
        minuteInPosition0 = tens[firstNumberInMinutes];
        minuteInPosition1 = units[secondNumberInMinutes];
      }
    } else if (m >= 31) {
      let remainingMinutes = 60 - m;

      if (remainingMinutes >= 20) {
        remainingMinutes = remainingMinutes.toString();
        let firstNumberInMinutes = parseInt(remainingMinutes[0]);
        let secondNumberInMinutes = parseInt(remainingMinutes[1]);

        if (secondNumberInMinutes == 0) {
          minuteInPosition0 = tens[firstNumberInMinutes];
        } else {
          minuteInPosition0 = tens[firstNumberInMinutes];
          minuteInPosition1 = units[secondNumberInMinutes];
        }
      } else {
        minuteInPosition0 = units[remainingMinutes];
      }
    }
  }

  if (minuteInPosition1) {
    minutesInWord = `${minuteInPosition0} ${minuteInPosition1}`;
  } else {
    minutesInWord = `${minuteInPosition0}`;
  }

  if (m == 0) {
    timeInWords = hour + " " + minutesInWord;
  } else if (m == 30) {
    timeInWords = "half past " + hour;
  } else if (m <= 29 && m > 0 && m != 15) {
    timeInWords = minutesInWord + stringInPhrase + " past " + hour;
  } else if (m >= 29 && m != 45) {
    timeInWords = minutesInWord + stringInPhrase + " to " + hour;
  } else if (m == 45) {
    timeInWords = "quarter to " + hour;
  } else if (m == 15) {
    timeInWords = "quarter past " + hour;
  }

  return timeInWords;
}

console.log(timeInWords(h, m));
