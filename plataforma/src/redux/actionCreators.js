/* eslint-disable no-undef */
import Axios from 'axios';
import {
  GET_ALL_COURSES,
  GET_ALL_POSTS,
  GET_ALL_SPECIALITIES,
  GET_ALL_TEACHERS,
  GET_POST,
  GET_FRAGMENT,
  GET_COURSE,
  GET_SPECIALITY
} from './actions';

const API_URL = process.env.REACT_APP_API_URL;

export const getAllPost = () => (dispatch) => {
  Axios.get(`${API_URL}/post`)
    .then((resp) => dispatch({
      type: GET_ALL_POSTS,
      posts: resp.data
    }));
};

export const getAllSpecialities = () => (dispatch) => {
  Axios.get(`${API_URL}/especialidades`)
    .then((resp) => dispatch({
      type: GET_ALL_SPECIALITIES,
      specialities: resp.data
    }));
};

export const getAllCourses = () => (dispatch) => {
  Axios.get(`${API_URL}/cursos`)
    .then((resp) => dispatch({
      type: GET_ALL_COURSES,
      courses: resp.data
    }));
};

export const getAllTeachers = () => (dispatch) => {
  Axios.get(`${API_URL}/profesores`)
    .then((resp) => dispatch({
      type: GET_ALL_TEACHERS,
      teachers: resp.data
    }));
};

export const getPost = () => (dispatch) => {
  Axios.get(`${API_URL}/post/${id}`)
    .then((resp) => dispatch({
      type: GET_POST,
      post: resp.data
    }));
};
export const getSpeciality = () => (dispatch) => {
  Axios.get(`${API_URL}/especialidades/${id}`)
    .then((resp) => dispatch({
      type: GET_SPECIALITY,
      speciality: resp.data
    }));
};
export const getCourse = () => (dispatch) => {
  Axios.get(`${API_URL}/cursos/${id}`)
    .then((resp) => dispatch({
      type: GET_COURSE,
      course: resp.data
    }));
};
export const getFragment = () => (dispatch) => {
  Axios.get(`${API_URL}/clases/${id}`)
    .then((resp) => dispatch({
      type: GET_FRAGMENT,
      fragment: resp.data
    }));
};
