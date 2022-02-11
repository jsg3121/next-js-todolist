import { combineEpics } from 'redux-observable'
import * as sampleEpic from './src/auth.epic'

export default combineEpics(...Object.values(sampleEpic))
