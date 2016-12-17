import React from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header';
import { logOutUser } from '../actions/login';

const mapStateToProps = (state) => {
  return {
    user: state.users.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => {
      sessionStorage.removeItem('jwtToken');
      dispatch(logOutUser);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
