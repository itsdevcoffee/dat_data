import {createApp} from 'mantra-core';
import initContext from './configs/context';

// modules
import coreModule from './modules/core';
import accountsModule from './modules/accounts';
import dataModule from './modules/data';
import personModule from './modules/person';
import interestsModule from './modules/interests';
import relocationModule from './modules/relocation';

// import init state module
import state from './state';

// init context
const context = initContext();

// set initial state
const {LocalState} = context;
state(LocalState);

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(accountsModule);
app.loadModule(dataModule);
app.loadModule(personModule);
app.loadModule(interestsModule);
app.loadModule(relocationModule);
app.init();
