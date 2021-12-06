const greeting = document.getElementById("greeting");
const christmassifierBtn = document.getElementById("christmassifierBtn");
christmassifierBtn.addEventListener("click", christmassifyName);

function christmassifyName() {
  if (!greeting.classList.contains("christmassified")) {
    greeting.className += "christmassified";
    christmassifierBtn.textContent = "De-christmassify";
  } else {
    greeting.classList.remove("christmassified");
    christmassifierBtn.textContent = "Christmassify";
  }
  // Task:
  // - Add christmassify class to greeting.
  //- Check whether christmassifierBtn has christmassify on it. If so, change text to "De-christmassify", if not, change text to "Christmassify"
}

const url = "https://www.youtube.com/watch?v=aAkMkVFwAoo";

function playAudio(url) {
  new AudioBuffer(url);
}

// Stretch goals:
// - Play Christmas music when Christmas class is added.
// - Remove the Christmas class after a given time.
