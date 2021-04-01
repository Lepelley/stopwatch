import { START, STOP, RESET, CHANGE_TIME } from '../constants/actions'

const initialState = {
  time: 0,
  timer: null
}

const reducer = (state = initialState, action = {}) => {
  const { timer, time } = state

  switch (action.type) {
    case START:
      return { ...state, timer: action.payload.timer }
    case STOP:
      clearInterval(timer)
      return { ...state, timer: null }
    case RESET:
      clearInterval(timer)
      return { ...state, time: 0, timer: null }
    case CHANGE_TIME:
      return { ...state, time: time + 1}
    default:
      return state
  }
}

export default reducer
