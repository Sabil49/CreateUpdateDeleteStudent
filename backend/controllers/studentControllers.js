const Student = require("../models/student");
const Class = require("../models/class");
const asyncHandler = require("express-async-handler");
 //@desc		create todo
 //@route		POST /createTodo
 //@access		public

 //CREATE Student


const createStudent = asyncHandler(async (req, res) => { 
console.log("createStudent");   
    try {
        Student.create(req.body, (error, data) => {
            if (error) {
                res.status(400);
            } else {
                res.status(200).json(data);
            }
        });
    } catch (err) {
        res.status(500);
        throw new Error("Server could not work on the request");
    }
});

// Get All Student
const getAllStudent = asyncHandler(async (req, res) => {
    try {
       
        const allClasses = await Student.find();
        res.status(200).send(allClasses);
    }
    catch (err) {
        res.status(500);
        throw new Error("Server could not work on the request");
    }
});

// UPDATE student
const updateStudent = asyncHandler(async (req, res) => {
    try {
        Student.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            (error, data) => {
                if (error) {
                    return res.status(400);
                } else {
                    res.status(200).json(data);
                }
            }
        );
    } catch (err) {
        res.status(500);
        throw new Error("Server could not work on the request");
    }
});

// Get Single Student
const getSingleStudent = asyncHandler(async (req, res) => {
    try {
        Student.findById(req.params.id, (error, data) => {
            if (error) {
                return res.status(400);
            } else {
                res.status(200).json(data);
            }
            });
        } 
catch (err) {
        res.status(500);
        throw new Error("Server could not work on the request");
    }
});

const deleteStudent = asyncHandler(async (req, res) => {
    try {
        Student.findByIdAndRemove(req.params.id, (error, data) => {
            if (error) {
                return res.status(400);
            } else {
                res.status(200).json({
                    msg: data,
                });
            }
        });
    }
    catch (err) {
        res.status(500);
        throw new Error("Server could not work on the request");
    }
});


module.exports = { createStudent, getAllStudent, getSingleStudent, updateStudent, deleteStudent };