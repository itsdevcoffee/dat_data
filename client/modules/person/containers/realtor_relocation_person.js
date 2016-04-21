import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import RealtorRelocationPerson from '../components/realtor_relocation_person.jsx';
import humps from 'humps';
import _ from 'lodash';

export const composer = ({context, person}, onData) => {
  const {Meteor, Collections} = context();

  	const relocationKeysArray = [
  		"downtownHouston",
  		"energyCorridor",
  		"greenwayPlaza",
  		"midtown",
  		"museumDistrict",
  		"northside",
  		"southeast",
  		"southwest",
  		"texasMedicalCenter",
  		"southSide"
  	];

  	const trueKeysArray = [];

  	let loading = true;

    if(Meteor.subscribe('data.realtor').ready()) {
    	const realtorInfo = Collections.Realtor.find({}).fetch();
    	let suggestedPlaces = [];
    	if(_.isUndefined(person.midtown)) {
    		realtorInfo.forEach((info) => {
    			if(person.propertyAreaOfTown === info.propertyAreaOfTown) {
    				suggestedPlaces.push(info);
    			}
    		});
    	} else {
    		
    		let trueRelocationAreas = _.pick(person, relocationKeysArray);
    		for(values in trueRelocationAreas) {
    			if(trueRelocationAreas[values]) {
    				trueKeysArray.push(values);
    			}
    		}
    		realtorInfo.forEach((info) => {
    			trueKeysArray.forEach((key) => {
    				if(key === humps.camelize(info.propertyAreaOfTown)) {
    					suggestedPlaces.push(info);
    				}
    			});
    		});
    	}

  		loading = false;

    	onData(null, {loading, suggestedPlaces});
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
)(RealtorRelocationPerson);
