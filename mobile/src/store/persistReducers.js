import AsyncStorage from '@react-native-community/async-storage';
import {persistReducer} from 'redux-persist';

export default (reducers) => {
  const persistConfig = {
    key: 'ideiasApp',
    storage: AsyncStorage,
    whitelist: ['auth', 'user'],
  };

  const persistedReducer = persistReducer(persistConfig, reducers);

  return persistedReducer;
};
