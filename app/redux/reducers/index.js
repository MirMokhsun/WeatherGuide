import backReducer from './backReducer';
import locationReducer from './getLoc';
import {combineReducers} from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import {persistReducer} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['latitude', 'longitude'],
};

export default rootReducer = combineReducers({
  location: persistReducer(persistConfig, locationReducer),
});
