import React from 'react';
import { connect } from 'react-redux';

import FilterTerminal from '../components/FilterTerminal';
import { startDateChanged, endDateChanged } from '../actions/form';


const mapDispatchToProps = (dispatch) => {
  return {
    changeStartDate: (date) => {
      dispatch(startDateChanged(date));
    },

    changeEndDate: (date) => {
      dispatch(endDateChanged(date));
    }
  }
}

export default connect(null, mapDispatchToProps)(FilterTerminal)
