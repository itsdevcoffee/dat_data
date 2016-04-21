import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '/client/modules/core/components/main_layout.jsx';
import PersonList from './containers/person_list.js';
import PersonProfile from './containers/person_profile.js';


export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/personList', {
    name: 'personList',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<PersonList />)
      });
    }
  });

  FlowRouter.route('/personProfile/:personId', {
    name: 'personProfile',
    action({personId}) {
      mount(MainLayoutCtx, {
        content: () => (<PersonProfile personId={personId} />)
      });
    }
  });
}
