import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

const Poll = (props) => {
  const params = useParams();
  const question = props.questions[params.id];

  return (
    <div>
      <h3>Poll By {question.author}</h3>
      <h2>Would you rather</h2>
      <div>
        <h4>{question.optionOne.text}</h4>
        <button>Click</button>
      </div>
      <div>
        <h4>{question.optionTwo.text}</h4>
        <button>Click</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    questions: state.questions,
  };
};

export default connect(mapStateToProps)(Poll);
