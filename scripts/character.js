import { loadState, saveState } from "./state_manager.js";

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
function loadHeroAvatar() {
  const avatarEl = document.querySelector(".character-info__img");
  const state = loadState();
  const avatar = state.hero.avatar;
  avatarEl.src = avatar;
}

function initPage() {
  loadHeroAvatar();
  loadHeroName();
  loadHeroStats();

  addListenerOnAvatarsContainer();
}
initPage();
//*change hero avatar from a library*************************************** */
function changeHeroAvatar(relativePath) {
  //change avatar on page
  const characterImgEl = document.querySelector(".character-info__img");
  characterImgEl.src = relativePath;

  const state = loadState();
  state.hero.avatar = relativePath;
  saveState(state);
}

function addListenerOnAvatarsContainer() {
  const avatarsContainer = document.querySelector(".character-avatars");
  avatarsContainer.addEventListener("click", (evt) => {
    if (evt.target.tagName === "IMG") {
      const relativePath = `.${evt.target.src.slice(-23)}`;

      changeHeroAvatar(relativePath);
    }
  });
}
