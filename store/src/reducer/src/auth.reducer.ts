import { createReducer, isAnyOf } from '@reduxjs/toolkit'
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
    .addCase(authActions.logout.fulfilled, (store, { payload }) => {
      return produce(store, (draft) => {
        draft.loading = false
        draft.accessToken = ''
        draft.refreshToken = ''
      })
    })
    .addCase(authActions.login.fulfilled, (store, { payload }) => {
      const encrypt = { token: payload.token, name: payload.name }
      tokenEncryption(encrypt)

      return produce(store, (draft) => {
        draft.loading = false
        draft.id = payload.id
        draft.accessToken = payload.accessToken
        draft.name = payload.name
      })
    })
    .addCase(authActions.loginCheck.fulfilled, (store, { payload }) => {
      console.log(payload)
      return produce(store, (draft) => {
        draft.loading = false
        draft.id = payload.id
        draft.accessToken = payload.accessToken
        draft.name = payload.name
        draft.email = payload.email
      })
    })
    .addMatcher(
      isAnyOf(
        authActions.logout.pending,
        authActions.login.pending,
        authActions.logout.rejected,
        authActions.logout.rejected,
        authActions.loginCheck.pending,
        authActions.loginCheck.rejected
      ),
      (store, _) => {
        return produce(store, (draft) => {
          draft.loading = true
        })
      }
    )
})

export default authReducer
