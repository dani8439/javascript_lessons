// const country = "United States of America";
// const continent = "North America";
// let population = 382;
// const language = "english";
// const isIsland = true;

// console.log(country);
// console.log(continent);
// console.log(population);

// const isIsland = false;
// const language = "English";
// console.log(isIsland);
// console.log(population);
// console.log(country);
// console.log(language);

// // language = "Spanish";

// const halvedPopulation = population / 2;
// console.log(halvedPopulation);
// console.log((population += 1));

// const finlandPopulation = 6000000;
// console.log(population > finlandPopulation);

// const averagePopulation = 33000000;
// console.log(population < averagePopulation);

// const description =
//   "Portugal is in Europe, and its 11 million people speak portuguese.";
// console.log(description);

// const description = `Portugal is in Europe, and it's 11 million people speak portuguese.`;
// console.log(description);

// if (population > 33) {
//   console.log("The US's population is above average");
// } else {
//   console.log(
//     `The US's population is ${33 - population} million below average.`
//   );
// }

// console.log("9" - "5"); // 4
// console.log("19" - "13" + "17"); // 617
// console.log("19" - "13" + 17); // 23
// console.log("123" < 57); // false
// console.log(5 + 6 + "4" + 9 - 4 - 2); // 18 -- No, it's 1143. 5+6 = 11 + '4' = 114. 9-4-2 = 3 114+3 = 1143

// const numNeighbors = prompt(
//   "How many neighbour countries does your country have?"
// );

// const numNeighbors = Number(
//   prompt("How many neighbour countries does your country have?")
// );

// if (numNeighbors === 1) {
//   console.log("Only 1 border!");
// } else if (numNeighbors > 1) {
//   console.log("More than 1 border");
// }

// if (language === "english" && population < 50 && !isIsland) {
//   console.log(`You should live in ${country} :)`);
// } else {
//   console.log(`${country} does not meet your criteria :(`);
// }

const language = "chinese";

switch (language) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
}
