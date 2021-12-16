const ageSelector = document.getElementById("age-selector");
const genreSelector = document.getElementById("genre-selector");

const btn = document.getElementById("btn");
const suggestedMovie = document.getElementById("suggested-movie");

const moviesArr = [
  {
    name: "Die Hard",
    age: "18+",
    genre: "Action"
  },
  {
    name: "Love Actually",
    age: "18+",
    genre: "Romance"
  },
  {
    name: "The Polar Express",
    age: "PG",
    genre: "Action"
  },
  {
    name: "Shrek",
    age: "PG",
    genre: "Romance"
  }
];

btn.addEventListener("click", () => {
  const age = ageSelector.value;
  const genre = genreSelector.value;
  for (let i = 0; i < moviesArr.length; i++) {
    if (moviesArr[i].age === age) {
      if (moviesArr[i].genre === genre) {
        suggestedMovie.textContent = moviesArr[i].name;
      }
    }
  }
});

// Task:
// - Write a function to select a suitable movie based on the age group and genre provided.
//  - Display it in the suggested-movie paragraph when the button is clicked.

// Stretch goals:
// - Have the function run on each change of the <select> tags.
// - Add more movies/complexity - for example black and white vs color, preferred actors, etc.
