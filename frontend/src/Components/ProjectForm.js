import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";

class ProjectForm extends React.Component {

    constructor(props) {
        super(props);
        }

    validationSchema = Yup.object().shape({
        projectName: Yup.string().required("Required"),
        completes: Yup.number().required("Required"),
        terminates: Yup.number().required("Required"),
        OQ: Yup.number().required("Required"),
        qualityTerm: Yup.string().required("Required"),
        numberofPartners: Yup.number().required("Required"),
        currentStatus: Yup.string().required("Required"),
        surveylink: Yup.string().required("Required"),
        testlink: Yup.string().required("Required"),
        client: Yup.string().required("Required"),
        cpi: Yup.number().required("Required"),
        countries: Yup.string().required("Required"),
        startDate: Yup.startDate().required("Required"),
        endDate: Yup.endDate().required("Required"),
        requiredCompletes: Yup.number().required("Required"),
        incidenceRate: Yup.number().required("Required"),
        LOI: Yup.number().required("Required"),
    });

    render() {
        return (
            <div className="form-wrapper">
                <Formik {...this.props} validationSchema={this.validationSchema}>
                    <Form>
                        <FormGroup>
                            <label htmlFor="projectName">Project Name:</label>
                            <Field name="projectName" type="text" className="form-control" />
                            <ErrorMessage name="projectName" className="d-block invalid-feedback" component="span" />
                        </FormGroup><br />
                        <FormGroup>
                            <label htmlFor="completes">Completes:</label>
                            <Field name="completes" type="number" className="form-control" />
                            <ErrorMessage name="completes" className="d-block invalid-feedback" component="span" />
                        </FormGroup><br />
                        <FormGroup>
                            <label htmlFor="terminates">Terminates</label>
                            <Field name="terminates" type="number" className="form-control" />
                            <ErrorMessage name="terminates" className="d-block invalid-feedback" component="span" />
                        </FormGroup><br />
                        <FormGroup>
                            <label htmlFor="OQ">OQ:</label>
                            <Field name="OQ" type="number" className="form-control" />
                            <ErrorMessage name="OQ" className="d-block invalid-feedback" component="span" />
                        </FormGroup><br />
                        <FormGroup>
                            <label htmlFor="qualityTerm">Quality Term:</label>
                            <Field name="qualityTerm" type="text" className="form-control" />
                            <ErrorMessage name="qualityTerm" className="d-block invalid-feedback" component="span" />
                        </FormGroup><br />
                        <FormGroup>
                            <label htmlFor="numberofPartners">Number of Partners:</label>
                            <Field name="numberofPartners" type="number" className="form-control" />
                            <ErrorMessage name="numberofPartners" className="d-block invalid-feedback" component="span" />
                        </FormGroup><br /> <FormGroup>
                            <label htmlFor="currentStatus">Current Status:</label>
                            <Field name="currentStatus" type="text" className="form-control" />
                            <ErrorMessage name="currentStatus" className="d-block invalid-feedback" component="span" />
                        </FormGroup><br /> <FormGroup>
                            <label htmlFor="surveylink">Surveylink:</label>
                            <Field name="surveylink" type="text" className="form-control" />
                            <ErrorMessage name="surveylink" className="d-block invalid-feedback" component="span" />
                        </FormGroup><br />
                        <FormGroup>
                            <label htmlFor="testlink">Testlink:</label>
                            <Field name="testlink" type="text" className="form-control" />
                            <ErrorMessage name="testlink" className="d-block invalid-feedback" component="span" />
                        </FormGroup><br /> <FormGroup>
                            <label htmlFor="client">Client:</label>
                            <Field name="client" type="text" className="form-control" />
                            <ErrorMessage name="client" className="d-block invalid-feedback" component="span" />
                        </FormGroup><br /> <FormGroup>
                            <label htmlFor="cpi">CPI:</label>
                            <Field name="cpi" type="number" className="form-control" />
                            <ErrorMessage name="cpi" className="d-block invalid-feedback" component="span" />
                        </FormGroup><br /> <FormGroup>
                            <label htmlFor="countries">Countries:</label>
                            <Field name="countries" type="text" className="form-control" />
                            <ErrorMessage name="countries" className="d-block invalid-feedback" component="span" />
                        </FormGroup><br /> <FormGroup>
                            <label htmlFor="startDate">Start Date:</label>
                            <Field name="startDate" type="date" className="form-control" />
                            <ErrorMessage name="startDate" className="d-block invalid-feedback" component="span" />
                        </FormGroup><br /> <FormGroup>
                            <label htmlFor="endDate">End Date:</label>
                            <Field name="endDate" type="date" className="form-control" />
                            <ErrorMessage name="endDate" className="d-block invalid-feedback" component="span" />
                        </FormGroup><br /> <FormGroup>
                            <label htmlFor="requiredCompletes">Required Completes:</label>
                            <Field name="requiredCompletes" type="number" className="form-control" />
                            <ErrorMessage name="requiredCompletes" className="d-block invalid-feedback" component="span" />
                        </FormGroup><br /> <FormGroup>
                            <label htmlFor="incidenceRate">Incidence Rate:</label>
                            <Field name="incidenceRate" type="number" className="form-control" />
                            <ErrorMessage name="incidenceRate" className="d-block invalid-feedback" component="span" />
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

    
   
export default ProjectForm;
