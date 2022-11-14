import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import counterReducer from '../components/home/reducer';
import userReducer from '../components/login/reducer';
import roomReducer from '../components/room/reducer';
import { loadFromLocalStorage } from './localStorage';

const rootReducer = combineReducers({
  user: userReducer,
  counter: counterReducer,
  room: roomReducer
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk],
    preloadedState: loadFromLocalStorage(),
    devTools: true
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
