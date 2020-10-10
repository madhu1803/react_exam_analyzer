import React, { Component } from "react";
import { Navibar, Homecard } from "../components/index";
export default class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <Navibar />
        <div className="container pt-5">
          <div className="row">
            <div className="col-lg-4">
              <Homecard />
            </div>
            <div className="col-lg-4">
              <Homecard />
            </div>
            <div className="col-lg-4">
              <Homecard />
            </div>
            <div className="col-lg-6">
              <Homecard />
            </div>
            <div className="col-lg-6">
              <Homecard />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
