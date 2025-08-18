import { createNewFight } from "./scripts/fight_utils.js";
import "./scripts/registry.js";

const fightButton = document.querySelector(".home-content__fight-button");
fightButton.addEventListener("click", (evt) => {
  createNewFight();

  window.location.href = "./fight.html";
});
