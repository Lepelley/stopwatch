import { ADD_HISTORY, RESET_HISTORY } from '../constants/actions'

const initialState = {
  times: []
}

const reducer = (state = initialState, action = {}) => {
  const { times } = state

  switch (action.type) {
    case ADD_HISTORY:
      times.push(action.payload.time)

      return { ...state, times }
    case RESET_HISTORY:
      return { ...state, times: [] }
    default:
      return state
  }
}

export default reducer
