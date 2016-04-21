import React from 'react';
import { VictoryPie } from "victory";
import humps from 'humps';
class RelocationPie extends React.Component {
  render() {
  	const { 
  		loading, 
  		interestsInfo,
  		allRelocationNames, 
  		totalRelocationNum 
  	} = this.props;
  	const { FlowRouter } = this.props.context();

    return (
    	<div className="col s6" id="relocation-pie">
    		<div className="card-panel">
	    		<h5 className="text-center">Relocation Breakdown</h5>
				<VictoryPie 
				data={interestsInfo}
				style={{
				    labels: {
				      fontSize: 8,
				      padding: 75
				    }
				  }} 
				events={{
			      data: {
			        onClick: (evt, props) => {
			        	const camelizedName = humps.camelize(props.datum.xName);
			        	FlowRouter.go(`/relocationDetails/${camelizedName}`);
			        }
			      }
	    		}}
	    		colorScale={[
	    		    "#1565c0",
	    		    "#1976d2",
	    		    "#1e88e5",
	    		    "#2196f3",
	    		    "#42a5f5",
	    		    "#64b5f6",
	    		    "#2962ff", 
	    		    "#2979ff", 
	    		    "#448aff", 
	    		    "#82b1ff" 
	    		  ]} />
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
		    					<tr onClick={this.logInfo.bind(this, info.x)}>
		    						<td>{i + 1}</td>
		    						<td>{info.x}</td>
		    						<td>{info.y}</td>
		    						<td>{(info.y / totalRelocationNum * 100).toFixed(2)}%</td>
		    					</tr>
		    				);
		    			}) : null}
		    			<tr style={{borderTop: "1px solid black"}}>
		    				<td></td>
		    				<td>Total</td>
		    				<td>{totalRelocationNum}</td>
		    				<td>100%</td>
		    			</tr>
		    		</tbody>
		    	</table>
    		</div>
    	</div>
    );
  }
  logInfo(name) {
  	const { FlowRouter } = this.props.context();
  	const camelizedName = humps.camelize(name);
  	FlowRouter.go(`/relocationDetails/${camelizedName}`);
  }
}

export default RelocationPie;
