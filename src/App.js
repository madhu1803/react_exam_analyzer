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
  MemberUpdate,
  QuestionPaperView,
  MemberList,
  SubjectList,
  ExamList,
  Page404,
} from "./pages/index";
import axios from 'axios'

export default class App extends Component {
  
  // componentDidMount() {
  //   axios({
  //     method: "get",
  //     url: "https://gprs-api.geopits.com/project/projects/",
  //     headers: {
  //       Authorization: `sessionid ${localStorage.getItem("auth_key")}`,
  //     },
  //   }).catch((error) => {
  //     console.log(error);
  //     localStorage.removeItem("auth_key");
  //     if (window.location.pathname !== "/login") {
  //       window.location.reload();
  //     }
  //   });
  // }
  render() {
    return (
      <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Redirect exact from="/" to="/login" />
          <NonAuthenticatedRoute path="/login" component={Login} />
          <AuthenticatedRoute
            path="/subjects"
            component={SubjectList}
          />
           <AuthenticatedRoute
            path="/exams"
            component={ExamList}
          />
          <AuthenticatedRoute path="/home" component={Home} />
          <AuthenticatedRoute path="/teacher/update" component={MemberUpdate} />
          <AuthenticatedRoute
            path="/questionpaper/view"
            component={QuestionPaperView}
          />
            <AuthenticatedRoute
            path="/memberlist/view"
            component={MemberList}
          />
          <Route component={Page404} />
        </Switch>
      </Router>
    );
  }
}
