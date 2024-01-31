import React from "react";
import {Button } from "react-bootstrap";
import {Link} from "react-router-dom";
import axios from "axios";

import store from "../store/store";
import { deleteStudent } from "../actions/studentActions";

class StudentTableRow extends React.Component {

    constructor(props) {
        super(props);
       }
        
    deleteStudent = (id, index) => {
        alert(index)
        axios
            .delete(`http://localhost:4000/student/deleteStudent/${id}`)
            .then((res) => {
                if (res.status === 200) {
                    alert("Student successfully deleted");
                    store.dispatch(deleteStudent(index) );
                    window.location.reload();
                } else Promise.reject();
            })
            .catch((err) => alert("Something went wrong"));
    };

    render() {
        return (
            <tr>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.email}</td>
                <td>{this.props.obj.rollno}</td>
                <td>
                    <Link className="edit-link" to={`/edit-student/${this.props.obj._id}`}>
                        Edit
                    </Link>
                    <Button onClick={() => { this.deleteStudent(this.props.obj._id, this.props.obj.index) }} size="sm" variant="danger">
                        Delete
                    </Button>
                </td>
            </tr>
        );
    }
};

export default StudentTableRow;
