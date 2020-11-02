import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

export default class Questioncard extends Component {
  render() {
    let { name, description, question_paper } = this.props;

    return (
      <Card className="shadow-lg p-3 mb-5 bg-white rounded mt-5">
        <Card.Header>{name}</Card.Header>
        <Card.Body>
          <Card.Title>{description}</Card.Title>
          <Card.Text>{question_paper}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
  }
}
