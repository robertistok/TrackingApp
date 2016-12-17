import React from "react";

import Map from './Map';
import TerminalTableContainer from '../containers/TerminalTableContainer';

export default class TerminalStatus extends React.Component {
  render() {
      if (typeof this.props.isEmpty === 'undefined') {
        return (
          <div className="alert alert-info">
            <strong>Warning!</strong> Please select a terminal from the dropdown list.
          </div>)
      } else if (this.props.isEmpty === 0) {
          return (
            <div className="alert alert-danger">
              <strong>Warning!</strong> No terminal data for the selected period.
            </div>)
      } else {
        return (
          <div className="form-group">
            <TerminalTableContainer />
            <Map />
          </div>
        )
      }
  }
}
