import React, { Component } from 'react';
import axios from 'axios';


export default class EditCourse extends Component {
  constructor(props) {
    super(props);

    this.onChangeProfessor = this.onChangeProfessor.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeSemester = this.onChangeSemester.bind(this);
    // this.onChangeStudent = this.onChangeStudent.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      professor: '',
      description: '',
      semester: 0,
      //student: localStorage.getItem("username")
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/courses/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          professor: response.data.professor,
          description: response.data.description,
          semester: response.data.semester,
         // student: response.data.student//new Student(response.data.student)
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

    // axios.get('http://localhost:5000/students/')
    //   .then(response => {
    //     if (response.data.length > 0) {
    //       this.setState({
    //         students: response.data.map(user => user.student),
    //       })
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   })

 
 }

  onChangeProfessor(e) {
    this.setState({
      professor: e.target.value
    })
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  onChangeSemester(e) {
    this.setState({
      semester: e.target.value
    })
  }

  // onChangeStudent(student) {
  //   this.setState({
  //     student: student
  //   })
  // }

  onSubmit(e) {
    e.preventDefault();

    const course = {
      professor: this.state.professor,
      description: this.state.description,
      semester: this.state.semester,
      //student: this.state.student
    }

    console.log(course);

    axios.post('http://localhost:5000/courses/update/' + this.props.match.params.id, course)
      .then(res => console.log(res.data));

    // window.location = '/enrolledcourses';
  }

  render() {
    return (
    <div>
      <h3>Edit Course Log</h3>
      <form onSubmit={this.onSubmit}> 
        <div className="form-group"> 
          <label>Professor: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.professor}
              onChange={this.onChangeProfessor}
              />
        </div>
        <div className="form-group"> 
          <label>Description: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
              />
        </div>
        <div className="form-group">
          <label>Semester: </label>
          <input 
              type="number" 
              className="form-control"
              value={this.state.semester}
              onChange={this.onChangeSemester}
              />
        </div>

        <div className="form-group">
          <input type="submit" value="Edit Course Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}