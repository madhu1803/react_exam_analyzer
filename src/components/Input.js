import React, { Component } from "react";
import { Form } from "react-bootstrap";

export default class Input extends Component {
  render() {
    return (
      <div className="input-container mt-5">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>
      </div>
    );
  }
}
