// loginActions.js

import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT
  } from './loginActionTypes';
  
  export const loginRequest = () => {
    return {
      type: LOGIN_REQUEST
    };
  };
  
  export const loginSuccess = (user) => {
    return {
      type: LOGIN_SUCCESS,
      payload: user
    };
  };
  
  export const loginFailure = (error) => {
    return {
      type: LOGIN_FAILURE,
      payload: error
    };
  };
  
  export const logout = () => {
    return {
      type: LOGOUT
    };
  };
  