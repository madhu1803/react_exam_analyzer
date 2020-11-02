import React, { Component } from "react";
import axios from "axios";
import { Navibar, Input } from "../components/index";
import { Card, Button, Form } from "react-bootstrap";

export default class QuestionPaperView extends Component {
  state = {
    name: "",
    description: "",
    question_categories: [],
    question_paper: [],
    selected_categories: [],
    selected_paper: "",
    errors: {},
  };
  componentDidMount() {
    axios({
      method: "get",
      url:
        "https://testing.ajaidanial.wtf/examination/question-papers/?show-questions=true",
      headers: {
        Authorization: `Token ${localStorage.getItem("auth_key")}`,
      },
    })
      .then((response) => {
        this.setState({
          ...this.state,
          question_paper: response.data,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });

    axios({
      method: "get",
      url: "https://testing.ajaidanial.wtf/examination/question-categories/",
      headers: {
        Authorization: `Token ${localStorage.getItem("auth_key")}`,
      },
    })
      .then((response) => {
        this.setState({
          ...this.state,
          question_categories: response.data,
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
        question_categories: this.state.selected_categories,
        question_paper: this.state.selected_paper,
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
              <h4>Enter question details to update/Create</h4>
              <Input
                type="text"
                name="name"
                placeholder="question  name"
                value={this.state.name}
                change={(e) => this.handleChange(e)}
                errors={this.state.errors.error}
              />
              <Input
                type="text"
                name="description"
                placeholder="question description"
                value={this.state.description}
                change={(e) => this.handleChange(e)}
                errors={this.state.errors.error}
              />

              <Form.Control
                as="select"
                size="sm"
                custom
                className="mt-4"
                name="selected_exam"
                onChange={(e) => this.handleChange(e)}
              >
                {this.state.question_paper.map((question_paper) => (
                  <option value={question_paper.id}>
                    {question_paper.name}
                  </option>
                ))}
              </Form.Control>
              <Form.Control
                as="select"
                size="sm"
                custom
                className="mt-4"
                name="selected_exam"
                onChange={(e) => this.handleChange(e)}
              >
                {this.state.question_categories.map((question_categorie) => (
                  <option value={question_categorie.id}>
                    {question_categorie.name}
                  </option>
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
