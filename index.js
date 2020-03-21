import rootReducer from './app/redux/reducers/';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import createSagaMiddleware from 'redux-saga';
import React from 'react';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from './App';
//Save Redux state
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/es/integration/react';
import { rootSaga } from './app/redux/saga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

const persistedStore = persistStore(store);
console.disableYellowBox = true;
sagaMiddleware.run(rootSaga);

const Myentrypoint = () => (
  <Provider store={store}>
    <PersistGate persistor={persistedStore} loading={null}>
      <App />
    </PersistGate>
  </Provider>
);

AppRegistry.registerComponent(appName, () => Myentrypoint);
