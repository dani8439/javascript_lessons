const meter = document.getElementById("meter");
const today = new Date().getDate();

// Task:
// Write a function to wire up the festivity loader to reflect how many days are remaining until Christmas!

function displayMeterValue() {
  meter.setAttribute("value", today);
}

displayMeterValue();

// function showChristmas() {
//   const christmas = new Date("December 25, 2021");
//   const c = christmas.getDate();
//   const today = new Date();
//   const t = today.getDate();
//   meter.value = c - t;
//   /// to get the percentage it should be ((c - t)/ 25) * 100
// }

// showChristmas();

// Stretch goals:
// - Animate the loader.
// - Change the colors depending on the meter's value.
