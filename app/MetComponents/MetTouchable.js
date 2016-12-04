'use strict'

import React from 'react'
import {
  TouchableHighlight,
  TouchableNativeFeedback,
  Platform,
} from 'react-native'

function MetTouchableIOS(props) {
  return (
    <TouchableHighlight
      accessibilityTraits="button"
      underlayColor="#3C5EAE"
      {...props}
    />
  )
}

const MetTouchable = Platform.OS === 'android'
  ? TouchableNativeFeedback
  : F8TouchableIOS

module.exports = MetTouchable
