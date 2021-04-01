import { combineReducers } from 'redux'
import timer from './timer'
import history from './history'

export default combineReducers({
  timer,
  history
})
