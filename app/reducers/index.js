import axios from 'axios'

<<<<<<< HEAD
import {combineReducers} from 'redux'
import campusReducer from './campus';
=======
const initialState = {
    campuses: [],
    students: []
  }

  //Action Types
const GET_STUDENTS = 'GET_STUDENTS'
const GET_CAMPUSES = 'GET_CAMPUSES';

//action creators
export const gotStudentsFromServer = (students) => ({
  type: GET_STUDENTS,
  students
})
>>>>>>> fe65c9bbb753616e2a9231006db1175c150d848e

//Action creators
export const gotCampusesFromServer = (campuses) => ({
  type: GET_CAMPUSES,
  campuses
})

//thunk creators
export const fetchCampuses = () => {
  return (async (dispatch) => {
    const responce = await axios.get('/api/campuses');
    const campuses = responce.data;
    const action = gotCampusesFromServer(campuses);
    dispatch(action)
  })
}

//thunk creator
export const fetchStudents = () => {
  return (async (dispatch) => {
    const response = await axios.get('/api/students');
    const students = response.data;
    const action = gotStudentsFromServer(students);
    dispatch(action)
  })
}

const rootReducer = (state = initialState, action) => {

  switch (action.type) {

    case GET_CAMPUSES:
      return {...state, campus: action.campuses}

    case GET_STUDENTS:
      return {...state, students: action.students}

    default:
          return state
  }
}

export default rootReducer
