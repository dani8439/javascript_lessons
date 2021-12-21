const niceList = document.getElementById("nice-list");
const naughtyList = document.getElementById("naughty-list");
const btn = document.getElementById("btn");
// btn.addEventListener("click", sort)

const sorteesArr = [
  {
    name: "David",
    hasBeenGood: false
  },
  {
    name: "Del",
    hasBeenGood: true
  },
  {
    name: "Valerie",
    hasBeenGood: false
  },
  {
    name: "Astrid",
    hasBeenGood: true
  }
];

const createListItem = (sortee) => {
  return `<li>${sortee.name}</li>`;
};

btn.addEventListener("click", () => {
  sorteesArr.forEach((sortee) => {
    sortee.hasBeenGood
      ? (niceList.innerHTML += createListItem(sortee))
      : (naughtyList.innerHTML += createListItem(sortee));
  });
});

// Scrimba solution
// function sort() {
//   let niceListPeeps = sorteesArr.filter(function (el) {
//     return el.hasBeenGood === true;
//   });

//   let naughtyListPeeps = sorteesArr.filter(function (el) {
//     return el.hasBeenGood === false;
//   });

//   for (let i = 0; i < niceListPeeps.length; i++) {
//     let listItems = "";
//     listItems += `<li>${niceListPeeps[i].name}</li>`;
//     niceList.innerHTML += listItems;
//   }

//   for (let i = 0; i < naughtyListPeeps.length; i++) {
//     let listItems = "";
//     listItems += `<li>${naughtyListPeeps[i].name}</li>`;
//     naughtyList.innerHTML += listItems;
//   }
// }

// Task:
// - Write the JavaScript to sort the people in sorteesArr into the naughty and nice lists, according to whether they have been good or not. Then display the names in the relevant place in the DOM.

// Stretch goals:
// - Add the option to add new names to the sorteesArr.
// - Make it possible to switch people to the other list.
