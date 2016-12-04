'use strict'

import { combineReducers } from 'react-redux'

const initialState = { tab: 'home' }

export default function navigation(state = initialState, action) {
  if (action.type === 'SWITCH_TAB') {
    return {...state, tab: action.tab}
  }
  if (action.type === 'LOGGED_OUT') {
    return initialState
  }
  return state
}
