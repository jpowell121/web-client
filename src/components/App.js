import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import UserManager from './UserManager';
import AnotherComponent from './AnotherComponent';
import NotFound from './NotFound'
import Nav from './Nav'
import { connect } from 'react-redux'
import { handleInitialData } from "../actions/shared";

class App extends Component {
  componentDidMount() {
    const {dispatch} = this.props;

    dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <div className='container'>
          <Nav />
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

export default connect()(App)