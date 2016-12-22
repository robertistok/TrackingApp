import React from 'react';
import { connect } from 'react-redux';
import TerminalList from '../components/TerminalList';
import { fetchSelectedsPositions, fetchSelectedsPositionsError, fetchSelectedsPositionsSucces } from '../actions/form';

class TerminalListContainer extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value)
    let id = event.target.value;
    this.props.fetchTerminals(id);
  }
  render() {
    return (
      <TerminalList {...this.props} handleChange={this.handleChange}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    terminalsList: state.devices.terminalsList,
    currentID: state.devices.selectedTerminal.id
  }
}

const mapDispatchToProps = (dispatch, state) => {
  return {
    fetchTerminals: (id) => {
      dispatch(fetchSelectedsPositions(id)).then((response) => {
        console.log(response);
        if(response.error) dispatch(fetchSelectedsPositionsError(response.payload));
        dispatch(fetchSelectedsPositionsSucces(response.payload))
      });
    },

    updateTerminals: (id) => {
      dispatch(fetchSelectedsPositions(id)).then((response) => {
        console.log(response);
        if(response.error) dispatch(fetchSelectedsPositionsError(response.payload));
        dispatch(fetchSelectedsPositionsSucces(response.payload))
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TerminalListContainer);
