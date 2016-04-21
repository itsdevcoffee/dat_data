import React from 'react';
import humps from 'humps';
import { VictoryPie } from "victory";

class InterestsPie extends React.Component {

  render() {
  	const { 
  		loading, 
  		interestsInfo,
  		allGroupNames, 
  		totalInterestsNum 
  	} = this.props;
  	const { FlowRouter } = this.props.context();
    return (
    	<div className="col s6" id="interest-pie">
    		<div className="card-panel">
	      		<h5 className="text-center">Interests Breakdown</h5>
				<VictoryPie 
				data={interestsInfo} 
				events={{
			      data: {
			        onClick: (evt, props) => {
			        	const camelizedName = humps.camelize(props.datum.xName);
			        	FlowRouter.go(`/interestsDetails/${camelizedName}`);
			        }
			      }
	    		}} />
		    	<table className="highlight">
		    		<thead>
		    			<tr>
		    				<th>Id</th>
		    				<th>Name</th>
		    				<th>Count</th>
		    				<th>Percentage</th>
		    			</tr>
		    		</thead>
		    		<tbody>
		    			{!loading ? interestsInfo.map((info, i) => {
		    				return (
		    					<tr onClick={this.moreDetail.bind(this, info.x)}>
		    						<td>{i + 1}</td>
		    						<td>{info.x}</td>
		    						<td>{info.y}</td>
		    						<td>{(info.y / totalInterestsNum * 100).toFixed(2)}%</td>
		    					</tr>
		    				);
		    			}) : null}
		    			<tr style={{borderTop: "1px solid black"}}>
		    				<td></td>
		    				<td>Total</td>
		    				<td>{totalInterestsNum}</td>
		    				<td>100%</td>
		    			</tr>
		    		</tbody>
		    	</table>
    		</div>
    	</div>
    );
  }
  moreDetail(name) {
  	const { FlowRouter } = this.props.context();
  	const camelizedName = humps.camelize(name);
  	FlowRouter.go(`/interestsDetails/${camelizedName}`);
  }
}

export default InterestsPie;
