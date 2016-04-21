import React from 'react';
import GridView from './../../data/components/grid_view.jsx';
import RaisedButton from 'material-ui/lib/raised-button';

class InterestsDetails extends React.Component {
  render() {
  	const { interests, loading } = this.props;
  	console.log(this.props);
    return (
      <div>
        <div className="row">
          <div className="col s2 offset-s5" style={{paddingTop: 12}}>
            <RaisedButton label="Back" labelColor="white" backgroundColor="#ef5350" default={true} onClick={this.goBack.bind(this)} fullWidth={true} />
          </div>
        </div>
      	{!loading ? <GridView data={interests} name="Interests" /> : <p>Loading...</p> }
      </div>
    );
  }
  goBack() {
    const { FlowRouter } = this.props.context();
    FlowRouter.go('/dashboard');
  }
}

export default InterestsDetails;
