import { saveState, loadState, resetState } from "./state_manager.js";

const modalRegistry = document.querySelector(".modal-registry");
const registryForm = document.querySelector(".registry");
const name = document.querySelector(".registry__input");
const submit = document.querySelector(".registry__submit");

const appState = loadState();
console.log(appState);

if (!appState.characterName) {
  modalRegistry.classList.remove("hidden");

  registryForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    evt.stopPropagation();
    resetState();
    saveState({ characterName: registryForm.character_name.value });
    modalRegistry.classList.add("hidden");
  });
}
