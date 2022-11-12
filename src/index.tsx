import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

import Home from './components/home/home';
import { Provider } from 'react-redux';
import { store } from './store';
import Room from './components/room/room';
import { saveToLocalStorage } from './store/localStorage';
import { debounce } from 'debounce';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.subscribe(
  debounce(() => {
    saveToLocalStorage(store.getState())
  }, 500)
);
// const routes = [
//   <Route path='/' element="App"/>
// <Route path='/home' element="App"/>
// ]
const router = createBrowserRouter([
  { path: "/", element: <App/> },
  { path: "/home", element: <Home/> },
  { path: "/room", element: <Room/> }
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);