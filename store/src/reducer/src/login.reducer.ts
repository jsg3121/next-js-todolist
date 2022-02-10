import { createReducer } from '@reduxjs/toolkit';

const authState = {
  loading: false,
  accessToken: '',
  refreshToken: '',
  msg: '',
};

const signUpReducer = createReducer(authState, (builder) => {
  builder;
  // .addCase(loginActions.login.pending, (store, { payload }) => {
  //   return produce(store, (draft) => {
  //     draft.loading = true;
  //   });
  // })
  // .addCase(loginActions.login.fulfilled, (store, { payload }) => {
  //   return produce(store, (draft) => {
  //     draft.loading = false;
  //     draft.accessToken = payload.accessToken;
  //     draft.refreshToken = payload.refreshToken;
  //   });
  // })
  // .addCase(loginActions.login.rejected, (store, { payload }) => {
  //   console.log(payload);
  //   return;
  // });
});

export default signUpReducer;
