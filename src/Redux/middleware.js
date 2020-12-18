import { accountSlice } from './store';
import { v4 as uuid } from 'uuid';
// const { add_account } = accountSlice.actions;

export const identifyAccount = store => next => action => {
	const { add_account } = accountSlice.actions
	const id = uuid()
	console.log(id)

	if (action.type === add_account.toString() && !store.getState().accounts[id]){

		action.payload = {...action.payload, id: id}
	}
	return next(action)
}