import React, { Component } from "react";
import { Navibar, Questioncard } from "../components/index";
import axios from "axios";
export default class QuestionPaperView extends Component {
  state = {
    qpaper: [],
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
          qpaper: response.data,
        });
        console.log(response);

        console.log(this.state.qpaper);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }
  render() {
    return (
      <div>
        <Navibar />
        <div className="container">
          {this.state.qpaper.map((qpaper) => (
            <Questioncard {...qpaper} />
          ))}
        </div>
      </div>
    );
  }
}
