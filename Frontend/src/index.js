import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import SmartRouter from './Router.js';
import reducer from './reducer'

let initialState = {
    products: [],
    categories: categories,
    cart: []
}

const state = createStore(
    reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

const App =
  <Provider store={state}>
      <SmartRouter />
  </Provider>

ReactDOM.render(App, document.getElementById('root'));
registerServiceWorker();