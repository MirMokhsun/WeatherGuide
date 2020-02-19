//simple imports of index
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from './App'
//imports for redux
/*import reducer from ''
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
//imports for persist
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'
*/
/*
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['result', 'back', 'username']
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
const persistedStore = persistStore(store)

const store = createStore(persistedReducer, applyMiddleware(createLogger()));

const PointOfNoReturn = () =>
    <Provider store={store}>
        <PersistGate persistor={persistedStore} loading={null}>
            <App />
        </PersistGate>
    </Provider>
*/
AppRegistry.registerComponent(appName, () => App);
