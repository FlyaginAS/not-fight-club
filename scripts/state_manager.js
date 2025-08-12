export function saveState(obj) {
  const oldState = loadState();
  localStorage.setItem("appState", JSON.stringify({ ...oldState, ...obj }));
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
// appState = {
//   hero: {
//     name: "Hero",
//     avatar: 0,
//     health: 100,
//     wins: 0,
//     loses: 0,
//     body: {
//       head: {
//         protected: false,
//       },
//       neck: {
//         protected: false,
//       },
//       body: {
//         protected: false,
//       },
//       belly: {
//         protected: false,
//       },
//       legs: {
//         protected: false,
//       },
//     },
//     attackZones: ["head"],
//     isCriticalAttack: false,
//     damage: 10,
//     critDamage: 30,
//     isCritDamage: Math.random() * 10 < 2,
//   },
//   enemy: {
//     name: "Enemy",
//     avatar: 0,
//     health: 100,
//   },
//   heroes: [{}],
//   enemies: [{}],
//   log: ["strs"],
// };
