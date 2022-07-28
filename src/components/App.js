import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { receiveInitialData } from '../actions/shared';

const App = (props) => {
  useEffect(() => {
    props.dispatch(receiveInitialData());
  }, []);

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
};

export default connect()(App);
