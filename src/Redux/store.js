import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist'

import reducers from './reducers';


export const store = configureStore({
	reducer: reducers
})

export const persistor = persistStore(store)

