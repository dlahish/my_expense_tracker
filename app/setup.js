'use strict'

import React, { Component } from 'react'
import MyExpenseTracker from './MyExpenseTracker'
import store from './config/store'
import  { Provider } from 'react-redux'

function setup() {

  class Root extends Component {
    constructor() {
      super()
      this.state = {
        isLoading: false, // TODO: update configureStore
      }
    }

    render() {
      if (this.state.isLoading) {
        return null
      }
      return(
        <Provider store={store}>
          <MyExpenseTracker />
        </Provider>
      )
    }
  }

  return Root;
}


module.exports = setup
