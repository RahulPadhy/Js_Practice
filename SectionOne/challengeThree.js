let dolphinsScoreValuesOne = [96, 108, 89];
// let dolphinsScoreTwo = 108;
// let dolphinsScoreThree = 89;

let koalasScoreValuesOne = [88, 91, 110];
// let koalasScoreTwo = 91;
// let koalasScoreThree = 110;

let dolphinsAverage =
  dolphinsScoreValuesOne.reduce(function (a, b) {
    return a + b;
  }, 0) / 3;
let koalasAverage =
  koalasScoreValuesOne.reduce(function (a, b) {
    return a + b;
  }, 0) / 3;

console.log(Number(dolphinsAverage.toFixed(2)));
console.log(Number(koalasAverage.toFixed(2)));

if (
  Number(dolphinsAverage.toFixed(2)) > Number(koalasAverage.toFixed(2)) &&
  Number(dolphinsAverage.toFixed(2)) >= 100 &&
  Number(koalasAverage.toFixed(2)) >= 100
) {
  console.log(`Dolphins Won the match`);
} else if (
  Number(dolphinsAverage.toFixed(2)) < Number(koalasAverage.toFixed(2)) &&
  Number(dolphinsAverage.toFixed(2)) >= 100 &&
  Number(koalasAverage.toFixed(2)) >= 100
) {
  console.log(`Koalas won the match`);
} else if (
  Number(dolphinsAverage.toFixed(2)) == Number(koalasAverage.toFixed(2)) &&
  Number(dolphinsAverage.toFixed(2)) >= 100 &&
  Number(koalasAverage.toFixed(2)) >= 100
) {
  console.log(`Its a draw!!`);
} else {
  console.log("No team won the trophy");
}
