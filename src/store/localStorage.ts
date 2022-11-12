export function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.serializedState('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.log("Error occured during load");
    return undefined;
  }
}

export function saveToLocalStorage (state: any) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch(err) {
    console.log("error occured during save", err);
  }
};
