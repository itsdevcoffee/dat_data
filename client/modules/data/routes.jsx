import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '/client/modules/core/components/main_layout.jsx';

import Dashboard from './containers/dashboard.js';
import Upload from './containers/upload.js';
import ConfirmData from './containers/confirm_data.js';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/dashboard', {
    name: 'dashboard',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Dashboard />)
      });
    }
  });

  FlowRouter.route('/upload', {
    name: 'upload',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Upload />)
      });
    }
  });

  FlowRouter.route('/confirm', {
    name: 'confirm',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<ConfirmData />)
      });
    }
  });

}


