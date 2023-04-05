"use strict";

let billValue = 275;

// Trial
// if (billValue >= 50 && billValue <= 275) {
//   tip = billValue * 0.15;
// } else {
//   tip = billValue * 0.2;
// }

// Final

let tip =
  billValue >= 50 && billValue <= 275 ? billValue * 0.15 : billValue * 0.2;

console.log(
  `The bill was ${billValue}, the tip was ${tip}, and the total value ${
    billValue + tip
  }`
);
