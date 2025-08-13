import { loadState } from "./state_manager.js";

function loadHeroName() {
  const characterNameEl = document.querySelector(".character-info__name");
  const state = loadState();
  characterNameEl.textContent = state.hero.name;
}
function loadHeroStats() {}
function loadHeroAvatar() {}

function initPage() {
  loadHeroAvatar();
  loadHeroName();
  loadHeroStats();
}
initPage();
