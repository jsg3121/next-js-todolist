import Router from 'next/router'
import { Epic, ofType } from 'redux-observable'
import { map } from 'rxjs/operators'

export const loginEpic: Epic = (action$, store$, _) => {
  return action$.pipe(
    ofType('@@USER/LOGIN/fulfilled'),
    map((data) => {
      Router.replace('/')
      return () => {
        return
      }
    })
  )
}

export const tokenCheckEpic: Epic = (action$, store$, _) => {
  return action$.pipe(
    ofType('@@USER/TOKENCHECK/fulfilled'),
    map(({ payload }) => {
      Router.replace(`/user/${payload.id}`)
      return () => {
        return
      }
    })
  )
}

export const logoutEpic: Epic = (action$, store$, _) => {
  return action$.pipe(
    ofType('@@USER/LOGOUT/fulfilled', '@@USER/TOKENCHECK/rejected'),
    map(({ payload }) => {
      Router.replace(`/user/login`)
      return () => {
        return
      }
    })
  )
}
