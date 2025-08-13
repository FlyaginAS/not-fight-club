import { loadState } from "./state_manager.js";

function loadHeroName() {
  const characterNameEl = document.querySelector(".character-info__name");
  const state = loadState();
  characterNameEl.textContent = state.hero.name;
}
function loadHeroStats() {
  const winsEl = document.querySelector(".character-info__wins");
  const losesEl = document.querySelector(".character-info__loses");

  const state = loadState();
  winsEl.textContent = `Wins: ${state.hero.wins}`;
  losesEl.textContent = `Loses: ${state.hero.loses}`;
}
function loadHeroAvatar() {}

function initPage() {
  loadHeroAvatar();
  loadHeroName();
  loadHeroStats();
}
initPage();
