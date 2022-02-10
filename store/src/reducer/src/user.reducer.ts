import { createReducer } from '@reduxjs/toolkit'
import { tokenEncryption } from 'common'
import produce from 'immer'
import { userActions } from 'store/src/actions'

export type UserState = {
  name: string
  email: string
  id: number
}

const userState: UserState = {
  name: '',
  email: '',
  id: 0,
}

const userReducer = createReducer<UserState>(userState, (builder) => {
  builder.addCase(userActions.user, (store, { payload }) => {
    if (payload.token) {
      tokenEncryption(payload)
    }
    return produce(store, (draft) => {
      draft.email = payload.email
      draft.name = payload.name
      draft.id = payload.id
    })
  })
})

export default userReducer
