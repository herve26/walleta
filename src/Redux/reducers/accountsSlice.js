import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid';
// import 

import { add_record } from './recordSlice';

const accountSlice = createSlice({
	name: 'accounts',
	initialState: {},
	reducers: {
		/* These Reducers are using the immer library for immutability. It let you write mutable-like syntax
		while not mutating the data */
		add_account: {
			reducer(state, action){
				state[action.payload.id] = action.payload
			},
			prepare(newAccount){
				return { payload: {id: `acc${nanoid()}`, created_at: Date.now(), modified_at: Date.now(), records: [], ...newAccount} }
			}
		},
		select_account: (state, action) => {state[action.payload].selected = !state[action.payload].selected},
		remove_account: (state, action) => {delete state[action.payload]},
		edit_account: (state, action) => {state[action.payload.id] = action.payload}
	},
	extraReducers: {
		[add_record]: (state, action) => {
			console.log(state)
			console.log(action)
			if(action.payload.type === 'transfert'){
				state[action.payload.sender].records.push(action.payload.id)
				state[action.payload.receiver].records.push(action.payload.id)	
			}
			else{
				state[action.payload.account].records.push(action.payload.id)
			} 
		}
	}
})

export const { add_account, select_account, remove_account, edit_account } = accountSlice.actions

export default accountSlice.reducer