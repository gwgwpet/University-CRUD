const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Student = require('./models/student.model');
const Course = require('./models/course.model');
const coursesRouter = require('./routes/courses');
const studentsRouter = require('./routes/students');

const app = express();

require('dotenv').config();
// Bodyparser Middleware
app.use(bodyParser.json());

// DB Config

const db = 'mongodb+srv://gwgwpet:gwgwpet@mycluster.1adyala.mongodb.net/?retryWrites=true&w=majority';
// Connect to Mongo
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  ) // Adding new mongo url parser
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

const port = process.env.PORT || 5000;



app.use(cors());
app.use(express.json());




app.use('/courses', coursesRouter);
app.use('/students',studentsRouter);

app.post('/studentlogin', (req, res) => {
  //find user in database who has the same credentials
  //if found 
  //console.log(req.bod)
  Student.find({ username: req.body.username, password: req.body.password }).then
  (
    ress => 
    {
      //res.json(ress.length);
      
      if (ress.length ==1 ) 
      {
        res.json(true);

      }
      else
      {
        res.json(false);
      }
    }

  )
})


app.post('/enrolledcourses', (req, res) => {
// console.log("aaaa");
// console.log(req.body.username);
Course.find({student: req.body.username}).then(courses => res.json(courses))
})




app.listen(port, () => console.log(`Server started on port ${port}`))