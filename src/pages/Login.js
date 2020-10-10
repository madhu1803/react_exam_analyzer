import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
export default class Login extends Component {
  render() {
    return (
      <div className="login-container row">
        <div className="left-login-container col-lg-6">
          <Jumbotron className="login-jumbotron">
            <h1>Hello, world!</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
          </Jumbotron>
        </div>
        <div className="right-login-container col-lg-6">hello</div>
      </div>
    );
  }
}
