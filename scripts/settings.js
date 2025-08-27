import { loadState, saveState } from "./state_manager.js";

const characterNameEl = document.querySelector(".settings-content__name");
const inputEl = document.querySelector(".settings-content__input");
const submitButton = document.querySelector(".settings-content__button");

function initPage() {
  loadName();
  addListeners();
}
initPage();

function loadName() {
  const state = loadState();
  characterNameEl.textContent = state.hero.name;
}
//**************************** */
function addListeners() {
  submitButton.addEventListener("click", (evt) => {
    const state = loadState();
    state.hero.name = inputEl.value;
    saveState(state);
    loadName();
  });
}
