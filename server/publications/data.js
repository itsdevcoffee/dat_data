import { Groups, Realtor, Relocation, Person } from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('data.groups', function() {
  	const { userId } = this;

    return Groups.find({userId});
  });
  Meteor.publish('data.realtor', function() {
  	const { userId } = this;

    return Realtor.find({userId});
  });
  Meteor.publish('data.relocation', function() {
  	const { userId } = this;

    return Relocation.find({userId});
  });
  
  Meteor.publish('data.person', function() {  
    const { userId } = this;

    return Person.find({userId});
  });

  Meteor.publish('data.person.single', (personId) => {  

    return Person.find({"_id": personId});
  });
}
