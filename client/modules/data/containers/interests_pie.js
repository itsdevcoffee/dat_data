import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import InterestsPie from '../components/interests_pie.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  let loading = true;

  if(Meteor.subscribe('data.groups').ready()) {
  	const runningNum = Collections.Groups.find({running: true}).count();
  	const nightlifeNum = Collections.Groups.find({nightlife: true}).count();
  	const outdoorSportsNum = Collections.Groups.find({outdoorSports: true}).count();
  	const shoppingNum = Collections.Groups.find({shopping: true}).count();
  	const waterSportsNum = Collections.Groups.find({waterSports: true}).count();
  	const liveMusicNum = Collections.Groups.find({liveMusic: true}).count();
  	const allGroupNames = Collections.Groups.find({}, {$fields: {groupName: 1}}).fetch();

  	const interestsInfo = [
  		{x: "Running", y: runningNum},
  		{x: "Nightlife", y: nightlifeNum},
  		{x: "Outdoor Sports", y: outdoorSportsNum},
  		{x: "Shopping", y: shoppingNum},
  		{x: "Water Sports", y: waterSportsNum},
  		{x: "Live Music", y: liveMusicNum}
  	];

  	const totalInterestsNum = (runningNum + nightlifeNum + outdoorSportsNum + shoppingNum + waterSportsNum + liveMusicNum);
  	loading = false;

  	onData(null, {loading, interestsInfo, allGroupNames, totalInterestsNum});
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
)(InterestsPie);
