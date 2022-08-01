import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Question = (props) => {
  return (
    <div>
      <div>{props.question.author}</div>
      {/* TODO: format the timestamp */}
      <div>{props.question.timestamp}</div>
      <Link to={'/poll/' + props.question.id}>Show</Link>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    question: state.questions[props.id],
  };
};

export default connect(mapStateToProps)(Question);
