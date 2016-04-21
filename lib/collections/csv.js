import {Mongo} from 'meteor/mongo';
const Fs = Package['cfs:base-package'].FS;
import {Meteor} from 'meteor/meteor';

const { apiKey, secretKey } = Meteor.settings.public;

let csvStore = new FS.Store.S3("csv", {
 accessKeyId: apiKey, //required if environment variables are not set
 secretAccessKey: secretKey //required if environment variables are not set
 bucket: "datdatabucket", //required
 maxTries: 1
});

const Csv = new Fs.Collection("csv", {
	stores: [csvStore]
});

export default Csv;
