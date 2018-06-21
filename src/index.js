import React from 'react'
import ReactDOM from 'react-dom'
import App from './app.js'
import { Provider } from './smox/index'
import { store } from './store/index'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)