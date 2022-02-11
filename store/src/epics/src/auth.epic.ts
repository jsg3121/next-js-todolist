import { Epic, ofType } from 'redux-observable'
import { filter, map } from 'rxjs/operators'
import { Actions } from 'store'

export const authEpic: Epic = (action$, store$, _) => {
  return action$.pipe(
    ofType('@@USER/LOGOUT/fulfilled'),
    map(() => {
      return {
        type: Actions.auth.removeUser.type,
      }
    })
  )
}
