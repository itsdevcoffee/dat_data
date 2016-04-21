import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import RelocationPie from '../components/relocation_pie.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  let loading = true;

  if(Meteor.subscribe('data.groups').ready()) {
  	const downtownHoustonNum = Collections.Relocation.find({downtownHouston: true}).count();
  	const energyCorridorNum = Collections.Relocation.find({energyCorridor: true}).count();
  	const greenwayPlazaNum = Collections.Relocation.find({greenwayPlaza: true}).count();
  	const midtownNum = Collections.Relocation.find({midtown: true}).count();
  	const museumDistrictNum = Collections.Relocation.find({museumDistrict: true}).count();
  	const northsideNum = Collections.Relocation.find({northside: true}).count();
  	const southSideNum = Collections.Relocation.find({southSide: true}).count();
  	const southeastNum = Collections.Relocation.find({southeast: true}).count();
  	const southwestNum = Collections.Relocation.find({southwest: true}).count();
  	const texasMedicalCenterNum = Collections.Relocation.find({texasMedicalCenter: true}).count();

  	const allRelocationNames = Collections.Relocation.find({}, {$fields: {email: 1}}).fetch();

  	const interestsInfo = [
  		{x: "Southeast", y: southeastNum},
  		{x: "Energy Corridor", y: energyCorridorNum},
      {x: "Texas Medical Center", y: texasMedicalCenterNum},
  		{x: "Greenway Plaza", y: greenwayPlazaNum},
  		{x: "Museum District", y: museumDistrictNum},
  		{x: "Northside", y: northsideNum},
  		{x: "South Side", y: southSideNum},
      {x: "Downtown Houston", y: downtownHoustonNum},
  		{x: "Southwest", y: southwestNum},
  		{x: "Midtown", y: midtownNum}
  	];

  	const totalRelocationNum = (downtownHoustonNum 
  		+ energyCorridorNum 
  		+ greenwayPlazaNum 
  		+ midtownNum 
  		+ museumDistrictNum 
  		+ northsideNum 
  		+ southSideNum 
  		+ southeastNum 
  		+ southwestNum 
  		+ texasMedicalCenterNum);
  	
  	loading = false;

  	onData(null, {loading, interestsInfo, allRelocationNames, totalRelocationNum});
  } else {	
  	onData(null, {loading});
  }

};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(RelocationPie);
