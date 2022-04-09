import { PersistGate } from 'redux-persist/integration/react';
import { Persistor } from './redux/store';
import { Provider } from 'react-redux';
import store from './redux/store';
import ReactDOM from 'react-dom';
import React from 'react';

import App from './App';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={Persistor}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
