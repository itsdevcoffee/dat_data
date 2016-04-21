import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '/client/modules/core/components/main_layout.jsx';

import InterestsDetails from './containers/interests_details.js';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/interestsDetails/:interest', {
    name: 'interestsDetails',
    action({interest}) {
      mount(MainLayoutCtx, {
        content: () => (<InterestsDetails interest={interest} />)
      });
    }
  });
}
