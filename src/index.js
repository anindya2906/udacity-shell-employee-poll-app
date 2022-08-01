import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';
import reducers from './reducers';
import middlewares from './middlewares';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const store = createStore(reducers, middlewares);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
