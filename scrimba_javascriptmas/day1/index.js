const countdownDisplay = document.getElementById("countdown-display");

function renderCountdown() {
  const christmas = 25;
  // Task:
  // - Get today's date (you only need the day).
  const day = new Date().getDate();
  console.log(day);
  // - Calculate remaining days.
  const daysTill = christmas - day - 1;
  // - Display remaining days in countdownDisplay.
  countdownDisplay.innerHTML = daysTill;
}

renderCountdown();

// Stretch goals:
// - Display hours, minutes, seconds.
// - Add a countdown for another festival, your birthday, or Christmas 2022.
