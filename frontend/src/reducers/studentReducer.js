import { ADD_STUDENT, EDIT_STUDENT, DELETE_STUDENT } from '../actions/actionTypes';

const initialState = {
    students: [],
    editStudent: null
};

const addStudent = (state, action) => {
    return { ...state, students: state.students.concat(action.student) }
}

const editStudent = (state, action) => {
    return { ...state, editStudent: action.editStudent }
}

const deleteStudent = (state, action) => {
    const removeStudent = state.students.filter((student, index) => index !== action.index);
    return { ...state, students: removeStudent };
}

const studentReducer = (state = initialState, action) => {
  switch(action.type) {
      case ADD_STUDENT: return addStudent(state, action);
      case EDIT_STUDENT: return editStudent(state, action);
      case DELETE_STUDENT: return deleteStudent(state, action);
      default: return state;  

  }
};

export default studentReducer;
