import { combineReducers, configureStore } from '@reduxjs/toolkit';
import counterReducer from './components/home/reducer';

const rootReducer = combineReducers({ 
  counter: counterReducer
})

export default configureStore({
  reducer: rootReducer,
})