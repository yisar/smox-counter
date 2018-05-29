import React from 'react'
import ReactDOM from 'react-dom'
import App from './app.js'
import { store } from './store/index'
import { Provider } from 'smox'

ReactDOM.render(
  <Provider value={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
