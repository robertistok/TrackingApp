import React from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';

const HeaderDiv = styled.div`
  margin-bottom: 15px;
  margin-top: 5px;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #DCD0C0;
  position: relative;
`;

const Button = styled.button`
  background-color: #925b59;
  color: #fff;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
`;

export default class Header extends React.Component {
  render() {
    const { user, logOut } = this.props;

    if (user === null) return null;

    return (
      <HeaderDiv>
        <span className="alert">Welcome back <strong>{user.username}</strong>, feel free to track the following devices!</span>
        <Link to="/">
          <Button type="button" className="btn" onClick={logOut}>
            <span className="glyphicon glyphicon-log-out"></span> Log out
            </Button>
          </Link>
        </HeaderDiv>)
  }
}
