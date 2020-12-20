import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

const recordSlice = createSlice({
	name: 'records',
	initialState: [],
	reducers: {
		add_record:{
			reducer(state, action){
				state.push(action.payload)
			},
			prepare(newRecord){
				return { payload: {id: uuid(), ...newRecord}}
			}
		}
	}
})

export const { add_record } = recordSlice.actions

export default recordSlice.reducer