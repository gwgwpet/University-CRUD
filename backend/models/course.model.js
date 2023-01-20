const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const courseSchema = new Schema({
  description: { type: String, required: true },
  professor: { type: String, required: true },
  semester: { type: Number , required: true },
  student:{type: String, required: true}

}, {
  timestamps: true,
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;