import React, { Component } from "react";
import { Navibar, Questioncard } from "../components/index";
export default class QuestionPaperView extends Component {
  render() {
    return (
      <div>
        <Navibar />
        <div className="container">
          <Questioncard />
          <Questioncard />
          <Questioncard />
          <Questioncard />
          <Questioncard />
        </div>
      </div>
    );
  }
}
