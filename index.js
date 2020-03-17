import rootReducer from './app/redux/reducers/';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';

import createSagaMiddleware from 'redux-saga';
import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './App';
//Save Redux state
import {persistStore, persistReducer} from 'redux-persist';
import {PersistGate} from 'redux-persist/es/integration/react';
import {watchLoadLoc} from './app/redux/saga';

const sagaMiddleware = createSagaMiddleware();
// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
//   whitelist: ['latitude', 'longitude'],
// };

const store = createStore(rootReducer, applyMiddleware(logger, sagaMiddleware));
sagaMiddleware.run(watchLoadLoc);

const persistedStore = persistStore(store);

const Myentrypoint = () => (
  <Provider store={store}>
    <PersistGate persistor={persistedStore} loading={null}>
      <App />
    </PersistGate>
  </Provider>
);

AppRegistry.registerComponent(appName, () => Myentrypoint);
