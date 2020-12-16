import { configureStore, createSlice } from '@reduxjs/toolkit';
import { identifyAccount } from './middleware';

export const accountSlice = createSlice({
	name: 'accounts',
	initialState: {accounts: []},
	reducers: {
		add_account: (state, action) => {state.accounts.push(action.payload)},
		select_one: (state, action) => {state.accounts[action.payload].selected = !state.accounts[action.payload].selected},
		remove_account: state => state - 1
	} 
})

export default configureStore({
	reducer: accountSlice.reducer,
	middleware: [identifyAccount]
})