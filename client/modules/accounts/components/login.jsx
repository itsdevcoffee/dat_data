import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';

const Login = ({error, login}) => (
  <section id="login" className="container">
    <h2>DAT_DATA &nbsp;<i className="fa fa-database" aria-hidden="true"></i></h2>
    <div className="row">
      <div className="col s4 offset-s4 card-panel">
        <h4>Login</h4>
        <div className="row" style={{marginBottom: 0}}>
          <div className="col s12">
            <a href="/register" className="backToRegister col s12">Register Account</a>
          </div>
        </div>
        <p style={{color: 'red', fontSize: 10, marginBottom: 0}}>{error ? error : null}</p>
        <form onSubmit={login}>
          <div className="input-field col s12" style={{padding: 12}}>
            <input type="text" id="email" />
            <label for="email">Email</label>
          </div>
          <div className="input-field col s12" style={{padding: 12}}>
            <input type="password" id="password" />
            <label for="email">Password</label>
          </div>
          <RaisedButton label="Login" labelColor="white" backgroundColor="#3f51b5"  default={true} type="submit" fullWidth={true} />
        </form>
      </div>
    </div>
  </section>
);

export default Login;
