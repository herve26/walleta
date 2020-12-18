import { accountSlice } from './store';
// const { add_account } = accountSlice.actions;

export const identifyAccount = store => next => action => {
	const { add_account } = accountSlice.actions
	if (action.type === add_account.toString()){
		action.payload = {...action.payload, id: store.getState().accounts.length}
	}
	return next(action)
}