import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import ConfirmData from '../components/confirm_data.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections, LocalState} = context();

  let loading = true;
  const confirmState = LocalState.get('CONFIRM_DATA_STATE');

  if(Meteor.subscribe('data.groups').ready()) {
      if(Meteor.subscribe('data.relocation').ready()) {
      	if(Meteor.subscribe('data.realtor').ready()) {
      		const groups = Collections.Groups.find().fetch();
      		const relocation = Collections.Relocation.find().fetch();
      		const realtor = Collections.Realtor.find().fetch();
      		loading = false;

      		onData(null, {groups, relocation, realtor, loading, confirmState});
      	}
      }
  } else {
  	
  	onData(null, {loading, confirmState});
  }
  
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ConfirmData);
