import React, { Component } from "react";
import { Navibar } from "../components/index";
import axios from "axios";
import { Table, Button } from "react-bootstrap";
import { IoIosPersonAdd } from "react-icons/io";
export default class MemberList extends Component {
  state = {
    members: [],
  };

  componentDidMount() {
    axios({
      method: "get",
      url: "https://testing.ajaidanial.wtf/auth/users/",
      headers: {
        Authorization: `Token ${localStorage.getItem("auth_key")}`,
      },
    })
      .then((response) => {
        this.setState({
          ...this.state,
          members: response.data,
        });
        console.log(this.state.members);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }
  render() {
    return (
      <div>
        <Navibar />
        <div className="container mt-5">
          <Button className="bg-dblue mb-4" href="/member/create">
            <IoIosPersonAdd /> Add New
          </Button>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Email</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              {this.state.members.map((member) => (
                <tr>
                  <td>{member.id}</td>
                  <td>{member.email}</td>
                  <td>{member.first_name}</td>
                  <td>{member.last_name}</td>
                  <td>{member.username}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}
