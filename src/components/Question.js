import React from 'react';
import { connect } from 'react-redux';

const Question = (props) => {
  return (
    <div>
      <div>{props.question.author}</div>
      {/* TODO: format the timestamp */}
      <div>{props.question.timestamp}</div>
      <button>Show</button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    question: state.questions[props.id],
  };
};

export default connect(mapStateToProps)(Question);
