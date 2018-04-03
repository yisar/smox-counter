import React from 'react'
import ReactDOM from 'react-dom'
import App from './app.js'

import { createStore, Provider, applyMiddleware, thunk ,arrayThunk} from 'smox'
import { counter } from './store/reducer'

const store = createStore(counter, applyMiddleware(thunk,arrayThunk))

ReactDOM.render(
  <Provider value={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
