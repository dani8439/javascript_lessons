const playBtn = document.getElementById("play-btn");
const pauseBtn = document.getElementById("pause-btn");
const stopBtn = document.getElementById("stop-btn");
const audio = new Audio("bells.mp3");
const bell = document.getElementById("bell");
playBtn.addEventListener("click", play);
pauseBtn.addEventListener("click", pause);
stopBtn.addEventListener("click", stop);

// const running = bell.style.animationPlayState === 'running';

function play() {
  bell.className = "animate";
  audio.play();
}

function pause() {
  bell.classList.remove("animate");
  // bell.style.animationPlayState = 'paused'
  // bell.style.animationPlayState = running ? 'paused' : 'running'
  audio.pause();
}

function stop() {
  bell.classList.remove("animate");
  audio.pause();
  audio.currentTime = 0;
}

// Task:
// - Animate the bell so that it looks like it is ringing when the music is playing, and stops when the music is paused or stopped.

//NB: You'll need to make changes in the CSS too 😉

// Stretch goal:
// - Make sure the animation doesn't reset when paused.
