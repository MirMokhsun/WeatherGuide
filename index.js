import reducer from './app/redux/reducers/reducer'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import React from 'react'
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from './App'
//Save Redux state
import AsyncStorage from '@react-native-community/async-storage'
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/es/integration/react'
//disable yellow warning
console.disableYellowBox = true;



const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['result', 'back', 'username']
}

const persistedReducer = persistReducer(persistConfig, reducer)

const store = createStore(
    persistedReducer, applyMiddleware()
);

const persistedStore = persistStore(store)

const Myentrypoint = () =>
    <Provider store={store}>
        <PersistGate persistor={persistedStore} loading={null}>
            <App />
        </PersistGate>
    </Provider>

AppRegistry.registerComponent(appName, () => Myentrypoint);
