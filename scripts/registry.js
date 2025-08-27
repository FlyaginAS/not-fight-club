import { generateEnemy } from "./fight_utils.js";
import { saveState, loadState, resetState, appState } from "./state_manager.js";

const modalRegistry = document.querySelector(".modal-registry");
const registryForm = document.querySelector(".registry");
const heroName = document.querySelector(".registry__input");
// const submit = document.querySelector(".registry__submit");

if (!loadState()?.hero?.name) {
  modalRegistry.classList.remove("hidden");

  registryForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    evt.stopPropagation();
    saveState(appState);

    const newState = loadState();
    newState.hero.name = registryForm.character_name.value.trim();
    newState.enemy = generateEnemy();
    saveState(newState);

    modalRegistry.classList.add("hidden");
  });
}
