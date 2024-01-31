import React from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import StudentTableRow from "./StudentTableRow";

import { connect } from 'react-redux';
import store from "../store/store";


class StudentList extends React.Component {
    constructor() {
        super();
        this.DataTable = this.DataTable.bind(this);
    }

    
    /*componentDidMount() {
        axios
            .get("http://localhost:4000/student/allStudents/")
            .then((res) => {
                this.setState({ students: res.data });
                console.log(res.data);
            })
            .catch((error) => {
                alert("error");
                console.log("Error => " + error);
            });
    }*/
     
    DataTable = () => {
        return this.props.students.map((res, i) => {
            return <StudentTableRow obj={res} key={i} />;
        });
    };

    render() {
        return (
            <div className="table-wrapper">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Roll No</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>{this.DataTable()}</tbody>
                </Table>
            </div>
        );
    }    
};

const mapStateToProps = (store) => {
    return {
        students: store.students
    }
}

export default connect(mapStateToProps)(StudentList);
