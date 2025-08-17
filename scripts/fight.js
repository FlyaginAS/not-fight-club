import {
  getEl,
  getAll,
  getAttackZones,
  getDefenceZones,
  isCorrectAmountOfZones,
  saveZones,
  loadZones,
  loadCharacterAvatar,
  loadEnemyAvatar,
  loadCharacterName,
  loadEnemyName,
  loadHealthBar,
  loadDigitalHealth,
  generateEnemy,
  loadLog,
  attack,
  loadAttackButtonState,
} from "./fight_utils.js";
import { saveState, loadState } from "./state_manager.js";

const characterName = getEl(".hero-header");
const enemyName = getEl(".enemy-header");
const characterHealthBar = getEl(".hero-health");
const enemyHealthBar = getEl(".enemy-health");
const characterDigitHealth = getEl(".hero-health__current");
const enemyDigitHealth = getEl(".enemy-health__current");
const attackBtn = getEl(".attack-button");
const zones = getEl(".zones");
const closeBtn = getEl(".fight-modal__close");

initPageInfo();

function initPageInfo() {
  loadZones();

  const state = loadState();
  if (
    isCorrectAmountOfZones() &&
    state.hero.health > 0 &&
    state.enemy.health > 0
  ) {
    attackBtn.disabled = false;
    const state = loadState();
    state.attackButtonState = false;
    saveState(state);
  } else {
    attackBtn.disabled = true;
    const state = loadState();
    state.attackButtonState = true;
    saveState(state);
  }

  loadCharacterName();
  loadCharacterAvatar();
  loadEnemyAvatar();
  loadEnemyName();
  loadHealthBar("hero");
  loadHealthBar("enemy");
  loadDigitalHealth("hero");
  loadDigitalHealth("enemy");
  loadAttackButtonState();
  loadLog();
}

attackBtn.addEventListener("click", (evt) => {
  const state = loadState();
  attack(state.hero, state.enemy);
  attack(state.enemy, state.hero);
  // getAttackZones();
  // getDefenceZones();
});
zones.addEventListener("click", (evt) => {
  saveZones();
  const state = loadState();

  if (
    isCorrectAmountOfZones() &&
    state.hero.health > 0 &&
    state.enemy.health > 0
  ) {
    attackBtn.disabled = false;
    // const state = loadState();
    state.attackButtonState = false;
    saveState(state);
  } else {
    attackBtn.disabled = true;
    // const state = loadState();
    state.attackButtonState = true;
    saveState(state);
  }
});

closeBtn.addEventListener("click", (evt) => {
  evt.target.closest(".fight-modal").classList.add("fight-modal--hidden");
});
