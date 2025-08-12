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
