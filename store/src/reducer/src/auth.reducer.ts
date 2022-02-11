import { createReducer } from '@reduxjs/toolkit'
import { tokenEncryption } from 'common'
import produce from 'immer'
import { Jwt } from 'jsonwebtoken'
import { authActions } from 'store/src/actions'

export type AuthState = {
  name: string
  email: string
  id: number
  loading: boolean
  accessToken: Jwt | string
  refreshToken: string
  msg: string
}

const authState: AuthState = {
  name: '',
  email: '',
  id: 0,
  loading: false,
  accessToken: '',
  refreshToken: '',
  msg: '',
}

const authReducer = createReducer(authState, (builder) => {
  builder
    .addCase(authActions.logout.pending, (store, { payload }) => {
      return produce(store, (draft) => {
        draft.loading = true
      })
    })
    .addCase(authActions.logout.fulfilled, (store, { payload }) => {
      return produce(store, (draft) => {
        draft.loading = false
        draft.accessToken = ''
        draft.refreshToken = ''
      })
    })
    .addCase(authActions.logout.rejected, (store, { payload }) => {
      console.log('asdfasdfasdfasdf')
      return
    })
    .addCase(authActions.user, (store, { payload }) => {
      if (payload.token) {
        tokenEncryption(payload)
      }
      return produce(store, (draft) => {
        draft.email = payload.email
        draft.name = payload.name
        draft.id = payload.id
        draft.accessToken = payload.token
      })
    })
})

export default authReducer