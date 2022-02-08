import { AnyAction, combineReducers } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import sample, { SampleState } from './src/sample.reducer';

export type RootState = {
  sample: SampleState;
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
    sample,
  });

  return reducers(state, action);
};

export default rootReducer;
