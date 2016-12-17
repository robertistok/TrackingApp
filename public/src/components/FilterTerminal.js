import React from 'react';
import DateTimePicker from 'react-bootstrap-datetimepicker';
import moment from 'moment';

export default class FilterTerminal extends React.Component {
  render() {
    const minDate = moment("2016-10-11", "YYYY-MM-DD");
    const maxDate = moment(new Date());
    return(
      <div className="form-group">
        <label>Start time</label>
        <DateTimePicker
           dateTime="1476160894000"
           onChange={this.props.changeStartDate}
           minDate={minDate}
           maxDate={maxDate} />
        <label>End time</label>
        <DateTimePicker
           onChange={this.props.changeEndDate}
           minDate={minDate}
           maxDate={maxDate} />
      </div>
    )
  }
}
