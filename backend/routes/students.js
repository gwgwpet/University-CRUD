const router = require('express').Router();
let Student = require('../models/student.model');


router.route('/').get((req, res)=>{
  Student.find()
  .then(student => res.json(student))
  .catch(err => res.status(400).json('Error: '+err));

});


router.route('/add').post((req, res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const newStudent = new Student({username, password});

    newStudent.save()
    .then(()=> res.json('Studen Added Succesfully!'))
    .catch(err=>res.status(400).json ('Error: '+err));

});

router.route('/:id').get((req, res) => {
    Student.findById(req.params.id)
      .then(student => res.json(student))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/:id').delete((req, res) => {
    Student.findByIdAndDelete(req.params.id)
      .then(() => res.json('Student deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports=router;