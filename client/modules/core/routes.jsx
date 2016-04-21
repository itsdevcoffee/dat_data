import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './components/main_layout.jsx';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  // Core routes here

}

// Added to allow mobile testing
// As well as optimiation for mobile viewing 
let mobileViewPort = { name: 'viewport', content: 'width=device-width, initial-scale=1.0' };
DocHead.addMeta(mobileViewPort);