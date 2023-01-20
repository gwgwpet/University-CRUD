import React, { Component } from 'react';
import axios from 'axios';

export default class addCourse extends Component {
  constructor(props) {
    super(props);

    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeProfessor = this.onChangeProfessor.bind(this);
    this.onChangeSemester = this.onChangeSemester.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      description: '',
      professor:'',
      semester:'',
      student: localStorage.getItem("username")
    }

  }

  onChangeDescription(e) {
    this.setState({
        description: e.target.value
    })
  }
  onChangeProfessor(e) {
    this.setState({
        professor: e.target.value
    })
  }
  onChangeSemester(e) {
    this.setState({
        semester: e.target.value
    })
  }
  


  onSubmit(e) {
    e.preventDefault();

    const course = {
      description: this.state.description,
      professor:this.state.professor,
      semester:this.state.semester,
      student:this.state.student

    }

    console.log(course);

    axios.post('http://localhost:5000/courses/add', course)
      .then(res => console.log(res.data));

      

    // this.setState({
    //   professor:'',
    //   description: '',
    //   semester:'',
    //   student:this.state.student
    // })
  }

  render() {
    return (
      <div>
        <h3>Add New Course</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Professor: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.professor}
                onChange={this.onChangeProfessor}
                />
                <label>Description: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.description}
                    onChange={this.onChangeDescription}
                    />
                    <label>Semester: </label>
                <input  type="Number"
                    required
                    className="form-control"
                    value={this.state.semester}
                    onChange={this.onChangeSemester}
                    />
          </div>
          <div className="form-group">
            <input type="submit" value="Add Course" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}