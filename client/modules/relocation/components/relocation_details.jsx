import React from 'react';
import GridView from './../../data/components/grid_view.jsx';
import RaisedButton from 'material-ui/lib/raised-button';

class RelocationDetails extends React.Component {
  render() {
  	const { relocations, loading } = this.props;
    return (
      <div>
        <div className="row">
          <div className="col s2 offset-s5" style={{paddingTop: 12}}>
            <RaisedButton label="Back" labelColor="white" backgroundColor="#ef5350"  default={true} onClick={this.goBack.bind(this)} fullWidth={true} />
          </div>
        </div>
        {!loading ? <GridView data={relocations} name="Relocations" /> : <p>Loading...</p> }
      </div>
    );
  }
  goBack() {
    const { FlowRouter } = this.props.context();
    FlowRouter.go('/dashboard');
  }
}

export default RelocationDetails;
