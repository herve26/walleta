import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuid } from 'uuid';

import { add_record } from './recordSlice';

const accountSlice = createSlice({
	name: 'accounts',
	initialState: [],
	reducers: {
		/* These Reducers are using the immer library for immutability. It let you write mutable-like syntax
		while not mutating the data */
		add_account: {
			reducer(state, action){
				console.log(state)
				console.log(action)
				state.push(action.payload)
			},
			prepare(newAccount){
				return { payload: {id: uuid(), records: [], ...newAccount} }
			}
		},
		select_account: (state, action) => {state.[action.payload].selected = !state.[action.payload].selected},
		remove_account: (state, action) => {state.splice(action.payload, 1)},
		edit_account: (state, action) => {state.[action.payload.id] = action.payload}
	},
	extraReducers: {
		[add_record]: (state, action) => {
			state[0].records.push(action.payload.id)
		}
	}
})

export const { add_account, select_account, remove_account, edit_account } = accountSlice.actions

export default accountSlice.reducer