import Nav from './components/Nav'
import configureStore from './store/createStore'
import React from 'react'
import { Provider } from 'react-redux'

const store = configureStore()

export default function App() {
  return (
    <Provider store={store}>
      <Nav />
    </Provider>
  )
}
