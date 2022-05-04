let b = 60;
let keyboards = [40, 50, 60];
let drives = [5, 8, 12];

function getMoneySpent(keyboards, drives, b) {
  let pricesKit = [];

  for (let counter = 0; counter < keyboards.length; counter++) {
    let priceKeyboardUnit = keyboards[counter];

    for (let counter2 = 0; counter2 < drives.length; counter2++) {
      let priceDriveUnit = drives[counter2];

      if (priceKeyboardUnit < b) {
        let priceKit = priceKeyboardUnit + priceDriveUnit;

        if (priceKit <= b) {
          pricesKit.push(priceKit);
        }
      }
    }
  }
  pricesKit.sort(function (a, b) {
    return a - b;
  });
  if (pricesKit.length == 0) {
    return -1;
  } else {
    return pricesKit[pricesKit.length - 1];
  }
}

console.log(getMoneySpent(keyboards, drives, b));
