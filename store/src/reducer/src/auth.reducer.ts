import { createReducer, isAnyOf } from '@reduxjs/toolkit'
import { encryptToken } from 'common'
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
    .addCase(authActions.login.fulfilled, (store, { payload }) => {
      const encrypt = { token: payload.token, name: payload.name }
      encryptToken(encrypt)
      return produce(store, (draft) => {
        draft.loading = false
        draft.id = payload.id
        draft.accessToken = payload.accessToken
        draft.name = payload.name
      })
    })
    .addCase(authActions.loginCheck.fulfilled, (store, { payload }) => {
      return produce(store, (draft) => {
        draft.loading = false
        draft.id = payload.id
        draft.accessToken = payload.token
        draft.name = payload.name
        draft.email = payload.email
      })
    })
    .addCase(authActions.logout.fulfilled, (store, { payload }) => {
      localStorage.removeItem('accessToken')
      return produce(store, (draft) => {
        draft.loading = false
        draft.accessToken = ''
        draft.refreshToken = ''
      })
    })
    .addMatcher(
      isAnyOf(
        authActions.logout.pending,
        authActions.login.pending,
        authActions.logout.rejected,
        authActions.logout.rejected,
        authActions.loginCheck.pending,
        authActions.loginCheck.rejected,
        authActions.logout.pending,
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
