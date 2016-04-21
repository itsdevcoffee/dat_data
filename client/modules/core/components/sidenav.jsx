import React from 'react';

class Sidenav extends React.Component {
  render() {
    console.log(this.props);
    const { data, loading } = this.props;
    let content;
    if(!loading) {
      if(!data) {
        content = (
          <div>
            <a className="col s12" href="/upload">Upload</a>
          </div>
        );
      } else {
        content = (
          <div>
            <a className="col s12" href="/dashboard">Dashboard</a>
            <a className="col s12" href="/upload">Upload</a>
            <a className="col s12" href="/personList">Search Person</a>
            <a className="col s12" href="/dashboard">Relocation</a>
            <a className="col s12" href="/dashboard">Interests</a>
          </div>
        );
      }
    }
    return (
      <section id="sidenav">
    	<h5>DAT_DATA &nbsp;<i className="fa fa-database" aria-hidden="true"></i></h5>
        <div className="row">
        	{content}
        	<a className="col s12" onClick={this.logout.bind(this)}>Logout</a>
        </div>
      </section>
    );
  }
  logout() {
    const { Meteor, FlowRouter } = this.props.context();
    Meteor.logout(() => {
      FlowRouter.go('/');
    });
  }
}

export default Sidenav;
