import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Upload from '../components/upload.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections, LocalState} = context();

  const csvUrls = LocalState.get("CSV_URLS");
  const error = LocalState.get("UPLOAD_ERROR");
  const state = LocalState.get("UPLOAD_STATE");

  onData(null, {csvUrls, error, state});
};

export const depsMapper = (context, actions) => ({
	uploadCsv: actions.upload.uploadCsv,
	submitForm: actions.upload.submitForm,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Upload);