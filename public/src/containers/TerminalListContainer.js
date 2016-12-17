import React from 'react';
import { connect } from 'react-redux';
import TerminalList from '../components/TerminalList';
import { fetchSelectedsPositions, fetchSelectedsPositionsError, fetchSelectedsPositionsSucces } from '../actions/form';

const mapStateToProps = (state) => {
  return {
    terminalsList: state.devices.terminalsList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTerminals: (event) => {
      let id = event.target.value;
      dispatch(fetchSelectedsPositions(id)).then((response) => {
        if(response.error) dispatch(fetchSelectedsPositionsError(response.payload));
        dispatch(fetchSelectedsPositionsSucces(response.payload))
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TerminalList);
