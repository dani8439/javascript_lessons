const btn = document.getElementById("btn");
let food = document.getElementById("food");

let guests;
let vegetarian;

const meal = function (guests, vegetarian) {
  if (vegetarian) {
    food.innerText = "nut roast";
  } else if (guests <= 4) {
    food.innerText = "turkey";
  } else {
    food.innerText = "goose";
  }
};

btn.addEventListener("click", function () {
  guests = document.getElementById("num-input");
  vegetarian = document.getElementById("vegetarian-input");
  meal(guests.value, vegetarian.checked);
});

// Tasks:
// - Write the JS to decide the perfect Christmas dinner and render it in the result element. Don't forget to check whether the meal should be vegetarian!

// Dinner suggestions (or choose your own!):
// Vegetarian: nut roast
// 4 people or less: turkey
// 5+ people: goose

// Stretch goals:
// - Add more dietary options.
// - Show recipes when the meal has been selected.
