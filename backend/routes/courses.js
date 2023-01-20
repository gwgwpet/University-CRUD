const router = require('express').Router();
let Course = require('../models/course.model');

router.route('/').get((req, res)=>{
  Course.find()
  .then(course => res.json(course))
  .catch(err => res.status(400).json('Error: '+err));

});

router.route('/add').post((req, res)=>{
    const professor = req.body.professor;
    const description = req.body.description;
    const semester = Number(req.body.semester);
    // const student = req.body.student;
    const student = req.body.student;

    const newCourse = new Course({professor, description, semester, student});

    newCourse.save()
    .then(()=> res.json('Course Added Succesfully!'))
    .catch(err=>res.status(400).json ('Error: '+err));

});

router.route('/:id').get((req, res) => {
    Course.findById(req.params.id)
      .then(course => res.json(course))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/:id').delete((req, res) => {
    Course.findByIdAndDelete(req.params.id)
      .then(() => res.json('Course deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/update/:id').post((req, res) => {
    Course.findById(req.params.id)
      .then(course => {
        
        course.professor = req.body.professor;
        course.description = req.body.description;
        course.semester = Number(req.body.semester);
        course.student= course.student;
  
        course.save()
          .then(() => res.json('Course updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });
  

module.exports=router;