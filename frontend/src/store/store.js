import { createStore } from 'redux';
import studentReducer from '../reducers/studentReducer';

export default createStore(studentReducer);
