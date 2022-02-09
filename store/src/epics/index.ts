import { combineEpics } from 'redux-observable';
import * as sampleEpic from './src/login.epic';

export default combineEpics(...Object.values(sampleEpic));
