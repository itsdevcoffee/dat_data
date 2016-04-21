import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Dashboard from '../components/dashboard.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  let loading = true;

  if(Meteor.subscribe('data.groups').ready()) {
      if(Meteor.subscribe('data.relocation').ready()) {
      	if(Meteor.subscribe('data.realtor').ready()) {
      		if(Meteor.subscribe('data.person').ready()) {
      			const groups = Collections.Groups.find().fetch();
      			const relocation = Collections.Relocation.find().fetch();
      			const realtor = Collections.Realtor.find().fetch();
      			const person = Collections.Person.find().fetch();
      			loading = false;

      			onData(null, {groups, relocation, realtor, loading, person});
      		}
      	}
      }
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
)(Dashboard);
