import { combineReducers } from 'redux'
import accountReducer from './slices/account'

export default combineReducers({
  account: accountReducer,
})
