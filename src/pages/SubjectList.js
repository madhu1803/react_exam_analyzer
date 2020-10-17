import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { Navibar } from "../components/index";
import axios from "axios";

export default class SubjectList extends Component {
  state = {
    subjects: [],
  };
  componentDidMount() {
    axios({
      method: "get",
      url: "https://testing.ajaidanial.wtf/examination/subjects/",
      headers: {
        Authorization: `Token ${localStorage.getItem("auth_key")}`,
      },
    })
      .then((response) => {
        this.setState({
          ...this.state,
          subjects: response.data,
        });
        console.log(response.data);
        console.log(this.state.subjects);
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
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {this.state.subjects.map((subject) => (
                <tr>
                  <td>{subject.id}</td>
              <td>{subject.name}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}
