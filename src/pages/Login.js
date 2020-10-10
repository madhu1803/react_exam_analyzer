import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { RiBookOpenFill, RiLoginBoxLine } from "react-icons/ri";
import { Input } from "../components/index";

export default class Login extends Component {
  render() {
    return (
      <div className="login-container text-capitalise">
        <div className="row">
          <div className="login-left-container col-lg-6 d-none d-lg-block">
            <h2 className="text-white left-text">
              Student report card Generator
            </h2>
            <h1>
              <RiBookOpenFill className="text-white" />
            </h1>
          </div>
          <div className="login-right-container col-lg-6">
            <div className="main-container">
              <div class="field-container">
                <h1>
                  <RiLoginBoxLine className="txt-grey" />
                </h1>
                <h3 className="txt-blue">Login</h3>
                <Input type="email" placeholder="ramu@gmail.com" name="Email" />
                <Input type="password" placeholder="password" name="Password" />
                <Button className="btn-blue btn-block mt-5">Login</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
