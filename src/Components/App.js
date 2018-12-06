import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import UserManager from './UserManager';
import AnotherComponent from './AnotherComponent';
import NotFound from './NotFound'

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          Main App (Nav placeholder)
          <Switch>
            <Route path='/' exact component={UserManager} />
            <Route path='/Another' exact component={AnotherComponent} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App