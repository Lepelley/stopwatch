import { applyMiddleware, createStore } from 'redux'

import rootReducer from './reducers'

const configureStore = (preloadedState = {}) => {
  const middlewares = []

  const middlewareEnhancer = applyMiddleware(...middlewares)

  return createStore(rootReducer, preloadedState, middlewareEnhancer)
}

export default configureStore
