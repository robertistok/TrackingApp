import React from 'react';
import { connect } from 'react-redux';

import { meFromToken, meFromTokenSucces, meFromTokenError } from '../actions/login';

import App from '../components/App';

const mapDispatchToProps = (dispatch) => {
  return {
    loadUserFromToken: () => {
      let token = sessionStorage.getItem('jwtToken');

      if(!token || token === '') return

      dispatch(meFromToken(token)).then((result) => {
        if (!result.error) {
          sessionStorage.setItem('jwtToken', result.payload.data.token);
          dispatch(meFromTokenSucces(result.payload.data.user));
        } else {
          sessionStorage.removeItem('jwtToken');
          dispatch(meFromTokenError(result.payload))
        }
      });
    }
  }
}

export default connect(null, mapDispatchToProps)(App)
