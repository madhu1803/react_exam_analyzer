import React, { Component } from 'react'
import  './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { AuthenticatedRoute, NonAuthenticatedRoute } from "./helpers/Routes";
import { Home , Login ,Page404} from './pages/index';

export default class App extends Component {
  render() {
    return (
      <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Redirect exact from="/" to="/login" />
          <NonAuthenticatedRoute path="/login" component={Login}/>
          <AuthenticatedRoute path="/home" component={Home}/>
          <Route  component={Page404}/>
        </Switch>
    </Router>
    )
  }
}
