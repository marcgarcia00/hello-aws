import { combineReducers, configureStore, createStore } from '@reduxjs/toolkit';
import counterReducer from './components/home/reducer';
import userReducer from './components/login/reducer';


function loadFromLocalStorage() {
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

function saveToLocalStorage (state: any) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch(e) {
    console.log("error occured during save", e);
  }
};

const rootReducer = combineReducers({
  user: userReducer,
  counter: counterReducer
});

export default configureStore({
  reducer: rootReducer,
});
