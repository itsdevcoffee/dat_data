import React from 'react';

class GroupPerson extends React.Component {
  render() {
  	const { person, loading, matchQuality, suggestPlaces } = this.props;
    console.log(this.props);
    let places;
    if(!loading) {
      places = suggestPlaces.map((place, i) => {
        return (
          <div className="row card-panel">
            <div className="col s4">
              <p>Realtor: {place.realtor}</p>
              <p>Realtor Cell: {place.realtorCell}</p>
              <p>Realtor Office: {place.realtorOffice}</p>
            </div>
            <div className="col s4">
              <p>Id: {i + 1}</p>
              <p>Property Name: {place.propertyName}</p>
              <p>Area of Town: {place.propertyAreaOfTown}</p>
              
            </div>
            <div className="col s4">
              <h6>Interests in the Area:</h6>
              {person.running ? <p>Running</p> : null}
              {person.liveMusic ? <p>Live Music</p> : null}
              {person.nightlife ? <p>Nightlife</p> : null}
              {person.outdoorSports ? <p>Outdoor Sports</p> : null}
              {person.shopping ? <p>Shopping</p> : null}
              {person.waterSports ? <p>Water Sports</p> : null}
            </div>
          </div>
        );
      });
    }
    return (
      <div className="row text-center">
      	<div className="col s12">
          <div className="card-panel">
            <h5>Group Member</h5>
            <p>Email: {person.memeberEmail}</p>
            <p>Group Name: {person.groupName}</p>
            <h6>Group Interests: {person.groupInterests}</h6>
          </div>
      	</div>
        <div className="col s12">
          <div className="card-panel">
            <h5>Suggested Locations</h5>
            <h6>Match Quality: {matchQuality}</h6>
          </div>
          {places}
        </div>
      </div>
    );
  }
}

export default GroupPerson;
