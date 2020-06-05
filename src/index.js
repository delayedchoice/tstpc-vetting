import firebase from 'firebase'
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

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDey_VtvKGXjbaef-a2vLKryPYAmBHMPJ0",
  authDomain: "tstpcvetting.firebaseapp.com",
  databaseURL: "https://tstpcvetting.firebaseio.com",
  projectId: "tstpcvetting",
  storageBucket: "tstpcvetting.appspot.com",
  messagingSenderId: "1039565603932",
  appId: "1:1039565603932:web:cdc1c14da88e0a9e229299",
  measurementId: "G-BVN231R9XG"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

render(
  <Provider store={store}>
    <ErrorBoundry>
        <App />
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
)
