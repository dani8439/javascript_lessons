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

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

function describePopulation(country, population) {
  const percentage = percentageOfWorld1(population);
  return `${country} has ${population} million people, which is about ${percentage}% of the world`;
}

console.log(describePopulation("Nigeria", 202));
console.log(describePopulation("Japan", 126));
console.log(describePopulation("England", 55));
