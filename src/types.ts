import rootReducer from './state/reducers'
import store from './state/store'

export type RootState = ReturnType<typeof rootReducer>

export type AppDispatch = typeof store.dispatch

export type ApiResponse = {
  code: string
  message: string
  error: string
  data: object
}
