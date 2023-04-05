"use strict";

let dolphinsAverage = [44, 23, 71];
let koalasAverage = [65, 54, 49];

const calcAverage = (values) => {
  return (
    values.reduce(function (a, b) {
      return a + b;
    }) / 3
  );
};

const avgDolphins = calcAverage(dolphinsAverage);
const avgKoalas = calcAverage(koalasAverage);

const checkWinner = (avgDolphins, avgKoalas) => {
  let result =
    avgDolphins > 2 * avgKoalas
      ? `Dolphin's win (${avgDolphins} vs. ${avgKoalas})`
      : `Koala's win (${avgKoalas} vs. ${avgDolphins})`;

  console.log(result);
};

checkWinner(avgDolphins, avgKoalas);
