import { AnyAction, combineReducers } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
import auth, { AuthState } from './src/auth.reducer'

export type RootState = {
  auth: AuthState
}

const rootReducer = (state: RootState | undefined, action: AnyAction) => {
  if (action.type === HYDRATE) {
    const rootState = {
      ...state,
      ...action.payload,
    }
    return rootState
  }

  const reducers = combineReducers({
    auth,
  })

  return reducers(state, action)
}

export default rootReducer
