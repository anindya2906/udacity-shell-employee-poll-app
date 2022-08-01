import React from 'react';
import { connect } from 'react-redux';

const Poll = (props) => {
  return (
    <div>
      <div>Poll By {props.question.author}</div>
      <h3>Would you rather</h3>
      <div>
        <h4>{props.question.optionOne.text}</h4>
        <button>Click</button>
      </div>
      <div>
        <h4>{props.question.optionTwo.text}</h4>
        <button>Click</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    question: state.questions[props.id],
  };
};

export default connect(mapStateToProps)(Poll);
