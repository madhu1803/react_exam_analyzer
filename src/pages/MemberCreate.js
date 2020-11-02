import React, { Component } from "react";
import { Navibar, Input } from "../components/index";
import { Card, Button, Form } from "react-bootstrap";
import axios from "axios";
export default class SubjectCreate extends Component {
  state = {
    password: "",
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    role: "",
    confirm_password: "",
    linked_subjects: [],
    errors: {},
    subjects: [],
    selected_subjects: [],
  };

  componentDidMount() {
    axios({
      method: "get",
      url: "https://testing.ajaidanial.wtf/examination/questions/",
      headers: {
        Authorization: `Token ${localStorage.getItem("auth_key")}`,
      },
    })
      .then((response) => {
        this.setState({
          ...this.state,
          subjects: response.data,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = () => {
    alert("Submitted");
    axios({
      method: "post",
      url: "https://testing.ajaidanial.wtf/auth/users/",
      headers: {
        Authorization: `Token ${localStorage.getItem("auth_key")}`,
      },
      data: {
        password: this.state.password,
        username: this.state.username,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        role: this.state.rolw,
        confirm_password: this.state.confirm_password,
        linked_subjects: this.state.linked_subjects,
      },
    })
      .then((response) => {
        alert("success");
        console.log(this.state.name);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  render() {
    return (
      <div>
        <Navibar />
        <div className="home-container container mt-5 ">
          <Card className="shadow-lg p-3 mb-5 bg-white rounded">
            <Card.Body>
              <h4>Enter details to update/Create</h4>

              <Input
                type="text"
                name="username"
                placeholder="username"
                value={this.state.username}
                change={(e) => this.handleChange(e)}
                errors={this.state.errors.error}
              />
              <Input
                type="text"
                name="first_name"
                placeholder="first_name"
                value={this.state.first_name}
                change={(e) => this.handleChange(e)}
                errors={this.state.errors.error}
              />
              <Input
                type="text"
                name="last_name"
                placeholder="last_name"
                value={this.state.last_name}
                change={(e) => this.handleChange(e)}
                errors={this.state.errors.error}
              />
              <Input
                type="text"
                name="email"
                placeholder="email"
                value={this.state.email}
                change={(e) => this.handleChange(e)}
                errors={this.state.errors.error}
              />
              <Input
                type="text"
                name="role"
                placeholder="admin/teacher"
                value={this.state.role}
                change={(e) => this.handleChange(e)}
                errors={this.state.errors.error}
              />
              <Input
                type="text"
                name="password"
                placeholder="password"
                value={this.state.password}
                change={(e) => this.handleChange(e)}
                errors={this.state.errors.error}
              />
              <Input
                type="text"
                name="confirm_password"
                placeholder="confirm_password"
                value={this.state.confirm_password}
                change={(e) => this.handleChange(e)}
                errors={this.state.errors.error}
              />
              <small>subject name</small>

              <Form.Control
                as="select"
                size="sm"
                custom
                className="mt-4"
                name="linked_subjects"
              >
                {this.state.subjects.map((subject) => (
                  <option value={subject.id}>{subject.name}</option>
                ))}
              </Form.Control>
            </Card.Body>
            <Button
              className="bg-blue btn-block mt-5"
              onClick={this.submitHandler}
            >
              Submit
            </Button>
          </Card>
        </div>
      </div>
    );
  }
}
