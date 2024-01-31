import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";

class StudentForm extends React.Component {

    constructor(props) {
        super(props);
        }

    validationSchema = Yup.object().shape({
        name: Yup.string().required("Required"),
        email: Yup.string().email("You have enter an invalid email address").required("Required"),
        rollno: Yup.number().positive("Invalid roll number").integer("Invalid roll number").required("Required"),
    });

    render() {
        return (
            <div className="form-wrapper">
                <Formik {...this.props} validationSchema={this.validationSchema}>
                    <Form>
                        <FormGroup>
                            <label htmlFor="name">Name:</label>
                            <Field name="name" type="text" className="form-control" />
                            <ErrorMessage name="name" className="d-block invalid-feedback" component="span" />
                        </FormGroup><br />
                        <FormGroup>
                            <label htmlFor="email">Email:</label>
                            <Field name="email" type="text" className="form-control" />
                            <ErrorMessage name="email" className="d-block invalid-feedback" component="span" />
                        </FormGroup><br />
                        <FormGroup>
                            <label htmlFor="rollno">Roll No:</label>
                            <Field name="rollno" type="number" className="form-control" />
                            <ErrorMessage name="rollno" className="d-block invalid-feedback" component="span" />
                        </FormGroup><br />
                        <Button variant="danger" size="lg" block="block" type="submit">
                            {this.props.children}
                        </Button>
                    </Form>
                </Formik>
            </div>
        );
    }
}

    
   
export default StudentForm;
