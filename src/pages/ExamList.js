import React, { Component } from "react";
import { Table,Button } from "react-bootstrap";
import { RiAddCircleFill } from 'react-icons/ri';
import { Navibar } from "../components/index";
import axios from "axios";

export default class ExamList extends Component {
   
    state = {
        exams: [],
      };
      componentDidMount() {
        axios({
          method: "get",
          url: "https://testing.ajaidanial.wtf/examination/exams/",
          headers: {
            Authorization: `Token ${localStorage.getItem("auth_key")}`,
          },
        })
          .then((response) => {
            this.setState({
              ...this.state,
              exams: response.data,
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
            <Button className="bg-dblue mb-4" href="/exam/create"><RiAddCircleFill/> Add New</Button>
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.exams.map((exam) => (
                    <tr>
                      <td>{exam.id}</td>
                  <td>{exam.name}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        );
      }
}
