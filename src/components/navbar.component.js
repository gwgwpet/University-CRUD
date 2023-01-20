import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">University Crud</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          
          <li className="navbar-item">
          <Link to="/createstudent" className="nav-link">Create Student</Link>
          </li>
          <li className="navbar-item">
          <Link to="/studentlogin" className="nav-link">Student Log In</Link>
          </li>
          
        </ul>
        </div>
      </nav>
    );
  }
}