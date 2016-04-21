import React from 'react';
class RelocationPerson extends React.Component {
  render() {
  	console.log(this.props);
  	const { person, loading, suggestedPlaces } = this.props;
  	let places;
  	if(!loading) {
  	  places = suggestedPlaces.map((place, i) => {
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
              {place.running ? <p>Running</p> : null}
              {place.liveMusic ? <p>Live Music</p> : null}
              {place.nightlife ? <p>Nightlife</p> : null}
              {place.outdoorSports ? <p>Outdoor Sports</p> : null}
              {place.shopping ? <p>Shopping</p> : null}
              {place.waterSports ? <p>Water Sports</p> : null}
            </div>
          </div>
  	    );
  	  });
  	}
    return (
      <div className="row text-center">
      	<div className="col s12 card-panel">
      		<p>Email: {person.email}</p>
      		<p>Phone: {person.phoneNumber}</p>
      		<h6>Relocation:</h6>
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
      	<div className="col s12">
          <h5>Suggested Places</h5>
      		{places}
      	</div>
      </div>
    );
  }
}

export default RelocationPerson;
