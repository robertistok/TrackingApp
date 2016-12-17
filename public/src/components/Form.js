import React from 'react';

import TerminalListContainer from '../containers/TerminalListContainer';
import TerminalTableContainer from '../containers/TerminalTableContainer';
import HeaderContainer from '../containers/HeaderContainer';
import FilterTerminalContainer from '../containers/FilterTerminalContainer';
import Map from './Map';
import TerminalStatus from './TerminalStatus';

export default class Form extends React.Component {
  componentWillMount() {
    this.props.getTerminals();
  }

  render() {
    return (
      <div className="container" style={{width: "50%", minWidth: "600px"}}>
        <HeaderContainer />
        <TerminalListContainer />
        <FilterTerminalContainer />
        <TerminalStatus isEmpty={this.props.filteredTerminal.length} />
      </div>
    )
  }
}
