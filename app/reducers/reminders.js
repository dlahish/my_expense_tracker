import { SET_NEW_REMINDER, SET_CHECKED_REMINDER, CLEAR_COMPLETED_REMINDERS } from '../constants'
import {REHYDRATE} from 'redux-persist/constants'
const initialState = {
  reminders: []
}

export default function accounts (state = initialState, action) {
  let nextReminder, nextReminders
  switch (action.type) {
    case SET_NEW_REMINDER:
      function getId() {
        if (state.reminders.length === 0) return 1
        else return state.reminders.length + 1
      }
      nextReminder = action.reminder
      nextReminder.id = getId()
      nextReminders = state.reminders.concat(nextReminder)
      return { ...state, reminders: nextReminders }
    case SET_CHECKED_REMINDER:
      nextReminders = state.reminders.map((reminder) => {
        if (reminder.id === action.reminderId) {
          return reminder.completed = { ...reminder, completed: !reminder.completed}
        } else return reminder
      })
      return { ...state, reminders: nextReminders }
    case CLEAR_COMPLETED_REMINDERS:
      nextReminders = state.reminders.filter((reminder) => !reminder.completed)
      return { ...state, reminders: nextReminders }
    case REHYDRATE:
      var incoming = action.payload.myReducer
      if (incoming) return {...state, ...incoming, specialKey: processSpecial(incoming.specialKey)}
      return state
    default:
      return state
  }
}