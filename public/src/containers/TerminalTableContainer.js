import React from 'react';
import { connect } from 'react-redux';
import TerminalTable from '../components/TerminalTable';

const mapStateToProps = (state) => {
  return {
    selectedTerminal: state.devices.selectedTerminal,
    filteredTerminal: state.devices.filteredTerminal
  }
}

export default connect(mapStateToProps)(TerminalTable);
