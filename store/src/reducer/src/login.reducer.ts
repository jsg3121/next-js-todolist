import { createReducer } from '@reduxjs/toolkit'
import produce from 'immer'
import { loginActions } from 'store/src/actions'

const authState = {
  loading: false,
  accessToken: '',
  refreshToken: '',
  msg: '',
}

const signUpReducer = createReducer(authState, (builder) => {
  builder
    .addCase(loginActions.logout.pending, (store, { payload }) => {
      console.log('Asdfasdf')
      // return produce(store, (draft) => {
      //   draft.loading = true
      // })
      return
    })
    .addCase(loginActions.logout.fulfilled, (store, { payload }) => {
      // return produce(store, (draft) => {
      //   draft.loading = false
      //   draft.accessToken = payload.accessToken
      //   draft.refreshToken = payload.refreshToken
      // })
      console.log('!231234214123')
      return
    })
    .addCase(loginActions.logout.rejected, (store, { payload }) => {
      console.log('asdfasdfasdfasdf')
      return
    })
})

export default signUpReducer
