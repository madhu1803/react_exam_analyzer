import React, { Component } from "react";
import { Navibar, Input } from "../components/index";
import { Card, Button } from "react-bootstrap";
export default class MemberUpdate extends Component {
  render() {
    return (
      <div>
        <Navibar />
        <div className="home-container container mt-5 ">
          <Card className="shadow-lg p-3 mb-5 bg-white rounded">
            <Card.Body>
              <h4>Enter details to update</h4>
              <Input type="text" name="first name" placeholder="frist name" />
              <Input type="text" name="last name" placeholder="last name" />
              <Input type="email" name="email" placeholder="Email" />
              <Input type="password" name="password" placeholder="password" />
            </Card.Body>
            <Button className="bg-blue btn-block mt-5">Submit</Button>
          </Card>
        </div>
      </div>
    );
  }
}
