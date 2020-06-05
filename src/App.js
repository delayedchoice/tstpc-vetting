import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { Navbar } from './components/Navbar'
import Dashboard from './components/Dashboard'
import Entries from './components/Entries'
import Detail from './components/Detail'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/entries" component={Entries} />
        <Route exact path="/entries/:id" component={Detail} />
        <Redirect to="/" />
      </Switch>
    </Router>
  )
}

export default App
