import React from "react";
import axios from "axios";
import StudentForm from "./StudentForm";
import { useParams } from "react-router-dom";

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}

class EditStudent extends React.Component {

    constructor(props) {
        super(props);
        this.state = { name: "", email: "", rollno: "" };
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit = (studentObject) => {
        let { id } = this.props.params;
        axios
            .put(`http://localhost:4000/student/updateStudent/${id}`, studentObject)
            .then((res) => {
                if (res.status === 200) {
                    alert("Student successfully updated");
                   
                } else Promise.reject();
            })
            .catch((err) => alert("Something went wrong"));
    };



    componentDidMount() {

        let { id } = this.props.params;
        axios
            .get(`http://localhost:4000/student/getStudent/${id}`)
            .then((res) => {
                const { name, email, rollno } = res.data;
                this.setState({ name: name, email: email, rollno: rollno });

            })
            .catch((err) => console.log(err));
    }

    render() {
        return (
            <StudentForm initialValues={this.state} onSubmit={this.onSubmit} enableReinitialize>
                Update Student
            </StudentForm>
        );
    }

}
export default withParams(EditStudent);
