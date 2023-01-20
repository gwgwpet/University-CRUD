import React, { Component } from 'react';
import axios from 'axios';

export default class StudentLogin extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      password:''
    }

  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  }


  onSubmit(e) {
    e.preventDefault();

    const student = {
      username: this.state.username,
      password:this.state.password
    }

    console.log(student);

    axios.post('http://localhost:5000/studentlogin', student)
      .then(res => {
        console.log(res.data)
        if(res.data)
            {
              localStorage.setItem('username', student.username);
              window.location='/enrolledcourses'
            }
            else{
              alert('fault credentials');
              window.location = '/studentlogin'}
        });

  }

  render() {
    return (
      <div>
        <h3>Student Login System</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Username: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}
                />
                <label>password: </label>
                <input  type="password"
                    required
                    className="form-control"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    />
          </div>
          <div className="form-group">
            <input type="submit" value="StudentLogin" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}