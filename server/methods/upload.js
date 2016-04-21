import { Upload } from '/lib/collections';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Converter } from 'csvtojson';
import { Groups, Realtor, Relocation } from '/lib/collections';
import Future from 'fibers/future';
import Humps from 'humps';
import _ from 'lodash';

export default function () {
  Meteor.methods({
    'upload.csv.map'(csvUrls) {
    	
    	const realtorConverter = new Converter({constructResult:false});
    	const groupsConverter = new Converter({constructResult:false});
    	const relocationConverter = new Converter({constructResult:false});

    	const { userId } = this;
			let collection;

			const interestKeys = [
				"Running",
				"Shopping",
				"Nightlife",
				"Live Music",
				"Outdoor Sports",
				"Water Sports"
			];
			
			function orderKeys(obj, expected) {

			  var keys = Object.keys(obj).sort(function keyOrder(k1, k2) {
			      if (k1 < k2) return -1;
			      else if (k1 > k2) return +1;
			      else return 0;
			  });

			  var i, after = {};
			  for (i = 0; i < keys.length; i++) {
			    after[keys[i]] = obj[keys[i]];
			    delete obj[keys[i]];
			  }

			  for (i = 0; i < keys.length; i++) {
			    obj[keys[i]] = after[keys[i]];
			  }
			  return obj;
			}

			function mapCsv(collection, url, converter) {

				converter.on("record_parsed", Meteor.bindEnvironment((jsonObj) => {

					let camelizedJson = Humps.camelizeKeys(jsonObj);
					camelizedJson.userId = userId;

					if(camelizedJson.groupInterests) {
						let interestsArray = camelizedJson.groupInterests.split(", ");
						let notInterestsArray = _.difference(interestKeys, interestsArray);
						let interestsObj = {};

						interestsArray.forEach((interest) => {
							interest = Humps.camelize(interest);
							interestsObj[interest] = true;
						});

						notInterestsArray.forEach((notInterest) => {
							notInterest = Humps.camelize(notInterest);
							interestsObj[notInterest] = false;
						});
						camelizedJson = Object.assign(camelizedJson, orderKeys(interestsObj));

					}
					collection.insert(camelizedJson);
				}));

				require("request").get(url).pipe(converter);
			}

			let csvItemsAdded = 0;
			
			function callback() {
				console.log("All items added.");
			}

			csvUrls.forEach((csv) => {

				const { csvName, csvUrl } = csv;
				csvItemsAdded++;

				if(csvName === "Realtor") {
					mapCsv(Realtor, csvUrl, realtorConverter);
				} else if(csvName === "Facebook") {
					mapCsv(Groups, csvUrl, groupsConverter);
				} else {
					mapCsv(Relocation, csvUrl, relocationConverter);
				}

				if(csvItemsAdded === csvUrls.length) {
					callback();
				}
			});	
    }
  });
}
