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
  // console.log(attackZones);
  return attackZones;
}
export function getDefenceZones() {
  const inputs = getAll(".defence-zones__checkbox");
  const defenceZones = Array.from(inputs)
    .filter((input) => input.checked)
    .map((input) => input.value);
  // console.log(defenceZones);
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
export function loadCharacterName() {
  const el = document.querySelector(".hero-header");
  const state = loadState();
  el.textContent = state.hero.name;
}
export function loadEnemyName() {
  const el = document.querySelector(".enemy-header");
  const state = loadState();
  el.textContent = state.enemy.name;
}
export function loadHealthBar(person) {
  const health = loadState()[person].health;
  const bar = document.querySelector(`.${person}-health`);

  changeHealthBar(bar, health);
}
export function loadDigitalHealth(person) {
  const health = document.querySelector(`.${person}-health__current`);
  const value = loadState()[person].health;

  changeDigitalHealth(health, value);
}
export function loadAttackButtonState() {
  const attackButton = document.querySelector(".attack-button");

  attackButton.disabled = loadState().attackButtonState;
}
function changeHealthBar(el, val) {
  el.value = val;
}
function changeDigitalHealth(el, val) {
  el.textContent = val;
}
export function loadLog() {
  const logEl = document.querySelector(".fight-log");

  const log = loadState().log;
  if (log) {
    const paragraphs = log.map((innerHtml) => createParagraph(innerHtml));
    //remembered for optimization
    const fragment = document.createDocumentFragment();
    paragraphs.forEach((p) => fragment.append(p));

    logEl.append(fragment);
  }
}
// сгенерировать врага случайным выбором готовых  из массива
const enemies = [
  {
    name: "Ravyn",
    avatar: "http://127.0.0.1:5500/images/avatars_1/2.png",
    health: 100,
    attackZones: [],
    defenceZones: [],
    numberOfAttackZones: 1,
    numberOfDefenceZones: 2,
    critChance: 20,
    damage: 13,
    critDamage: 13,
  },
  {
    name: "Kaito",
    avatar: "http://127.0.0.1:5500/images/avatars_1/3.png",
    health: 100,
    attackZones: [],
    defenceZones: [],
    numberOfAttackZones: 2,
    numberOfDefenceZones: 2,
    critChance: 30,
    damage: 8,
    critDamage: 9,
  },
  {
    name: "Shadow",
    avatar: "http://127.0.0.1:5500/images/avatars_1/6.png",
    health: 100,
    attackZones: [],
    defenceZones: [],
    numberOfAttackZones: 3,
    numberOfDefenceZones: 1,
    critChance: 20,
    damage: 10,
    critDamage: 11,
  },
];
export function generateEnemy() {
  const enemyNumber = Math.floor(Math.random() * 3);

  return enemies[enemyNumber];
}
// начать писать логику боя
function calcEnemyZones(attackZonesNumber, defenceZonesNumber) {
  const zones = ["head", "neck", "body", "belly", "legs"];
  const attackZones = [];
  const defenceZones = [];
  function getRandomIndex() {
    return Math.floor(Math.random() * 5);
  }

  while (attackZones.length < attackZonesNumber) {
    const zone = zones[getRandomIndex()];
    if (attackZones.indexOf(zone) > -1) {
      continue;
    }
    attackZones.push(zone);
  }

  while (defenceZones.length < defenceZonesNumber) {
    const zone = zones[getRandomIndex()];
    if (defenceZones.indexOf(zone) > -1) {
      continue;
    }
    defenceZones.push(zone);
  }

  return [attackZones, defenceZones];
}

export function attack(attacker, defender) {
  const heroHealthProgressEl = document.querySelector(".hero-health");
  const heroHealthDigitsEl = document.querySelector(".hero-health__current");
  const enemyHealthProgressEl = document.querySelector(".enemy-health");
  const enemyHealthDigitsEl = document.querySelector(".enemy-health__current");
  const attackButton = document.querySelector(".attack-button");

  let attackZones, defenceZones;
  let innerHtml1 = "";
  let innerHtml2 = "";
  //init zones for enemy for 2 cases
  if (!attacker.isHero) {
    [attackZones, defenceZones] = calcEnemyZones(
      attacker.numberOfAttackZones,
      attacker.numberOfDefenceZones
    );
    //my bad
    // const state = loadState();
    // state.enemy.attackZones = attackZones;
    // state.enemy.defenceZones = defenceZones;
    // saveState(state);

    attacker.attackZones = attackZones;
    attacker.defenceZones = defenceZones;
  } else {
    // we should set up enemy zones when he defends
    [attackZones, defenceZones] = calcEnemyZones(
      defender.numberOfAttackZones,
      defender.numberOfDefenceZones
    );

    defender.attackZones = attackZones;
    defender.defenceZones = defenceZones;
  }

  attackZones = [...attacker.attackZones];

  attackZones.forEach((zone) => {
    innerHtml1 = `<span class="log--blue">${attacker.name}</span> attacked <span class="log--blue">${defender.name}</span> to <span class="log--blue">${zone}</span>`;
    if (defender.defenceZones.indexOf(zone) > -1) {
      innerHtml2 = `but <span class="log--blue">${defender.name}</span> <span class="log--green">protected</span> <span class="log--white">his</span> <span class="log--green">${zone}</span>`;
    } else {
      innerHtml2 = `and deal <span class="log--red">${attacker.damage} damage</span>`;

      if (attacker.isHero) {
        const state = loadState();
        state.enemy.health = state.enemy.health - attacker.damage;
        changeHealthBar(enemyHealthProgressEl, state.enemy.health);
        saveState(state);

        changeDigitalHealth(enemyHealthDigitsEl, state.enemy.health);
      } else {
        const state = loadState();
        state.hero.health = state.hero.health - attacker.damage;
        changeHealthBar(heroHealthProgressEl, state.hero.health);
        saveState(state);

        changeDigitalHealth(heroHealthDigitsEl, state.hero.health);
      }
    }

    log(innerHtml1 + " " + innerHtml2);
  });

  //disable button if deaad
  const state = loadState();
  if (state.hero.health <= 0 || state.enemy.health <= 0) {
    attackButton.disabled = true;

    state.attackButtonState = false;
    //change hero stats
    if (state.hero.health <= 0) {
      state.hero.loses += 1;
    } else {
      state.hero.wins += 1;
    }
    saveState(state);
    //show modal
    const fightModal = document.querySelector(".fight-modal");
    fightModal.classList.remove("fight-modal--hidden");
  }
}

// продумать логику логирования, напрмер каждое дейтсвие создает строку хтмл с классами, пушит в массив в стейте, в конце атаки передает массив в функцию лога, которая делает  innerHtml.
function log(paragraphInnerHtml) {
  const state = loadState();
  state.log.push(paragraphInnerHtml);
  saveState(state);

  //render paragraph
  const logEl = document.querySelector(".fight-log");
  const p = createParagraph(paragraphInnerHtml);
  logEl.append(p);
  logEl.scrollTop = logEl.scrollHeight;
}

function createParagraph(innerHtml) {
  const newParagraph = document.createElement("p");
  newParagraph.classList.add("fight-log__p");
  newParagraph.innerHTML = innerHtml;
  return newParagraph;
}

export function createNewFight() {
  const state = loadState();
  // восстановить здоровье героя
  state.hero.health = 100;
  // обнулить зоны
  state.hero.attackZones = [];
  state.hero.defenceZones = [];
  // обнулить лог
  state.log = [];
  // выбрать случайного врага
  state.enemy = generateEnemy();
  //разобраться с активной кнопкой атаки

  saveState(state);
}

//! добавить криты, добавить криты в лог в виде спанов и пробитие несмотря на защиту
//! после окончания боя- на страницу character
// сохранение всего в стейт!!!
// добавить стоп игры при смерти любого персонажа- вывести окно с поздравлением или утешением, при закрытии окна отправить на страницу character обновить список побед и поражений,

// добавить обновление стейта-новый бой при нажатии на кнопку файт

/* <span class="attacker-name"></span>
<span class="defender-name"></span>
<span class="atack-zone"></span>
<span class="damage"></span>
Spider attacked 666 to Legs and deal 10 damage.
Spider attacked 666 to Neck but 666 protected his Neck. */
