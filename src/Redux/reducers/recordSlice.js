import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const recordSlice = createSlice({
	name: 'records',
	initialState: {},
	reducers: {
		add_record:{
			reducer(state, action){
				state[action.payload.id] = action.payload
			},
			prepare(newRecord){
				return { payload: {id: `rec${nanoid()}`, created_at: Date.now(), modified_at: Date.now(), ...newRecord}}
			}
		}
	}
})

export const { add_record } = recordSlice.actions

export default recordSlice.reducer