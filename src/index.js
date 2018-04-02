import React from 'react'
import ReactDOM from 'react-dom'
import App from './app.js'

import { createStore } from 'smox'
import { Provider } from 'smox'
import { counter } from './smox/reducer'

const store = createStore(counter)

ReactDOM.render(
  <Provider value={store}>
    <App />
  </Provider>,document.getElementById('root'))
