import { START, STOP, RESET, CHANGE_TIME, ADD_HISTORY, RESET_HISTORY } from '../constants/actions'

export const start = (payload) => ({ type: START, payload })
export const stop = () => ({ type: STOP })
export const reset = () => ({ type: RESET })
export const changeTime = () => ({ type: CHANGE_TIME })
export const addHistory = (payload) => ({ type: ADD_HISTORY, payload})
export const resetHistory = () => ({ type: RESET_HISTORY})

export const calculateTime = (timeSeconds) => {
  const hours = Math.floor(timeSeconds / 3600)

  let seconds = timeSeconds % 3600

  const minutes = Math.floor(seconds / 60)
  seconds = seconds % 60

  return `${hours} h ${minutes} m ${seconds} s`
}

