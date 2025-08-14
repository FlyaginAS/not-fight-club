export function getEl(str) {
  return document.querySelector(str);
}
export function getAttackZones() {
  const inputs = document.querySelectorAll(".attack-zones__checkbox");
  const attackZones = Array.from(inputs)
    .filter((input) => input.checked)
    .map((input) => input.value);
  console.log(attackZones);
  return attackZones;
}
export function getDefenceZones() {
  const inputs = document.querySelectorAll(".defence-zones__checkbox");
  const defenceZones = Array.from(inputs)
    .filter((input) => input.checked)
    .map((input) => input.value);
  console.log(defenceZones);
  return defenceZones;
}
export function isCorrectAmountOfZones() {
  const inputs1 = document.querySelectorAll(".attack-zones__checkbox");
  const inputs2 = document.querySelectorAll(".defence-zones__checkbox");

  const attackZones = Array.from(inputs1)
    .filter((input) => input.checked)
    .map((input) => input.value);

  const defenceZones = Array.from(inputs2)
    .filter((input) => input.checked)
    .map((input) => input.value);

  return attackZones.length === 1 && defenceZones.length === 2;
}
