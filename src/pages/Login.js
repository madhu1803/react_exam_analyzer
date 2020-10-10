import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
import { Input } from "../components/index";

export default class Login extends Component {
  render() {
    return (
      <div className="login-container">
        <div className="box-container">
          <div className="row">
            <div className="col-lg-6">
              <div className="login-left-container">hello</div>
            </div>
            <div className="col-lg-6">
              <div className="login-right-container">
                <p>Login</p>
                <Input />
                <Input />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
