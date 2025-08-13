import "./scripts/registry.js";

const fightButton = document.querySelector(".home-content__fight-button");
fightButton.addEventListener("click", (evt) => {
  window.location.href = "/fight.html";
});
