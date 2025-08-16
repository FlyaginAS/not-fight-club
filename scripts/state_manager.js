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
    isHero: true,
    name: "",
    avatar: "http://127.0.0.1:5500/images/avatars_1/1.png",
    health: 100,
    wins: 0,
    loses: 0,
    attackZones: [],
    defenceZones: [],
    critChance: 20,
    damage: 15,
    critDamage: 30,
  },
  enemy: {},

  log: ["strs1", "strs1", "strs1", "strs1"],
};
//zones: head, neck, body, belly, legs
//enemies

// Ayara Blade Storm – мастер восточных боевых искусств с лёгким, стремительным стилем и парными клинками.

// Ravyn Steel – уличный боец с кожаной курткой, быстрыми реакциями и агрессивной тактикой.

// Kaito Thunder Fist – мощный каратист, чьи удары звучат как раскаты грома.

// Marcus Flame Guard – тяжёлый боец в броне с огненными приёмами.

// Liam Shadow Strike – классический мастер рукопашного боя в рваном сером ги.

// Syn Obsidian Shadow – кибер-ниндзя с улучшенными реакциями и светящимися глазами.
