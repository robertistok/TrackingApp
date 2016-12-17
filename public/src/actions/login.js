import axios from 'axios';

export const SIGNIN_USER = "SIGNIN_USER";
export const SIGNIN_USER_SUCCES = "SIGNIN_USER_SUCCES";
export const SIGNIN_USER_ERROR = "SIGNIN_USER_ERROR";
export const LOGOUT_USER = "LOGOUT_USER";
export const ME_FROM_TOKEN = "ME_FROM_TOKEN";
export const ME_FROM_TOKEN_SUCCES = "ME_FROM_TOKEN_SUCCES";
export const ME_FROM_TOKEN_ERROR = "ME_FROM_TOKEN_ERROR";

const ROOT_URL = location.href.indexOf('localhost') > 0 ? 'http://localhost:3000/users' : '/users';

export function signInUser(formValues) {
  const request = axios({
    method: 'post',
    url: `${ROOT_URL}/signin`,
    data: formValues,
    headers: []
  });
  return {
    type: SIGNIN_USER,
    payload: request
  };
}

export function signInUserSucces(user) {
  return {
    type: SIGNIN_USER_SUCCES,
    payload: user
  };
}

export function signInUserError(error) {
  return {
    type: SIGNIN_USER_ERROR,
    payload: error
  };
}

export function meFromToken(token) {
  const request = axios({
    method: 'get',
    url: `${ROOT_URL}/mefromtoken?token=${token}`,
    headers: []
  });
  return {
    type: ME_FROM_TOKEN,
    payload: request
  };
}

export function meFromTokenSucces(user) {
  return {
    type: ME_FROM_TOKEN_SUCCES,
    payload: user
  };
}

export function meFromTokenError(error) {
  return {
    type: ME_FROM_TOKEN_ERROR,
    payload: error
  }
}

export function logOutUser() {
  return {
    type: LOGOUT_USER
  };
}
