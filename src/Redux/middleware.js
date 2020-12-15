import { accountSlice } from './store';
// const { add_account } = accountSlice.actions;

export const identifyAccount = store => next => action => {
	const { add_account } = accountSlice.actions

	console.log(action.type === add_account.toString())
	if (action.type === add_account.toString()){
		action.payload.id = store.getState().accounts.length
	}
	return next(action)
}