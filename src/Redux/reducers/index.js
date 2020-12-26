import { combineReducers } from '@reduxjs/toolkit';

import accountsReducer from './accountsSlice';
import recordsReducer from './recordSlice';

import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
	accounts: accountsReducer,
	records: recordsReducer
})

export default persistReducer(persistConfig, rootReducer)