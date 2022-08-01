import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import { receiveInitialData } from '../actions/shared';
import NavBar from './NavBar';
import Dashboard from './Dashboard';
import Poll from './Poll';
import NewQuestion from './NewQuestion';

const App = (props) => {
  useEffect(() => {
    props.dispatch(receiveInitialData());
  }, []);

  if (props.loading) {
    return <div>Loadin...</div>;
  }

  return (
    <div>
      <NavBar />
      <Route path="/" exact>
        <Redirect to="/dashboard" />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/poll" exact>
        <Redirect to="/dashboard" />
      </Route>
      <Route path="/poll/:id">
        <Poll />
      </Route>
      <Route path="/new">
        <NewQuestion />
      </Route>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    loading: state.authedUser === null ? true : false,
  };
};

export default connect(mapStateToProps)(App);
