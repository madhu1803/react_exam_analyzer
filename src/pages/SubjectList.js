import React, { Component } from "react";
import { Table, Button } from "react-bootstrap";
import { Navibar } from "../components/index";
import { AiFillFileAdd } from "react-icons/ai";
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
          <Button className="bg-dblue mb-4" href="/subject/create">
            <AiFillFileAdd /> Add New
          </Button>

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
