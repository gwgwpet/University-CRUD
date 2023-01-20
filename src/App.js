import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component";
import CreateStudent from "./components/create-student.component";

import StudentLogin from "./components/student-login.component";

import Enc from "./components/course-list.component"

import Edit_page from "./components/edit-page.component"

import AddCourse from "./components/addCourse.component"

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/createstudent" component={CreateStudent} />
      <Route path="/studentlogin" component={StudentLogin} />
      <Route path="/enrolledcourses/" component={Enc}/>
      <Route path="/edit/:id" component={Edit_page}/>
      <Route path="/addcourse" component = {AddCourse}/>
      
      </div>
    </Router>
  )
}

export default App;
