import { createReducer } from '@reduxjs/toolkit';
import produce from 'immer';
import { userActions } from '../../actions';

export type UserState = {
  name: string;
};

const userState: UserState = {
  name: 'before',
};

const userReducer = createReducer<UserState>(userState, (builder) => {
  builder.addCase(userActions.user, (store, { payload }) => {
    console.log(payload);
    return produce(store, (draft) => {
      draft.name = 'change!';
    });
  });
});

export default userReducer;
