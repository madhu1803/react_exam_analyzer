import React, { Component } from "react";
import { Navibar, HomeCard } from "../components/index";
export default class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <Navibar />
        <div className="container pt-5">
          <div className="row">
            <div className="col-lg-4">
              <HomeCard />
            </div>
            <div className="col-lg-4">
              <HomeCard />
            </div>
            <div className="col-lg-4">
              <HomeCard />
            </div>
            <div className="col-lg-6">
              <HomeCard />
            </div>
            <div className="col-lg-6">
              <HomeCard />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
