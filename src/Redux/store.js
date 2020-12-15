import { configureStore, createSlice } from '@reduxjs/toolkit';

export const accountSlice = createSlice({
	name: 'accounts',
	initialState: 0,
	reducers: {
		add_account: state => state + 1,
		remove_account: state => state - 1
	} 
})

export default configureStore({
	reducer: accountSlice.reducer
})