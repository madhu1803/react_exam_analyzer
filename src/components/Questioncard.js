import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
export default class Questioncard extends Component {
  render() {
    return (
      <Card className="shadow-lg p-3 mb-5 bg-white rounded mt-5">
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
  }
}
