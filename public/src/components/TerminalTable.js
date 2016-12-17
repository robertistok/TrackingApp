import React from 'react';
import { Table, Thead, Tr, Th, Td } from 'reactable';

export default class TerminalTable extends React.Component {
  renderTerminals(data, i) {
    return (
      <Tr key={i} onClick={alert}>
        <Td column ="updated">{data.updatedAt}</Td>
        <Td column="lat">{data.latitude}</Td>
        <Td column="lng">{data.longtitude}</Td>
      </Tr>
    )
  }

  render() {
    const { selectedTerminal, filteredTerminal } = this.props;
    return(
      <div>
        <h4>Position list for terminal {selectedTerminal.id}</h4>
        <Table className="table table-hover" itemsPerPage={5} pageButtonLimit={10}>
          <Thead>
            <Th column="updated">Updated</Th>
            <Th column="lat">Latitude</Th>
            <Th column="lng">Longtitude</Th>
          </Thead>
            {filteredTerminal.map((data, i) => this.renderTerminals(data, i))}
        </Table>
      </div>
    )
  }
}
