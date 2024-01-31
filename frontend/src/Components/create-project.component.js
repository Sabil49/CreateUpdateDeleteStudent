// CreateStudent Component for add new student

// Import Modules
import React from "react";
import axios from "axios";
import ProjectForm from "./ProjectForm";
    
import store from "../store/store";
import { addStudent } from "../actions/studentActions";

// CreateStudent Component

class CreateStudent extends React.Component {
    constructor() {
        super();
        this.state = { name: "", email: "", rollno: "" };
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    // onSubmit handler
    onSubmit = (studentObject) => {

        axios
            .post("http://localhost:4000/student/createStudent", studentObject)
            .then((res) => {
                if (res.status === 200) {
                    alert("Student successfully created");
                    store.dispatch(addStudent(studentObject) );
                }
                else {
                 Promise.reject();
                }
    
            })
            .catch((err) => alert("Something went wrong"));
    };

    
        

    render() {
        return (
            <StudentForm initialValues={this.state} onSubmit={this.onSubmit} enableReinitialize>
                Create Student
            </StudentForm>
            )
    }

}

export default CreateStudent;
