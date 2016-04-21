import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '/client/modules/core/components/main_layout.jsx';

import RelocationDetails from './containers/relocation_details.js';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/relocationDetails/:relocation', {
    name: 'relocationDetails',
    action({relocation}) {
      mount(MainLayoutCtx, {
        content: () => (<RelocationDetails relocation={relocation} />)
      });
    }
  });

}
