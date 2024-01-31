const mongoose = require("mongoose");

let studentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        email: {
            type: String,
        },
        rollno: {
            type: Number,
        },
    },
    {
        timestamps: true,
    }
);

const Student = mongoose.model("students", studentSchema);
module.exports = Student;