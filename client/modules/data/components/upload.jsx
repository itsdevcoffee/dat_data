import React from "react";
import { Meteor } from "meteor/meteor";
import Dropzone from "react-dropzone";
import _ from 'lodash';
var DropzoneComponent = require('react-dropzone-component');
import RaisedButton from 'material-ui/lib/raised-button';


class Upload extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			files: [],
			uploaded: "Drag and drop your CSV files here or click to upload."
		}
	}
	render() {
		console.log(this.props);
		const { error, state, uploadList } = this.props;
		return (
			<div className="container">
				<h2>Upload</h2>
				<div className="row" style={{marginBottom: 0}}>
					<div className="col s6 offset-s3">
						{error ? <p className="text-center" style={{color: "red"}}>{error}</p> : null}
						{state ? <div className="row"><div className="col s6 offset-s3 card-panel"><p className="text-center" style={{color: "#4caf50", fontSize: 18}}>Files Uploaded!</p></div></div> : null}
						<ul className="row" style={{marginBottom: 0}}>
							{this.state.files.map((upload, i) => {
								return (
									<li key={i} style={{color: "#01579b"}} className="col s4">
										<img className="center-block" src="http://www.upa.io/img/csv-logo.png" height={30} />
										<p className="text-center">{upload.name}</p>
									</li>
								);

							})}
						</ul>
					</div>
				</div>
				<div className="row">
					<div className="col s4 offset-s4">
						<Dropzone onDrop={this.onDrop.bind(this)}>
			              <div style={{padding: 18, textAlign: "center"}}>{this.state.uploaded}</div>
			            </Dropzone>
					</div>
				</div>
				<div className="row">
					<div className="col s4 offset-s4">
						{!state ? <RaisedButton label="Upload" labelColor="white" backgroundColor="#01579b"  default={true} onClick={this.uploadCsv.bind(this)} fullWidth={true} /> : null }
						{state === "uploaded" ? <RaisedButton label="Submit" labelColor="white" backgroundColor="#00b0ff"  default={true} onClick={this.submitForm.bind(this)} fullWidth={true} /> : null }
					</div>
				</div>
			</div>
		);
	}
	onDrop(files) {
		const { LocalState } = this.props.context();

		this.setState({files});
	}
	uploadCsv(event) {
		event.preventDefault();
		const { uploadCsv } = this.props;
		const { LocalState } = this.props.context();
		const { files } = this.state;
		if(files.length < 3) {
			return LocalState.set("UPLOAD_ERROR", "Please upload 3 files");
		}
		uploadCsv(files);
		this.setState({uploaded: "FILES UPLOADED"})
		LocalState.set("UPLOAD_ERROR", null);
	}
	submitForm(event) {
		event.preventDefault();
		const { csvUrls, submitForm } = this.props;
		const { LocalState } = this.props.context();
		submitForm(csvUrls);
		LocalState.set("UPLOAD_STATE", null);
	}
}

export default Upload;
