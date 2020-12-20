import { combineReducers } from '@reduxjs/toolkit';

import accountsReducer from './accountsSlice';
import recordsReducer from './recordSlice';

export default combineReducers({
	accounts: accountsReducer,
	records: recordsReducer
})