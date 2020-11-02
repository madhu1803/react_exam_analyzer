import React, { Component } from "react";
import { Navibar, Input } from "../components/index";
import { Card, Button, Form } from "react-bootstrap";
import axios from "axios";

export default class QuestionPaperCreate extends Component {
  state = {
    name: "",
    description: "",
    selected_exam: [],
    selected_subject: [],
    exams: [],
    subjects: [],
    errors: [],
  };

  componentDidMount() {
    axios({
      method: "get",
      url: "https://testing.ajaidanial.wtf/examination/exams/",
      headers: {
        Authorization: `Token ${localStorage.getItem("auth_key")}`,
      },
    })
      .then((response) => {
        this.setState({
          ...this.state,
          exams: response.data,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
    axios({
      method: "get",
      url: "https://testing.ajaidanial.wtf/examination/subjects/",
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
      url:
        "https://testing.ajaidanial.wtf/examination/question-papers/?show-questions=true",
      headers: {
        Authorization: `Token ${localStorage.getItem("auth_key")}`,
      },
      data: {
        name: this.state.name,
        description: this.state.description,
        selected_exam: this.state.selected_exam,
        selected_subject: this.state.selected_subject,
      },
    })
      .then((response) => {
        alert("success");
        console.log(this.state.name);
      })
      .catch((error) => {
        alert("error");
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
                name="name"
                placeholder="question paper name"
                value={this.state.name}
                change={(e) => this.handleChange(e)}
                errors={this.state.errors.error}
              />
              <Input
                type="text"
                name="description"
                placeholder="question name description"
                value={this.state.description}
                change={(e) => this.handleChange(e)}
                errors={this.state.errors.error}
              />

              <small>Subject name</small>
              <Form.Control
                as="select"
                size="sm"
                custom
                className="mt-4"
                name="selected_subject"
              >
                {" "}
                {this.state.subjects.map((subject) => (
                  <option value={subject.id}>{subject.name}</option>
                ))}
              </Form.Control>
              <small>exam name</small>
              <Form.Control
                as="select"
                size="sm"
                custom
                className="mt-4"
                name="selected_exam"
                onChange={(e) => this.handleChange(e)}
              >
                {this.state.exams.map((exam) => (
                  <option value={exam.id}>{exam.name}</option>
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
