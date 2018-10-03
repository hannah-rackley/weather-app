import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import SmartRouter from './router.js';
import reducer from './reducer'
import { saveState, loadState} from './localStorage'

const persistedState = loadState();
console.log(persistedState);

const state = createStore(
    reducer, persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

state.subscribe(() => {
    saveState({
        locations: state.getState().locations
    });
});

const App =
  <Provider store={state}>
      <SmartRouter />
  </Provider>

ReactDOM.render(App, document.getElementById('root'));
registerServiceWorker();