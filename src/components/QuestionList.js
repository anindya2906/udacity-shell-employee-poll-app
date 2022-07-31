import React from 'react';

import Question from './Question';

const QuestionList = (props) => {
  return (
    <ul>
      {props.questionIds.map((id) => {
        return (
          <li key={id}>
            <Question id={id} />
          </li>
        );
      })}
    </ul>
  );
};

export default QuestionList;
