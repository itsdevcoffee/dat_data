import React from 'react';
import humps from 'humps';
import _ from 'lodash';

class GridView extends React.Component {
	render() {
		let { data, name, limit } = this.props;
		if(!limit) {
			limit = data.length;
		}
		data = _.take(data, limit);

		
		let tableHeads = this.getTableHeads(data[0]);

		return (
			<div className="row">
			  <h2 className="text-center">{name}</h2>
			  <table className="highlight">
			  	<thead>
			  		<tr>
			  			{tableHeads.map((tableHead) => {
			  				return <th>{tableHead}</th>
			  			})}
			  		</tr>
			  	</thead>
			  	<tbody>
				  	{data.map((dat) => {
				  		const tableData = this.getTableData(dat);
				  		return (
				  			<tr>
				  				{tableData}
				  			</tr>
				  		);
				  	})}
			  	</tbody>
			  </table>
			</div>
		);
	}
	getTableHeads(data) {
		let tableHeads = [];
		data = _.omit(data, ['_id', "userId"]);

		for(dat in data) {
			tableHeads.push(humps.pascalize(dat));
		}
		return tableHeads;
	}
	getTableData(data) {
		let tableData = [];
		data = _.omit(data, ['_id', "userId"]);

		for(dat in data) {
			if(data[dat] === true) {
				data[dat] = "Yes";
			} else if(data[dat] === false) {
				data[dat] = "No";
			}
			tableData.push(<td>{data[dat]}</td>);
		}

		return tableData
	}
}

export default GridView;
