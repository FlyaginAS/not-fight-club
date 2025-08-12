import { saveState, loadState, resetState } from "./state_manager.js";

const registryForm = document.querySelector(".registry");
const name = document.querySelector(".registry__input");
const submit = document.querySelector(".registry__submit");

registryForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  evt.stopPropagation();
  resetState();
  saveState({ characterName: registryForm.character_name.value });
  registryForm.classList.add("hidden");
});
