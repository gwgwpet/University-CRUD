import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default class CoursesList extends Component {
  constructor(props) {
    super(props);

    this.deleteCourse = this.deleteCourse.bind(this)

    this.state = {courses: []};
  }

  componentDidMount() {
    axios.post('http://localhost:5000/enrolledcourses', {username: localStorage.getItem("username")})
      .then(response => {
        console.log(response.data);
        this.setState({ courses: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteCourse(id) {
    axios.delete('http://localhost:5000/courses/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
        courses: this.state.courses.filter(el => el._id !== id)
    })
  }

  courseList() {
    return this.state.courses.map(currentcourse => {
      return <course course={currentcourse} deleteCourse={this.deleteCourse} key={currentcourse._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Logged Courses</h3>
        <h4><Link to={"/addcourse"}><button>Add Course</button></Link></h4>
        <table className="table">
          <thead className="thead-light">            
            <tr>
              <th>Professor</th>
              <th>Description</th>
              <th>Semester</th>
              <th>Students</th>
            </tr>
          </thead>
          <tbody>
            {this.state.courses.map((elem, i) => {
              return(
                <tr>
                      <td>{elem.professor}</td>
                      <td>{elem.description}</td>
                      <td>{elem.semester}</td>
                      <td>{elem.student}</td>
                      <td>
                        <Link to={"/edit/"+elem._id}>edit</Link> | <a href="#" onClick={() => { this.deleteCourse(elem._id) }}>delete</a>
                        </td>
                </tr>
              )
            })}
            { this.courseList() }
          </tbody>
        </table>
      </div>
    )
  }
}