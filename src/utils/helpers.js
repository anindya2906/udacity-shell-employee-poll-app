import { _getUsers, _getQuestions } from './_DATA';

export const getInitialData = async () => {
  try {
    const [users, questions] = await Promise.all([
      _getUsers(),
      _getQuestions(),
    ]);
    return Promise.resolve({ users, questions });
  } catch {
    return Promise.reject('Error while getting intial data');
  }
};
