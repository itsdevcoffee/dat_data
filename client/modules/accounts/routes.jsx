import React from 'react';
import {mount} from 'react-mounter';
import MainLayout from '/client/modules/core/components/main_layout.jsx';
import Login from './containers/login';
import Register from './containers/register';

export default function (injectDeps, {FlowRouter}) {
  const LoginCtx = injectDeps(Login);
  const RegisterCtx = injectDeps(Register);


  FlowRouter.route('/', {
    name: 'login',
    action() {
      mount(LoginCtx, {
        content: () => (<Login />)
      });
    }
  });

  FlowRouter.route('/register', {
    name: 'register',
    action() {
      mount(RegisterCtx, {
        content: () => (<Register />)
      });
    }
  });

}
