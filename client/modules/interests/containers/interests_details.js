import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import InterestsDetails from '../components/interests_details.jsx';

export const composer = ({context, interest}, onData) => {
  const {Meteor, Collections} = context();

  let loading = true;

  if(Meteor.subscribe('data.groups').ready()) {
  	const interests = Collections.Groups.find({[interest]: true}).fetch();

  	loading = false;
  	onData(null, {loading, interests});
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
)(InterestsDetails);
