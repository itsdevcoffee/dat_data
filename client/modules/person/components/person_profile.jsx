import React from 'react';
import RealtorRelocationPerson from './../containers/realtor_relocation_person.js';
import GroupPerson from './../containers/group_person.js';
import RelocationPerson from './../containers/relocation_person.js';


class PersonProfile extends React.Component {
  render() {
  	const { person, loading } = this.props;
    const { Collections } = this.props.context();
  	console.log(this.props);

    let content = null;
    if(!loading) {
      if(person.type === "matchedRealtorRelocation" || person.type === "notMatchedRealtor") {
        content = <RealtorRelocationPerson person={person} />;
      } else if(person.type === "group") {
        content = <GroupPerson person={person} />
      } else {
        content = <RelocationPerson person={person}/>
      }
    }
    return (
      <section id="profile-wrapper">
        <div className="row text-center">
        	<h2>Person Profile</h2>
        </div>
        {content}
      </section>
    );
  }
}

export default PersonProfile;
