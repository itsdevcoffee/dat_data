import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';

class Register extends React.Component {
  render() {
    console.log(this.props);
    const {error, step} = this.props;
    return (
      <section id="register" className="container">
        <h2>DAT_DATA &nbsp;<i className="fa fa-database" aria-hidden="true"></i></h2>
        <div className="row">
          <div className="col s4 offset-s4 card-panel">
            <h4>Register</h4>
            <div className="row" style={{marginBottom: 0}}>
              <div className="col s12">
              <a href='/' className="backToLogin col s12">Back to Login</a>
              </div>
            </div>
            {error ? <p style={{color: 'red', fontSize: 10, marginBottom: 0}}>{error}</p> : null}
            {step}
            <div className="col s12">
              <form onSubmit={this.register.bind(this)} className="row">
                <div className="input-field col s12" style={{marginTop: 2}}>
                  <input type="text" ref="email" id="email" />
                  <label for="email">Email</label>
                </div>
                <div className="input-field col s12">
                  <input type="password" id="password" ref="password" />
                  <label for="password">Password</label>
                </div>
                <div className="input-field col s12">
                  <input type="password" ref="confirmPassword" />
                  <label for="confirmPassword">Confirm Email</label>
                </div>
                <RaisedButton label="Register" labelColor="white" backgroundColor="#0091ea"  default={true} type="submit" fullWidth={true} />
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
  register(event) {
    event.preventDefault();
    const {register} = this.props;
    const {email, password, confirmPassword} = this.refs;
    register(email.value, password.value, confirmPassword.value);
  }
}

export default Register;


<div class="row">
  <div class="col s12 m5">
    <div class="card-panel teal">
      <span class="white-text">I am a very simple card. I am good at containing small bits of information.
      I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
      </span>
    </div>
  </div>
</div>