import React from 'react';
import { Field, reduxForm } from 'redux-form';

class LoginForm extends React.Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="container">
        <form onSubmit={handleSubmit(this.props.loginUser)}>
          <div className="form-group">
            <label>Username</label>
            <Field name="username" component="input" type="text" placeholder="Username" className="form-control"   />
          </div>

          <div className="form-group">
            <label>Password</label>
            <Field name="password" component="input" type="password" placeholder="Password" className="form-control" />
          </div>

          <div className="form-group">
            <input type="submit" value="Login" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'loginform'
})(LoginForm);
