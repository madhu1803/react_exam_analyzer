import React, { Component } from "react";
import { Navibar, Input } from "../components/index";
import { Card, Button } from "react-bootstrap";
import axios from 'axios'
export default class SubjectCreate extends Component {
    state = {
        name: "",
        errors:{},
      };

      handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      };
    
      submitHandler = () => {
        alert("Submitted");
        axios({
          method: "post",
          url: "https://testing.ajaidanial.wtf/examination/subjects/",
          headers: {
            Authorization: `Token ${localStorage.getItem("auth_key")}`,
          },
          data: {
            name:this.state.name,
          },
        })
          .then((response) => {
              alert("success");
              console.log(this.state.name)
             
          })
          .catch((error) => {
            if (error.response.status === 400 || error.response.status === 403) {
              alert("error");
              this.setState({
                ...this.state,
                errors: {
                 error:error.response.data.non_field_errors 
                },
              });
              console.log(this.state.errors.error)
            }
          });
      };
      
   
  render() {
  
    return (
      <div>
        <Navibar />
        <div className="home-container container mt-5 ">
          <Card className="shadow-lg p-3 mb-5 bg-white rounded">
            <Card.Body>
              <h4>Enter details to update/Create</h4>
              <Input type="text" name="name" placeholder="subject name" value={this.state.name} change={(e) => this.handleChange(e)} errors={this.state.errors.error}/>
            </Card.Body>
            <Button className="bg-blue btn-block mt-5" onClick={this.submitHandler}>Submit</Button>
          </Card>
        </div>
      </div>
    );
  }
}
