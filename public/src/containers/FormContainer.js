import React from 'react';
import { connect } from 'react-redux';

import Form from '../components/Form';
import { fetchTerminals, fetchTerminalsSucces, fetchTerminalsError } from '../actions/form';

const mapStateToProps = (state) => {
  return {
    selectedTerminal: state.devices.selectedTerminal,
    filteredTerminal: state.devices.filteredTerminal,
    user: state.users
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getTerminals: () => {
      dispatch(fetchTerminals()).then((response) => {
        !response.error ? dispatch(fetchTerminalsSucces(response.payload)) : dispatch(fetchTerminalsError(response.payload));
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
