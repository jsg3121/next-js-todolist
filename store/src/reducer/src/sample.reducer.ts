import { createReducer } from '@reduxjs/toolkit';
import produce from 'immer';
import { sampleActions } from '../../actions';

export type SampleState = {
  name: string;
};

const sampleState: SampleState = {
  name: 'before',
};

const sampleReducer = createReducer<SampleState>(sampleState, (builder) => {
  builder.addCase(sampleActions.sample, (store, { payload }) => {
    return produce(store, (draft) => {
      draft.name = 'change!';
    });
  });
});

export default sampleReducer;
