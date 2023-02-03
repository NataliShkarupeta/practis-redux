// import { createStore } from 'redux';
// import { userReduser } from './users/usersReduser';
import { configureStore } from '@reduxjs/toolkit';
import usersReduser from './users/usersSlice'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, usersReduser);



export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store)