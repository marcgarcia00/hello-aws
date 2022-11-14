import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { debounce } from 'debounce';

import App from './App';
import { store } from './store/store';
import { saveToLocalStorage } from './store/localStorage';
import './index.css';

store.subscribe(
  debounce(() => {
    saveToLocalStorage(store.getState())
  }, 500)
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);