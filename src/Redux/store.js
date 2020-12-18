import { configureStore, createSlice } from '@reduxjs/toolkit';
import { identifyAccount } from './middleware';

export const accountSlice = createSlice({
	name: 'accounts',
	initialState: {accounts: []},
	reducers: {
		/* These Reducers are using the immer library for immutability. It let you write mutable-like syntax
		while not mutating the data */
		add_account: (state, action) => {state.accounts.push(action.payload)},
		select_account: (state, action) => {state.accounts[action.payload].selected = !state.accounts[action.payload].selected},
		remove_account: (state, action) => {state.accounts.splice(action.payload, 1)},
		edit_account: (state, action) => {state.accounts[action.payload.id] = action.payload}
	} 
})

export default configureStore({
	reducer: accountSlice.reducer,
	middleware: [identifyAccount]
})