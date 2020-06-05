import React from 'react'
import { render } from 'react-dom'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { makeServer } from "./server"

import App from './App'
import ErrorBoundry from './components/ErrorBoundry'
import rootReducer from './slices'

import './index.css'

const store = configureStore({ reducer: rootReducer })

if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" })
}

render(
  <Provider store={store}>
    <ErrorBoundry>
        <App />
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
)
