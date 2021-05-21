import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage/session'
import rootReducer from './reducers'
import { RootState } from '../types'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['account'],
}

const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ],
})

const persistor = persistStore(store)

export { store, persistor }
export default store
