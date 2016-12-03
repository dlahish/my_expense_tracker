'use strict'

import React, { Component } from 'react'
import DrawerLayoutAndroid from 'DrawerLayoutAndroid'

class MetDrawerLayout extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    const {drawerPosition, ...props} = this.props
    const {Right, Left} = DrawerLayoutAndroid.positions
    return(
      <DrawerLayoutAndroid
        ref={(drawer) => { this._drawer = drawer; }}
        {...props}
        drawerPosition={drawerPosition === 'right' ? Right : Left}
        // onDrawerOpen={this.onDrawerOpen}
        // onDrawerClose={this.onDrawerClose}
      />
    )
  }
}
