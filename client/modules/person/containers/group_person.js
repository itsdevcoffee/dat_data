import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import _ from "lodash";
import GroupPerson from '../components/group_person.jsx';

export const composer = ({context, person}, onData) => {
  const {Meteor, Collections} = context();
  let loading = true;

  let query = [
  	{running: person.running},
  	{nightlife: person.nightlife},
  	{shopping: person.shopping},
  	{outdoorSports: person.outdoorSports},
  	{waterSports: person.waterSports},
  	{liveMusic: person.liveMusic},
  ];

	if(Meteor.subscribe('data.realtor').ready()) {
		let suggestPlaces = Collections.Realtor.find({$and: query}).fetch();
		let matchQuality = "Exact";
		if(suggestPlaces.length < 2) {
			suggestPlaces = Collections.Realtor.find({$and: _.take(query, 5)}).fetch();
			matchQuality = "Strong";
			if(suggestPlaces.length < 6) {
				matchQuality = "Moderate";
				suggestPlaces = Collections.Realtor.find({$and: _.take(query, 4)}).fetch();
			}
		}

		loading = false;
		onData(null, {loading, suggestPlaces, matchQuality});
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
)(GroupPerson);
