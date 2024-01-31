import { ADD_STUDENT, EDIT_STUDENT, DELETE_STUDENT } from './actionTypes';

export const addStudent = (student) => {
  return {
    type: ADD_STUDENT,
    student: student
  };
};


export const editStudent = (student) => {
    return {
        type: EDIT_STUDENT,
        student: student
    };
};


export const deleteStudent = (student) => {
    return {
        type: DELETE_STUDENT,
        student: student
    };
};