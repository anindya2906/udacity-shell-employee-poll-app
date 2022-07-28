export const RECEIVE_USERS = 'RECEIVE-USERS';

export const receiveUsers = (users) => {
  return {
    type: RECEIVE_USERS,
    users,
  };
};
