/*scheduleMeeting(..) should take a start time (in 24-hour format as a string "hh:mm") and a meeting duration 
(number of minutes). It should return true if the meeting falls entirely within the work day (according to the
times specified in dayStart and dayEnd); return false if the meeting violates the work day bounds. */

const dayStart = "07:30";
const dayEnd = "17:45";
const startTime = "17:30";
const durationMinutes = 30;

function scheduleMeeting(startTime, durationMinutes) {
  let hourDayStart = Number(dayStart[0] + dayStart[1]);
  let minutesDayStart = Number(dayStart[3] + dayStart[4]);

  let hourDayEnd = Number(dayEnd[0] + dayEnd[1]);
  let minutesDayEnd = Number(dayEnd[3] + dayEnd[4]);

  let hourStartMeet = Number(startTime[0] + startTime[1]);
  let minutesStartMeet = Number(startTime[3] + startTime[4]);

  let hourMeetEnd = hourStartMeet;
  let minutesMmeetEnd = minutesStartMeet + durationMinutes;

  if (minutesMmeetEnd >= 60) {
    minutesMmeetEnd = minutesMmeetEnd - 60;
    hourMeetEnd = hourStartMeet + 1;
  }

  if (hourStartMeet <= hourDayStart && minutesStartMeet < minutesDayStart) {
    return false;
  } else if (
    hourStartMeet >= hourDayStart &&
    hourStartMeet <= hourDayEnd &&
    hourMeetEnd <= hourDayEnd
  ) {
    if (
      minutesStartMeet >= minutesDayStart &&
      minutesMmeetEnd <= minutesDayEnd
    ) {
      return true;
    } else if (
      minutesStartMeet <= minutesDayStart &&
      minutesMmeetEnd <= minutesDayEnd
    ) {
      return true;
    }
  } else {
    return false;
  }
}

console.log(scheduleMeeting(startTime, durationMinutes));
