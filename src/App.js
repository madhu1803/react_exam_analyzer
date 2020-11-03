import React, { Component } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import { AuthenticatedRoute, NonAuthenticatedRoute } from './helpers/routes'
import {
  Home,
  Login,
  Page404,
  SubjectList,
  SubjectsCreate,
  ExamsList,
  ExamsCreate,
  MembersList,
  MembersCreate
  // QuestionPaperView,
  // QuestionPaperCreate,
  // QuestionCreate
} from './pages/index'
import { Navibar } from './components'

export default class App extends Component {
  render() {
    return (
      <Router>
        {localStorage.getItem('auth_key', null) && <Navibar />}
        <Switch>
          <Redirect exact from="/" to="/login" />
          <NonAuthenticatedRoute exact path="/login" component={Login} />
          <AuthenticatedRoute exact path="/home" component={Home} />
          {/* subjects */}
          <AuthenticatedRoute exact path="/subjects" component={SubjectList} />
          <AuthenticatedRoute
            exact
            path="/subjects/create"
            component={SubjectsCreate}
          />
          {/* exams */}
          <AuthenticatedRoute exact path="/exams" component={ExamsList} />
          <AuthenticatedRoute
            exact
            path="/exams/create"
            component={ExamsCreate}
          />
          <AuthenticatedRoute exact path="/members" component={MembersList} />
          <AuthenticatedRoute
            exact
            path="/members/create"
            component={MembersCreate}
          />

          {/* 
          <AuthenticatedRoute path="/members/create" component={MembersCreate} /> 
          <AuthenticatedRoute path="/qpapers" component={QuestionPaperView} /> */}
          {/* <AuthenticatedRoute
            path="/qpaper/create"
            component={QuestionPaperCreate}
          /> */}
          {/* <AuthenticatedRoute
            path="/question/create"
            component={QuestionCreate}
          /> */}
          <Route component={Page404} />
        </Switch>
      </Router>
    )
  }
}
