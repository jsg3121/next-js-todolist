import { ofType } from 'redux-observable';
import { map } from 'rxjs/operators';

export const loginEpic = (action$: any, _: any) => {
  return action$.pipe(
    ofType('@@USER/LOGIN/pending'),
    map((data) => {
      console.log('epic!!!!');
      return;
    })
  );
};
