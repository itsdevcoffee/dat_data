import React from 'react';
import _ from 'lodash';
import InterestsPie from './../containers/interests_pie.js';
import RelocationPie from './../containers/relocation_pie.js';
import RaisedButton from 'material-ui/lib/raised-button';

class Dashboard extends React.Component {
	render() {
		const { loading, groups, relocation, realtor, person } = this.props;
		let content;
		if(!loading && this.props.groups.length > 0) {
			content = (
				<div className="row">
					<div className="col s6 offset-s3 text-center">
						<div className="card-panel" style={{margin: 0, marginTop: 12}}>
							<h5>Search {person.length} people:</h5>
							<RaisedButton label="Search People" labelColor="white" backgroundColor="#0091ea"  default={true} onClick={this.goToPersonList.bind(this)} fullWidth={true} />
						</div>
					</div>
					<InterestsPie />
					<RelocationPie />
				</div>
			);
		} else {
			if(loading) {
				content = <p className="text-center" style={{margin: 0}}>Loading...</p>
			} else {
				content = (
					<div className="row">
						<div className="col s6 offset-s3">
							<div className="card-panel add-data">
								<p className="text-center">Looks like you have no data. Click below to start adding some:</p>
								<RaisedButton label="Add Dat_Data" labelColor="white" backgroundColor="#0091ea"  default={true} onClick={this.goToUpload.bind(this)} fullWidth={true} />
							</div>
						</div>
					</div>
				);
			}
		}
		return (
			<section id="dashboard">
				<h2>Dashboard</h2>
				{content}
			</section>
		);
	}
	goToUpload() {
		const { FlowRouter } = this.props.context();
		FlowRouter.go('/upload');
	}
	goToPersonList() {
		const { FlowRouter } = this.props.context();
		FlowRouter.go('/personList');
	}
}

export default Dashboard;
