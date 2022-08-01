import React from 'react';
import { useHistory } from 'react-router-dom';

const NewQuestion = () => {
  const history = useHistory();

  const saveNewQuestionHandler = (event) => {
    event.preventDefault();
    history.push('/');
  };

  return (
    <form onSubmit={saveNewQuestionHandler}>
      <input type="text" placeholder="Option One" id="optionOne" />
      <input type="text" placeholder="Option Two" id="optionTwo" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewQuestion;
