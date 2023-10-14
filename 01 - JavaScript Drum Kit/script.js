const playDrum = function (event) {
  const audio = document.querySelector(`audio[key='${event.code}']`);
  const key = document.querySelector(`.key[key='${event.code}']`);

  if (!audio) return; // stop the function from running all together
  audio.currentTime = 0; // rewind to the start
  audio.play();

  key.classList.toggle("playing");
}

const removeTransition = function (event) {
  if (event.propertyName !== "transform") return; // skip it if it's not a transform
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playDrum);
