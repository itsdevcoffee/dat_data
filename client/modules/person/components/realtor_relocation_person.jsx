import React from 'react';

class RealtorRelocationPerson extends React.Component {
  render() {
  	const { person, loading, suggestedPlaces } = this.props;
      let places;
      console.log(this.props);
      if(!loading) {
        places = suggestedPlaces.map((place, i) => {
          return (
            <div className="row card-panel">
              <h5>Suggested Places</h5>
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
      <div className="row">
      	<h5 className="text-center">This person is working with a realtor as of {person.walkthroughDate}</h5>
      	<div className="col s12 text-center card-panel">
          <div className="row">
            <div className="col s6">
                <h5>Person Info</h5>
                <p>Client Name: {person.clientName}</p>
                {person.email ? <p>Email: {person.email}</p> : null}
                <p>Cell: {person.clentCell}</p>
                <p>Work Phone: {person.workPhone}</p>
                {person.email ? <h6>Relocation:</h6> : null }
                {person.southSide ? <p>South Side</p> : null}
                {person.downtownHouston ? <p>Downtown Houston</p> : null}
                {person.energyCorridor ? <p>Energy Corridor</p> : null}
                {person.greenwayPlaza ? <p>Greenway Plaza</p> : null}
                {person.midtown ? <p>Midtown</p> : null}
                {person.museumDistrict ? <p>Museum District</p> : null}
                {person.northside ? <p>Northside</p> : null}
                {person.southeast ? <p>Southeast</p> : null}
                {person.southwest ? <p>Southwest</p> : null}
                {person.texasMedicalCenter ? <p>Texas Medical Center</p> : null}
            </div>
            <div className="col s6">
              <h5>Realtor Info</h5>
              <p>Realtor Name: {person.realtor}</p>
              <p>Office: {person.realtorOffice}</p>
              <p>Cell: {person.realtorCell}</p>
              <h5>Place Info</h5>
              <p>Property Name: {person.propertyName}</p>
              <p>Area of Town: {person.propertyAreaOfTown}</p>
              <p>Walkthrough Date: {person.walkthroughDate}</p>
              <h6>Interests in Area:</h6>
              {person.running ? <p>Running</p> : null}
              {person.liveMusic ? <p>Live Music</p> : null}
              {person.nightlife ? <p>Nightlife</p> : null}
              {person.outdoorSports ? <p>Outdoor Sports</p> : null}
              {person.shopping ? <p>Shopping</p> : null}
              {person.waterSports ? <p>Water Sports</p> : null}
            </div>
          </div>
      	</div>
        <div className="col s12 text-center">
          {places}
        </div>
      </div>
    );
  }
}

export default RealtorRelocationPerson;
