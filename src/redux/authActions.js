// src/redux/authActions.js

import axios from 'axios';

// Define action types
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';


// Define action creators
export const login = (userData) => async (dispatch) => {

  try {

    // Make an API request to login
    const res = await axios.post('http://localhost:3004/api/login', userData);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

      return res

  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

export const register = (userData) => async (dispatch) => {

  try {
    // Make an API request to register
    const res = await axios.post('http://localhost:3004/api/register', userData);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });

    return res
    
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};
