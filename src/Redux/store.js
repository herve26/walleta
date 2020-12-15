import { configureStore, createSlice } from '@reduxjs/toolkit';
import { identifyAccount } from './middleware';

export const accountSlice = createSlice({
	name: 'accounts',
	initialState: {accounts: []},
	reducers: {
		add_account: (state, action) => {console.log(action); state.accounts.push(action.payload)},
		remove_account: state => state - 1
	} 
})

export default configureStore({
	reducer: accountSlice.reducer,
	middleware: [identifyAccount]
})