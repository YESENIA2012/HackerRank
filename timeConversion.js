var s = "07:05:45PM";
function timeConversion(s) {
  // Write your code here
  let hora = s[0] + s[1];
  let min = s[3] + s[4];
  let sec = s[6] + s[7];
  let t = s[8] + s[9];
  let horaConverInt = parseInt(hora);
  let horaM = 0;

  if (t == "AM") {
    if (horaConverInt == 12) {
      horaM = "00";
    } else if (horaM < 10) {
      horaM = "0" + horaConverInt;
    } else {
      horaM = horaConverInt;
    }
  } else if (t == "PM") {
    if (horaConverInt == 12) {
      horaM = horaConverInt;
    } else {
      horaM = horaConverInt + 12;
    }
  }
  let horaS = String(horaM);

  return horaM + ":" + min + ":" + sec;
}

var horaM = timeConversion(s);
console.log(horaM);
