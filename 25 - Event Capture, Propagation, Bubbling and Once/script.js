const divs = document.querySelectorAll("div");

const logText = function (event) {
  console.log(this.classList.value);
  event.stopPropagation(); // stop bubbling
};

divs.forEach((div) =>
  div.addEventListener("click", logText, { capture: false, once: false })
);

const button = document.querySelector("button");

button.addEventListener("click", () => console.log("click"), { once: true });
