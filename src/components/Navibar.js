import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { BiUserCircle } from "react-icons/bi";
export default class Navibar extends Component {
  render() {
    return (
      <Navbar bg="light bg-dblue" expand="lg">
        <Navbar.Brand href="#home">SRCG</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="#home">Subject</Nav.Link>
            <Nav.Link href="#home">Users</Nav.Link>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#home">Exams</Nav.Link>
            <Nav.Link href="#home">
              <BiUserCircle style={{ fontSize: "23px" }} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
