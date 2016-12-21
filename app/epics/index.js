import { combineEpics } from 'redux-observable'
import settings from './settings'

export default combineEpics(
  settings
)
