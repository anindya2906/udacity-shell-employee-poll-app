import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { receiveInitialData } from '../actions/shared';
import Dashboard from './Dashboard';

const App = (props) => {
  useEffect(() => {
    props.dispatch(receiveInitialData());
  }, []);

  if (props.loading) {
    return <div>Loadin...</div>;
  }

  return (
    <div>
      <Dashboard />
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    loading: state.authedUser === null ? true : false,
  };
};

export default connect(mapStateToProps)(App);
