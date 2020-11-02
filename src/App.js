import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { AuthenticatedRoute, NonAuthenticatedRoute } from "./helpers/Routes";
import {
  Home,
  Login,
  QuestionPaperView,
  MemberList,
  MemberCreate,
  SubjectCreate,
  SubjectList,
  ExamList,
  Page404,
  ExamCreate,
  QuestionPaperCreate,
  QuestionCreate,
} from "./pages/index";
import axios from "axios";

export default class App extends Component {
  render() {
    return (
      <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Redirect exact from="/" to="/login" />
          <NonAuthenticatedRoute path="/login" component={Login} />
          <AuthenticatedRoute
            path="/subject/create"
            component={SubjectCreate}
          />
          <AuthenticatedRoute path="/subjects" component={SubjectList} />
          <AuthenticatedRoute path="/exam/create" component={ExamCreate} />
          <AuthenticatedRoute path="/exams" component={ExamList} />
          <AuthenticatedRoute path="/home" component={Home} />
          <AuthenticatedRoute path="/member/create" component={MemberCreate} />
          <AuthenticatedRoute path="/qpapers" component={QuestionPaperView} />
          <AuthenticatedRoute
            path="/qpaper/create"
            component={QuestionPaperCreate}
          />
          <AuthenticatedRoute
            path="/question/create"
            component={QuestionCreate}
          />
          <AuthenticatedRoute path="/members" component={MemberList} />
          <Route component={Page404} />
        </Switch>
      </Router>
    );
  }
}
