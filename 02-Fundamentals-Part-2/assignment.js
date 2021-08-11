// function describeCountry(country, population, capitalCity) {
//   return `${country} has ${population} million people and its capital city is ${capitalCity}`;
// }

// const nigeria = describeCountry("Nigeria", 202, "Abuja");
// const japan = describeCountry("Japan", 126, "Tokyo");
// const england = describeCountry("England", 55, "London");
// console.log(nigeria);
// console.log(japan);
// console.log(england);

// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }

// const nigeria = percentageOfWorld1(202);
// console.log(nigeria);
// const japan = percentageOfWorld1(126);
// console.log(japan);
// const england = percentageOfWorld1(55);
// console.log(england);

// const calcPopulation = function (population) {
//   return (population / 7900) * 100;
// };

// const nigeriaPop = calcPopulation(202);
// console.log(nigeriaPop);

// const japanPop = calcPopulation(126);
// console.log(japanPop);

// const englandPop = calcPopulation(55);
// console.log(englandPop);

// const percentageOfWorld3 = (population) => (population / 7900) * 100;

// const nigeriaPop = percentageOfWorld3(202);
// console.log(nigeriaPop);

// const japanPop = percentageOfWorld3(126);
// console.log(japanPop);

// const englandPop = percentageOfWorld3(55);
// console.log(englandPop);

// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }

// function describePopulation(country, population) {
//   const percentage = percentageOfWorld1(population);
//   return `${country} has ${population} million people, which is about ${percentage}% of the world`;
// }

// console.log(describePopulation("Nigeria", 202));
// console.log(describePopulation("Japan", 126));
// console.log(describePopulation("England", 55));

///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolphins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.
TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉
GOOD LUCK 😀
*/

/// const calcAverage = (a, b, c) => (a + b + c) / 3;

/*

const calcAverage = (score1, score2, score3) => {
  const averageScore = (score1 + score2 + score3) / 3;
  console.log(averageScore);
  return averageScore;
};

// Test 1
// let avgDolphins = calcAverage(44, 23, 71);
// let avgKoalas = calcAverage(65, 54, 49);

// Test 2
let avgDolphins = calcAverage(85, 54, 41);
let avgKoalas = calcAverage(23, 34, 27);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins...");
  }
}

checkWinner(avgDolphins, avgKoalas);
// checkWinner(576, 111);

*/

// const populations = [126, 202, 55, 328];

// console.log(populations.length === 4);

// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }

// const percentages = [
//   percentageOfWorld1(populations[0]),
//   percentageOfWorld1(populations[1]),
//   percentageOfWorld1(populations[2]),
//   percentageOfWorld1(populations[populations.length - 1])
// ];

// console.log(percentages);

// const neighbors = ["France", "Switzerland", "Austria", "Slovenia"];
// console.log(neighbors);
// neighbors.push("Utopia");
// console.log(neighbors);
// neighbors.pop();
// console.log(neighbors);
// if (!neighbors.includes("Germant")) {
//   console.log("Probably not a central European country :D");
// }

// console.log(neighbors.indexOf("Slovenia"));
// neighbors[3] = "Republic of Slovenia";
// console.log(neighbors);

// const myCountry = {
//   country: "Italy",
//   capital: "Rome",
//   language: "Italian",
//   population: 60,
//   neighbors: ["France", "Switzerland", "Austria", "Slovenia"]
// };

// console.log(myCountry);
// console.log(
//   `${myCountry.country} has ${myCountry.population} million ${myCountry.language} speaking people, ${myCountry.neighbors.length} neighboring countries and a capital called ${myCountry.capital}`
// );

// myCountry.population += 2;
// console.log(myCountry.population);
// myCountry["population"] -= 2;
// console.log(myCountry.population);
