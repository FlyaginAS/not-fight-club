import { loadState, saveState } from "./state_manager.js";

export function getEl(str) {
  return document.querySelector(str);
}
export function getAll(str) {
  return document.querySelectorAll(str);
}
export function getAttackZones() {
  const inputs = getAll(".attack-zones__checkbox");
  const attackZones = Array.from(inputs)
    .filter((input) => input.checked)
    .map((input) => input.value);
  console.log(attackZones);
  return attackZones;
}
export function getDefenceZones() {
  const inputs = getAll(".defence-zones__checkbox");
  const defenceZones = Array.from(inputs)
    .filter((input) => input.checked)
    .map((input) => input.value);
  console.log(defenceZones);
  return defenceZones;
}
export function isCorrectAmountOfZones() {
  const inputs1 = getAll(".attack-zones__checkbox");
  const inputs2 = getAll(".defence-zones__checkbox");

  const attackZones = Array.from(inputs1)
    .filter((input) => input.checked)
    .map((input) => input.value);

  const defenceZones = Array.from(inputs2)
    .filter((input) => input.checked)
    .map((input) => input.value);

  return attackZones.length === 1 && defenceZones.length === 2;
}
export function saveZones() {
  const state = loadState();
  state.hero.attackZones = getAttackZones();
  state.hero.defenceZones = getDefenceZones();
  saveState(state);
}

export function loadZones() {
  // const attackCheckboxes = Array.from(getAll(".attack-zones__checkbox"));
  // const defenceCheckboxes = Array.from(getAll(".defence-zones__checkbox"));
  const attackZones = document.querySelector(".attack-zones");
  const defenceZones = document.querySelector(".defence-zones");

  const state = loadState();
  if (state.hero.attackZones.length > 0) {
    state.hero.attackZones.forEach(
      (str) =>
        (attackZones.querySelector(`input[value='${str}'] `).checked = true)
    );
  }
  if (state.hero.defenceZones.length > 0) {
    state.hero.defenceZones.forEach(
      (str) =>
        (defenceZones.querySelector(`input[value='${str}'] `).checked = true)
    );
  }
}
function loadAvatar(el, val) {
  el.src = val;
}

export function loadCharacterAvatar() {
  const el = document.querySelector(".hero-avatar");
  const val = loadState().hero.avatar;

  loadAvatar(el, val);
}
export function loadEnemyAvatar() {
  const el = document.querySelector(".enemy-avatar");
  const val = loadState().enemy.avatar;

  loadAvatar(el, val);
}
export function loadHealthBar() {
  changeHealthBar();
}
export function loadDigitalHealth() {
  changeDigitalHealth();
}
function changeHealthBar(el, val) {}
function changeDigitalHealth(el, val) {}
