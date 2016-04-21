import {Upload} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('upload', function (uploadId) {
    return Upload.find(uploadId);
  });
}
