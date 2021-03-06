import { REHYDRATE } from 'redux-persist/constants'
import {
  SET_CURRENCY_SYMBOL,
  SET_CUSTOM_FAVORITES
} from '../constants'

const initialState = {
  currencySymbol: 'default',
  customFavorites: false
}

export default function settings (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENCY_SYMBOL:
      return { ...state, currencySymbol: action.symbol }
    case SET_CUSTOM_FAVORITES:
      return { ...state, customFavorites: !state.customFavorites}
    case REHYDRATE:
      var incoming = action.payload.myReducer
      if (incoming) return {...state, ...incoming, specialKey: processSpecial(incoming.specialKey)}
      return state
    default:
      return state
  }
}
