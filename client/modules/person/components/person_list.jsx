import React from 'react';

class PersonList extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {
  		search: "",
  		field: ""
  	};
  }
  render() {
  	const { people, loading } = this.props;
  	const { search } = this.state;
  	console.log(this.props); 

  	let list;
  	if(!loading) {
  		list = people.map((person) => {
  			if(person.type === "matchedRealtorRelocation") {
  				if(person.clientName.toLowerCase().includes(search.toLowerCase()) || person.email.toLowerCase().includes(search.toLowerCase())) {
  					return (
              <div className="col s6 text-center">
                <div className="card-panel" style={{height: 188}}>
                {person.email ? <p>Email: {person.email}</p> : null }
                {person.memeberEmail ? <p>Member Email: {person.memeberEmail}</p> : null }
                {person.clientName ? <p>Client Name: {person.clientName}</p> : null }
                {person.type ? <p>Type: Realtor and Relocation </p> : null}
                <a href={`/personProfile/${person._id}`} className="waves-effect waves-teal btn-flat" style={{color: "green"}}>More Info</a>
                </div>
              </div>
  					);
  				}
  			}
  			if(person.type === "group") {
  				if(person.memeberEmail.toLowerCase().includes(search.toLowerCase())) {
  					return (
              <div className="col s6 text-center">
                <div className="card-panel" style={{height: 188}}>
                {person.email ? <p>Email: {person.email}</p> : null }
                {person.memeberEmail ? <p>Member Email: {person.memeberEmail}</p> : null }
                {person.clientName ? <p>Client Name: {person.clientName}</p> : null }
                {person.type ? <p>Type: Facebook Group </p> : null}
                <a href={`/personProfile/${person._id}`} className="waves-effect waves-teal btn-flat" style={{color: "green"}}>More Info</a>
                </div>
              </div>
  					);
  				}
  			}
  			if(person.type === "notMatchedRelocation") {
  				if(person.email.toLowerCase().includes(search.toLowerCase())) {
  					return (
              <div className="col s6 text-center">
                <div className="card-panel" style={{height: 188}}>
                {person.email ? <p>Email: {person.email}</p> : null }
                {person.memeberEmail ? <p>Member Email: {person.memeberEmail}</p> : null }
                {person.clientName ? <p>Client Name: {person.clientName}</p> : null }
                {person.type ? <p>Type: Relocation</p> : null}
                <a href={`/personProfile/${person._id}`} className="waves-effect waves-teal btn-flat" style={{color: "green"}}>More Info</a>
                </div>
              </div>
  					);
  				}
  			}
  			if(person.type === "notMatchedRealtor") {
  				if(person.clientName.toLowerCase().includes(search.toLowerCase())) {
  					return (
              <div className="col s6 text-center">
                <div className="card-panel" style={{height: 188}}>
                {person.email ? <p>Email: {person.email}</p> : null }
                {person.memeberEmail ? <p>Member Email: {person.memeberEmail}</p> : null }
                {person.clientName ? <p>Client Name: {person.clientName}</p> : null }
                {person.type ? <p>Type: Realtor </p> : null}
                <a href={`/personProfile/${person._id}`} className="waves-effect waves-teal btn-flat" style={{color: "green"}}>More Info</a>
                </div>
              </div>
  					);
  				}
  			}
  			if(!search) {
  				return (
            <div className="col s6 text-center">
              <div className="card-panel" style={{height: 188}}>
              {person.email ? <p>Email: {person.email}</p> : null }
              {person.memeberEmail ? <p>Member Email: {person.memeberEmail}</p> : null }
              {person.clientName ? <p>Client Name: {person.clientName}</p> : null }
              {person.type ? <p>Type: {person.type} </p> : null}
              <a href={`/personProfile/${person._id}`} className="waves-effect waves-teal btn-flat" style={{color: "green"}}>More Info</a>
              </div>
            </div>
  				);
  			}
  		});
  	} else {
  		list = <p className="text-center">Loading...</p>
  	}
    return (
      <section id="personList">
        <h2 className="text-center">People List</h2>
        <div className="row">
        	<div className="col offset-s3 s6">
        		<input value={this.state.search} onChange={this.onChange.bind(this)} ref="person" placeholder="Search person..." />
        	</div>
        	{list}
        </div>
      </section>
    );
  }
  onChange(event) {
  	const { value } = this.refs.person;
  	this.setState({search: value});
  }
}

export default PersonList;
