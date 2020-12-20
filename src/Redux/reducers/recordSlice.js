import { createSlice } from '@reduxjs/toolkit';

const recordSlice = createSlice({
	name: 'records',
	initialState: [],
	reducers: {
		add_record(state, action){
			state.records.push(action.payload)
		}
	}
})

export const { add_record } = recordSlice.actions

export default recordSlice.reducer