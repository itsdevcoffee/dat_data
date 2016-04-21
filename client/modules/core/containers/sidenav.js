import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Sidenav from '../components/sidenav.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  let loading = true;

	if(Meteor.subscribe('data.person').ready()) {
		const data = Collections.Person.find().count();
		
		loading = false;

  	onData(null, {loading, data});

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
)(Sidenav);
