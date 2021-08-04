/* 
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

// declaring a variable. Store in computer's memory.
let firstName = "Matilda";
console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.145;

// This is more descriptive than below.
let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);
*/

/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Jonas");

javascriptIsFun = "YES!";
console.log(javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);
*/

/*
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1998;

// this is not legal
// const job;

// the old way of defining variables
var job = "programmer";
job = "teacher";

// never write like this without declaring it.
lastName = "Schmedtmann";
console.log(lastName);
*/

/*
// Math Operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Jonas";
const lastName = "Schmedtmann";
// concatenation
console.log(firstName + " " + lastName);

// Assignment Operators
let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <. >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
*/

/*

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

// left to right operation
// console.log(25 - 10 - 5);

// assignment is a good example of right to left operation
let x, y;
x = y = 25 - 10 - 5; // x = y = 10; then only two operators left.
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
// if no parentheses, will divide first and then add.
console.log(ageJonas, ageSarah, averageAge);
*/

// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
GOOD LUCK 😀
*/

/*

const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;
console.log(markWeight, markHeight, johnWeight, johnHeight);
const markBMI = markWeight / markHeight ** 2;
console.log(markBMI);

const johnBMI = johnWeight / (johnHeight * johnHeight);
console.log(johnBMI);

const markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

// const markWeight = 95;
// const markHeight = 1.88;
// const johnWeight = 85;
// const johnHeight = 176;
// console.log(markWeight, markHeight, johnWeight, johnHeight);
*/

/*
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

// this can be kind of a pain.
const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}`;
console.log(jonasNew);
console.log(`Just a regular string...`);

// old way to write multiline strings;
console.log("String with \n\
multiple \n\
lines");

console.log(`String
multiple
lines`);
*/

/*

const age = 15;
// const isOldEnough = age >= 18;

//command control space to get to emojis.

if (age >= 18) {
  console.log("Sarah can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/
