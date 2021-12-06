const greeting = document.getElementById("greeting");
const btn = document.getElementById("btn");

function fix() {
  // Task:
  // - Write a function to fix the UI problems with this Christmas message (make it Christmassy!)
  // - Run the function when the Fix button is clicked.
  greeting.innerHTML = "<p>🎄🎁Merry Christmas!🎁🎄</span></p>";
}

btn.addEventListener("click", () => {
  fix();
  console.log("clicked");
});

//Stretch goals:
// - Add an extra theme, and the option to switch between them.
// - Change the message and theme to a New Year’s one automatically on December 31st.
