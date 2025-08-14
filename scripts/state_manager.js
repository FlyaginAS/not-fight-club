export function saveState(appState) {
  // const oldState = loadState();
  localStorage.setItem("appState", JSON.stringify(appState));
}

export function loadState() {
  let stateStr = localStorage.getItem("appState");
  let appState = {};
  if (stateStr) {
    appState = JSON.parse(stateStr);
  }
  return appState;
}
export function resetState() {
  localStorage.setItem("appState", JSON.stringify({}));
}
// //!app state structure
export const appState = {
  hero: {
    name: "",
    avatar: "http://127.0.0.1:5500/images/avatars_1/6.png",
    health: 80,
    wins: 0,
    loses: 0,
    attackZones: [],
    defenceZones: [],
    isCriticalAttack: Math.random() * 10 < 2,
    damage: 15,
    critDamage: 30,
  },
  enemy: {
    name: "Maya",
    avatar: "http://127.0.0.1:5500/images/avatars_1/6.png",
    health: 90,
    attackZones: ["head"],
    defenceZones: ["neck", "belly"],
    isCriticalAttack: Math.random() * 10 < 2,
    damage: 10,
    critDamage: 30,
  },

  enemies: [
    {
      name: "Ravyn",
      avatar: 2,
      health: 100,
      attackZones: [],
      defenceZones: [],
      numberOfAttackZones: 1,
      numberOfDefenceZones: 2,
      isCriticalAttack: Math.random() * 10 < 2,
      damage: 20,
      critDamage: 40,
    },
    {
      name: "Kaito",
      avatar: 3,
      health: 100,
      attackZones: [],
      defenceZones: [],
      numberOfAttackZones: 2,
      numberOfDefenceZones: 2,
      isCriticalAttack: Math.random() * 10 < 3,
      damage: 10,
      critDamage: 30,
    },
    {
      name: "Shadow",
      avatar: 6,
      health: 100,
      attackZones: [],
      defenceZones: [],
      numberOfAttackZones: 3,
      numberOfDefenceZones: 1,
      isCriticalAttack: Math.random() * 10 < 3,
      damage: 15,
      critDamage: 20,
    },
  ],
  log: ["strs"],
};
//zones: head, neck, body, belly, legs
//enemies
const enemies = [
  {
    name: "Ravyn",
    avatar: 2,
    health: 100,
    attackZones: [],
    defenceZones: [],
    numberOfAttackZones: 1,
    numberOfDefenceZones: 2,
    isCriticalAttack: Math.random() * 10 < 2,
    damage: 20,
    critDamage: 40,
  },
  {
    name: "Kaito",
    avatar: 3,
    health: 100,
    attackZones: [],
    defenceZones: [],
    numberOfAttackZones: 2,
    numberOfDefenceZones: 2,
    isCriticalAttack: Math.random() * 10 < 3,
    damage: 10,
    critDamage: 30,
  },
  {
    name: "Shadow",
    avatar: 6,
    health: 100,
    attackZones: [],
    defenceZones: [],
    numberOfAttackZones: 3,
    numberOfDefenceZones: 1,
    isCriticalAttack: Math.random() * 10 < 3,
    damage: 15,
    critDamage: 20,
  },
];
// Ayara Blade Storm – мастер восточных боевых искусств с лёгким, стремительным стилем и парными клинками.

// Ravyn Steel – уличный боец с кожаной курткой, быстрыми реакциями и агрессивной тактикой.

// Kaito Thunder Fist – мощный каратист, чьи удары звучат как раскаты грома.

// Marcus Flame Guard – тяжёлый боец в броне с огненными приёмами.

// Liam Shadow Strike – классический мастер рукопашного боя в рваном сером ги.

// Syn Obsidian Shadow – кибер-ниндзя с улучшенными реакциями и светящимися глазами.
