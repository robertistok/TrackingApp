import React from 'react';

export default class App extends React.Component {
  componentWillMount() {
      this.props.loadUserFromToken();
  }

  componentDidMount() {
    document.body.style.backgroundColor = "#F4F4F4"

  }

  render() {
    return(
      <div>
        {this.props.children}
      </div>
    );
  }
}
