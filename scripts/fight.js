import {
  getEl,
  getAttackZones,
  getDefenceZones,
  isCorrectAmountOfZones,
} from "./fight_utils.js";

const characterName = getEl(".hero-header");
const enemyName = getEl(".enemy-header");
const characterHealthBar = getEl(".hero-health");
const enemyHealthBar = getEl(".enemy-health");
const characterDigitHealth = getEl(".hero-health__current");
const enemyDigitHealth = getEl(".enemy-health__current");
const attackBtn = getEl(".attack-button");
const zones = getEl(".zones");

function initPageInfo() {}

attackBtn.addEventListener("click", (evt) => {
  getAttackZones();
  getDefenceZones();
});
zones.addEventListener("click", (evt) => {
  if (isCorrectAmountOfZones()) {
    attackBtn.disabled = false;
  } else {
    attackBtn.disabled = true;
  }
});
