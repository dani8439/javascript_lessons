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

// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:
1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"
HINT: Use an if/else statement 😉
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

if (markBMI > johnBMI) {
  console.log(
    `Mark's BMI (${Math.round(markBMI)}) is higher than John's (${Math.round(
      johnBMI
    )})!`
  );
} else {
  console.log(
    `John's BMI (${Math.round(johnBMI)}) is higher than Mark's (${Math.round(
      markBMI
    )})!`
  );
}
*/

/*

// type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear); // doesn't mutate the original.
console.log(Number(inputYear) + 18);

// What about converting something to a number that's impossible to convert?
console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log("I am " + 23 + " years old.");
console.log("I am " + "23" + " years old.");
// the two above are essentially the same.

console.log("23" - "10" - 3);
console.log("23" * "2");
console.log("23" > "18");

let n = "1" + 1; // string '11'
n = n - 1; // with minus operator, converts string to number.
console.log(n);

let x = 2 + 3 + 4 + "5";
console.log(x);

let y = "10" - "4" - "3" - 2 + "5";
console.log(y);
*/

/*

// 5 falsy values: 0, '', undefined, null, NaN. False is already false.
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 0;
// tries to coerce any value into a boolean. 0 is false, so first block doesn't execute.
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!");
}

let height = 0;
// 0 triggers undefined, but it's kind of a bug. As we've defined height.
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}
*/

/*

const age = "18";
// don't need curly braces if writing one block of code
if (age === 18) console.log("You just became an adult :D (strict)");

if (age == 18) console.log("You just became an adult :D (loose)");

const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite); // prints out as a string
console.log(typeof favorite);

// because using the double equals, the string '23' is coerced into a number.
// string equality won't work. So have to convert string to a number. So it becomes 23 === 23 which is true.
if (favorite === 23) {
  console.log("Cool! 23 is an amazing number!");
} else if (favorite === 7) {
  console.log("7 is also a cool number");
} else if (favorite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number is not 23 or 7 or 9");
}

// can chain if together with else if, before going into the else block.

// there is an operator for different.
if (favorite !== 23) console.log("Why not 23?");
*/

/*
const hasDriversLicense = true; //A
const hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if (hasDriversLicense && hasGoodVision) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }


const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

// if isTired is true, !isTired is false, whole statement evaluates to false.
if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}
*/

////////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).
3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.
TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
GOOD LUCK 😀
*/

// const dolphinsAverage = (96 + 109 + 89) / 3;
// const koalasAverage = (88 + 91 + 100) / 3;
// console.log(dolphinsAverage, koalasAverage);

// if (dolphinsAverage > koalasAverage) {
//   console.log("The Dolphins are the winner 🏆!");
// } else if (dolphinsAverage < koalasAverage) {
//   console.log("The Koalas are the winner 🏆!");
// } else {
//   console.log(`It's a tie 🏆!`);
// }

// Bonus 1
// const dolphinsAverage = (97 + 112 + 101) / 3;
// const koalasAverage = (109 + 95 + 123) / 3;
// console.log(dolphinsAverage, koalasAverage);

// if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
//   console.log("The Dolphins are the winner 🏆!");
// } else if (dolphinsAverage < koalasAverage && koalasAverage >= 100) {
//   console.log("The Koalas are the winner 🏆!");
// } else {
//   console.log(`It's a tie 🏆!`);
// }

// Bonus 2
// const dolphinsAverage = (97 + 112 + 101) / 3;
// const koalasAverage = (109 + 95 + 106) / 3;
// console.log(dolphinsAverage, koalasAverage);

// if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
//   console.log("The Dolphins are the winner 🏆!");
// } else if (dolphinsAverage < koalasAverage && koalasAverage >= 100) {
//   console.log("The Koalas are the winner 🏆!");
// } else if (
//   dolphinsAverage === koalasAverage &&
//   dolphinsAverage >= 100 &&
//   koalasAverage >= 100
// ) {
//   console.log("Both win the trophy!");
// } else {
//   console.log(`No one wins the trophy 😭!`);
// }

/*

const day = "wednesday";

switch (day) {
  case "monday": // day === 'monday'
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend :D");
    break;
  default:
    console.log("Not a valid day!");
}

// rewrite as if/else statement
if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend :D");
} else {
  console.log("Not a valid day!");
}
*/
