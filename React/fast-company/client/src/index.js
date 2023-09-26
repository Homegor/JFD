import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.css'
import App from './app/App'
import { Router } from 'react-router-dom'
import { createStore } from './app/store/createStore'
import { Provider } from 'react-redux'
import history from './app/utils/history'

const store = createStore()

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <Router history={history}>
      <StrictMode>
        <App />
      </StrictMode>
    </Router>
  </Provider>
)