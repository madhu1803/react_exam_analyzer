import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { RiBookOpenFill, RiLoginBoxLine } from "react-icons/ri";
import { Input } from "../components/index";
import { Navbar } from "react-bootstrap";
import axios from "axios";

export default class Login extends Component {
  state = {
    username: "",
    password: "",
    errors: {},
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = () => {
    alert("Submitted");
    axios({
      method: "post",
      url: "https://testing.ajaidanial.wtf/auth/get-auth-token/",
      data: {
        username: this.state.username,
        password: this.state.password,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          alert("success");
          localStorage.setItem("auth_key", response.data.token);
          window.location.reload();
        } else {
          alert("unhandled");
        }
      })
      .catch((error) => {
        if (error.response.status === 400 || error.response.status === 403) {
          alert("error");
          this.setState({
            ...this.state,
            errors: {
              error: error.response.data.non_field_errors,
            },
          });
          console.log(this.state.errors.error);
        }
      });
  };

  render() {
    return (
      <div className="login-container text-capitalise">
        {/* navbar  */}
        <Navbar bg="light bg-dblue" className="d-sm-block d-lg-none">
          <Navbar.Brand href="#home" className="text-white">
            SRCG
          </Navbar.Brand>
        </Navbar>
        {/* row */}
        <div className="row">
          {/* left container */}
          <div className="login-left-container col-lg-6 d-none d-lg-block">
            <h2 className="text-white left-text">
              Student report card Generator
            </h2>
            <h1>
              <RiBookOpenFill className="text-white" />
            </h1>
          </div>
          {/* right container */}
          <div className="login-right-container col-lg-6">
            <div className="main-container">
              <div className="field-container">
                <h1>
                  <RiLoginBoxLine className="txt-grey" />
                </h1>
                <h3 className="txt-blue">Login</h3>
                <Input
                  type="text"
                  placeholder="ramu@gmail.com"
                  name="username"
                  value={this.state.username}
                  change={(e) => this.handleChange(e)}
                  errors={this.state.errors.error}
                />
                <Input
                  type="password"
                  placeholder="password"
                  name="password"
                  value={this.state.password}
                  change={(e) => this.handleChange(e)}
                  errors={this.state.errors.error}
                />
                <Button
                  className="bg-blue btn-block mt-5"
                  onClick={this.submitHandler}
                >
                  Login
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
