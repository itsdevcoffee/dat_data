import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import PersonList from '../components/person_list.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  let loading = true;

  if(Meteor.subscribe('data.person').ready()) {
  	const people = Collections.Person.find().fetch();
  	loading = false
		onData(null, {loading, people});
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
)(PersonList);
