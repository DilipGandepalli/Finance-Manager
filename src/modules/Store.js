import {combineReducers,legacy_createStore} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import HomeReducer from './Home/Reducers';
import { MMKV } from 'react-native-mmkv';

const storage = new MMKV();

export const reduxStorage = {
    setItem: (key, value) => {
      storage.set(key, value);
      return Promise.resolve(true);
    },
    getItem: key => {
      const value = storage.getString(key);
      return Promise.resolve(value);
    },
    removeItem: key => {
      storage.delete(key);
      return Promise.resolve();
    },
  };

const rootReducer = combineReducers({
    Home: HomeReducer
})

const persistConfig = {
    key: 'root',
    storage : reduxStorage
  };

const persistReducer1 = persistReducer(persistConfig,rootReducer);

export const Store = legacy_createStore(
 persistReducer1
 );

export const persistor = persistStore(Store);
