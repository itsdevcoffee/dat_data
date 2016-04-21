import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import PersonProfile from '../components/person_profile.jsx';

export const composer = ({context, personId}, onData) => {
  const {Meteor, Collections} = context();
  console.log(personId);

  let loading = true;

  if(Meteor.subscribe('data.person.single', personId).ready()) {
  	const person = Collections.Person.findOne(personId);
  	loading = false;
  	onData(null, {person, loading});
  } else {
    onData(null, {person: {}, loading});
  }
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(PersonProfile);
