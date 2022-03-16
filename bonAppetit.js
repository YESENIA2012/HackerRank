let bill = [3, 10, 2, 9];
let k = 1;
let b = 7;
function bonAppetit(bill, k, b) {
  let sumPriceDish = 0;

  for (let counter = 0; counter < bill.length; counter++) {
    let priceDish = bill[counter];
    sumPriceDish = sumPriceDish + priceDish;
  }

  let payAna = (sumPriceDish - bill[k]) / 2;
  let payBrian = payAna + bill[k];
  let giveAnnaBack = Math.floor(payBrian - b);

  if (giveAnnaBack <= 0 || payAna == b) {
    console.log("Bon Appetit");
  } else {
    console.log(giveAnnaBack);
  }
}
bonAppetit(bill, k, b);
