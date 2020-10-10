import React, { Component } from "react";
import { Form } from "react-bootstrap";

export default class Input extends Component {
  render() {
    let { type, placeholder, name } = this.props;

    return (
      <div className="input-container mt-5">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>{name}</Form.Label>
          <Form.Control type={type} placeholder={placeholder} />
        </Form.Group>
      </div>
    );
  }
}
