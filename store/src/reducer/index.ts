import { AnyAction, combineReducers } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import user, { UserState } from './src/user.reducer';

export type RootState = {
  user: UserState;
};

const rootReducer = (state: RootState | undefined, action: AnyAction) => {
  if (action.type === HYDRATE) {
    const rootState = {
      ...state,
      ...action.payload,
    };
    return rootState;
  }

  const reducers = combineReducers({
    user,
  });

  return reducers(state, action);
};

export default rootReducer;
