import $ from 'jquery';

export default {
	login({LocalState, Meteor}, event) {
		event.preventDefault();
		const el = $(event.target);
		const email = el.find('#email').val();
		const password = el.find('#password').val();

		Meteor.loginWithPassword(email, password, (er) => {
			if(er) {
				return LocalState.set('LOGIN_ERROR', er.reason);
			} 
			LocalState.set('LOGIN_ERROR', null);
			FlowRouter.go('/dashboard');
		});
	}
}
