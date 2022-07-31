import React from 'react';
import { connect } from 'react-redux';

import QuestionList from './QuestionList';

const Dashboard = (props) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <h2>New Questions</h2>
        <QuestionList questionIds={props.newQuestionIds} />
      </div>
      <div>
        <h2>Done</h2>
        <QuestionList questionIds={props.doneQuestionIds} />
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  const currentUser = state.users[state.authedUser];
  const doneQuestions = Object.keys(currentUser.answers);
  const newQuestions = Object.keys(state.questions).filter((id) => {
    return !doneQuestions.includes(id);
  });

  return {
    newQuestionIds: newQuestions,
    doneQuestionIds: doneQuestions,
  };
};

export default connect(mapStateToProps)(Dashboard);
