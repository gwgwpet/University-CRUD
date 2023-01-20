const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const studentSchema = new Schema(
    {
        username:{
            type: String,
            required: true,
            unique: true,
            trim:true,
            minlegth: 3,
            maxlegth: 15
        },
        password:{
            type: String,
            required: true,
            unique: false,
            trim:true,
            minlegth: 8,
            maxlegth: 15
        },

    },{
        timestamps:true,
    }
    
);

const Student = mongoose.model('Student', studentSchema);
module.exports= Student;