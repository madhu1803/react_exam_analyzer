import React, { Component } from "react";
import { Navibar, Input } from "../components/index";
import { Card } from "react-bootstrap";
export default class Update extends Component {
  render() {
    return (
      <div>
        <Navibar />
        <div className="home-container container mt-5">
          <Card>
            <Card.Body>
              <h4>Enter details to update</h4>
              <Input type="text" name="first name" placeholder="frist name" />
              <Input type="text" name="last name" placeholder="last name" />
              <Input type="email" name="email" placeholder="Email" />
              <Input type="password" name="password" placeholder="password" />
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}
