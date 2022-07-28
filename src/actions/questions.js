export const RECEIVE_QUESTIONS = 'RECEIVE-QUESTIONS';

export const receiveQuestions = (questions) => {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
};
