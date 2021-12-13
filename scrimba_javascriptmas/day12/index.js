const input = document.getElementById("input");
const btn = document.getElementById("btn");
let guestList = document.getElementById("guest-list");
let guests = [
  "Partner",
  "Nice Relative 1",
  "Nice Relative 2",
  "Evil Relative",
  "Lonely Neighbour"
];

// Tasks:
// - Write the JS to render the Christmas day guest list in the guest-list element.
// - Add the functionality to add new guests.

// function addGuest(guest) {
//     guests.forEach(guest => {
//         const li = document.createElement("li");
//         li.innerText = guest;
//         guestList.appendChild(li)
//     })
// }

function addGuest() {
  let listItems = "<li>Me</li><li>Cat</li>";
  for (let i = 0; i < guests.length; i++) {
    listItems += `<li>${guests[i]}</li>`;
    guestList.innerHTML = listItems;
  }
}

btn.addEventListener("click", function () {
  guests.push(input.value);
  addGuest();
});

addGuest();

// function render() {
//     let listItems = "<li>Me</li><li>Cat</li>"
//     for (let i=0; i<guests.length; i++) {
//     listItems += `<li>${guests[i]}</li>`
//     guestList.innerHTML = listItems
// }
// }

// <div id="projects"></div>

// Stretch goals:
// - Add a button to remove the most recently added guests.
// - What about if you want to remove the evil relative?
