import { connect } from 'react-redux';
import React from 'react';
import { browserHistory } from 'react-router';

import LoginForm from '../components/LoginForm';
import { signInUser, signInUserSucces, signInUserError } from '../actions/login'

const mapDispatchToProps =  (dispatch) => {
  return {
    loginUser: (values) => {
      dispatch(signInUser(values)).then((result) => {
        if (result.payload.response && result.payload.response.status !== 200) {
          dispatch(signInUserError(result.payload.response.data));
          alert(result.payload.response.data.message);
          throw new Error(result.payload.response.data.message);
        }
        sessionStorage.setItem("jwtToken", result.payload.data.token);

        dispatch(signInUserSucces(result.payload.data));
        browserHistory.push('/terminals');
      });
    }
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.users
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
