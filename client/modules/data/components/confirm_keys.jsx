import React from 'react';
import humps from 'humps';
import _ from 'lodash';

class ConfirmKeys extends React.Component {
  render() {
  	const { data, name } = this.props;
  	let keys = this.collectionKeys(data[0]);
  	console.log(keys);
    return (
      <div className="text-center col s4">
      	<h2>{name}</h2>
      	<h5>These field keys look correct?</h5>
      	<ul>
      	{keys.map((key, i) => {
      		return <li key={i}>{key}</li>
      	})}
      	</ul>
      </div>
    );
  }
  collectionKeys(data) {
  	let tableHeads = [];
  	data = _.omit(data, ['_id', "userId"]);

  	for(dat in data) {
  		tableHeads.push(humps.pascalize(dat));
  	}
  	return tableHeads;
  }
}

export default ConfirmKeys;
