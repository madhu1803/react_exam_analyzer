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
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/subjects">Subject</Nav.Link>
            <Nav.Link href="/members">Users</Nav.Link>
            <Nav.Link href="/exams">Exams</Nav.Link>
            <Nav.Link href="/qpapers">Question papers</Nav.Link>
            <Nav.Link>
              <BiUserCircle style={{ fontSize: "23px" }} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
