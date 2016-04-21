import React from 'react';
import GridView from './grid_view.jsx';
import ConfirmKeys from './confirm_keys.jsx';
import RaisedButton from 'material-ui/lib/raised-button';

class ConfirmData extends React.Component {
	render() {
		const { groups, realtor, relocation, loading, confirmState } = this.props;

		let confirmComponents = [];

		if(!loading) {
			confirmComponents = [
				<GridView data={groups} name="Groups" limit={3} />,
				<GridView data={realtor} name="Realtor" limit={3} />,
				<GridView data={relocation} name="Relocation" limit={3} />
			];
		}

		return (
			<div>
				<div className="row">
					{confirmComponents[confirmState]}
				</div>
				<div className="row">
					<div className="col s4 offset-s4">
						<div className="row">
							<div className="col s6">
								<RaisedButton label="No" labelColor="white" backgroundColor="#f44336" style={{margin: 12}} default={true} onClick={this.no.bind(this)} fullWidth={true} />
							</div>
							<div className="col s6">
								<RaisedButton label="Yes" labelColor="white" backgroundColor="#00b0ff" style={{margin: 12}} default={true} onClick={this.yes.bind(this)} fullWidth={true} />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
	yes() {
		const { LocalState, FlowRouter } = this.props.context();
		let { confirmState } = this.props;
		if(confirmState === 2) {
			Meteor.call('person.map.model', (er, result) => {
				console.log(result);
			});
			FlowRouter.go('/dashboard');
			return LocalState.set("CONFIRM_DATA_STATE", 0);
		}
		LocalState.set("CONFIRM_DATA_STATE", confirmState + 1);

	}
	no() {
		const { LocalState, Meteor } = this.props.context();
		Meteor.call('person.map.model', (er, result) => {
			console.log(result);
		});
	}
}
export default ConfirmData;
