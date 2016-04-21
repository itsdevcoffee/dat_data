import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Login from '../components/login.jsx';

export const composer = ({context}, onData) => {
	const {Meteor, Collections, LocalState} = context();

	const error = LocalState.get('LOGIN_ERROR');
	onData(null, {error});
};

export const depsMapper = (context, actions) => ({
	login: actions.login.login,
	context: () => context
});

export default composeAll(
	composeWithTracker(composer),
	useDeps(depsMapper)
)(Login);
