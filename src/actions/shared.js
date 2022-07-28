import { getInitialData } from '../utils/helpers';
import { receiveUsers } from './users';
import { receiveQuestions } from './questions';
import { setAuthedUser } from './authedUser';

const temp_user = 'sarahedo';

export const receiveInitialData = () => {
  return async (dispatch) => {
    const { users, questions } = await getInitialData();
    dispatch(receiveUsers(users));
    dispatch(receiveQuestions(questions));
    dispatch(setAuthedUser(temp_user));
  };
};
