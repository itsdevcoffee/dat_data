export default {
  uploadCsv({Collections, Meteor, LocalState}, files) {
  	const { Csv } = Collections;
  	const userId = Meteor.userId();
  	const user = Meteor.user();
  	const csvUrls = LocalState.get("CSV_URLS");
    // Use this for file upload callback
    let csvFilesUploaded = 0;
    // Initalize uploading state
    LocalState.set("UPLOAD_STATE", "uploading");

    function callback() {
      LocalState.set("UPLOAD_STATE", "uploaded");
    }

  	for (var i = 0, ln = files.length; i < ln; i++) {
      // Add to callback var
      csvFilesUploaded++;

  		// Loop through files and add them to Csv collection
  	  Csv.insert(files[i], function (err, fileObj) {
  	  	if(err) {
  	  		return LocalState.set("UPLOAD_STATE", err.reason);
  	  	}
        const csvFile = fileObj.data.blob.name;
  	    // Create csvUrl string for s3
  	    const csvUrl = `https://s3.amazonaws.com/datdatabucket/csv/${fileObj._id}-${csvFile}`;
        
  	    // Make object with csv info to be added to user profile
  	    const csvInfo = {
  	    	csvId: fileObj._id,
          csvName: csvFile.substr(0, csvFile.lastIndexOf('.')),
          csvFile,
  	    	csvUrl
  	    };

        // Add urls to LocalState
        csvUrls.push(csvInfo);
        LocalState.set("CSV_URLS", csvUrls);

  	    // Add to the existing profile csv array
  	    let newUserCsvs = user.profile.csv;
  	    newUserCsvs.push(csvInfo);

  	    // Update user collection with new csv array
  	    Meteor.users.update({_id: userId}, {$set: {profile: { csv: newUserCsvs}}});
  	  });
      
      // If loop is over run callback function
      if(csvFilesUploaded === files.length) {
        callback();
      }
  	}
  },
  submitForm({LocalState, FlowRouter}, csvUrls) {
  	console.log(csvUrls);
  	Meteor.call('upload.csv.map', csvUrls, (er) => {
  		if(er) {
  			return console.log(er.reason);
  		}
  		LocalState.set("CSV_URLS", []);
      FlowRouter.go('/confirm');
  	});
  }
}
