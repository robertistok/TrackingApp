import React from 'react';

export default class TerminalList extends React.Component {
  render() {
    const { fetchTerminals, terminalsList } = this.props;
    return(
      <div className="form-group">
        <label htmlFor='terminalID'>Select a terminal</label>
        <select className="form-control" onChange={fetchTerminals} id='terminalID' defaultValue="def">
          <option value="def" disabled>Select a device</option>
          {
            terminalsList.terminals.map(function(terminal) {
              return <option key={terminal}>{terminal}</option>
            })
          }
        </select>
      </div>
    )
  }
}
