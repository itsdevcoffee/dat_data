import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import RelocationDetails from '../components/relocation_details.jsx';

export const composer = ({context, relocation}, onData) => {
  const {Meteor, Collections} = context();

  let loading = true;

  if(Meteor.subscribe('data.relocation').ready()) {
  	const relocations = Collections.Relocation.find({[relocation]: true}).fetch();

  	loading = false;
  	onData(null, {loading, relocations});
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
)(RelocationDetails);
