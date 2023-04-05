"use strict";

let marksMass = 78;
let marksHeight = 1.69;

let jhonsMass = 92;
let jhonsHeight = 1.95;

let jhonsBMI = jhonsMass / jhonsHeight ** 2;
let marksBMI = marksMass / marksHeight ** 2;

let markHigherBMI =
  jhonsBMI > marksBMI
    ? `Jhon's BMI (${jhonsBMI.toFixed(2)}) is greater than Marks`
    : `Mark's BMI (${marksBMI.toFixed(2)}) is greater than Jhons`;

console.log(jhonsBMI);
console.log(marksBMI);
console.log(markHigherBMI);
