'use strict'

import React, { Component } from 'react'
import DrawerLayoutAndroid from 'DrawerLayoutAndroid'

export default class MetDrawerLayout extends Component {
  constructor() {
    super()
    this.openDrawer = this.openDrawer.bind(this)
    this.closeDrawer = this.closeDrawer.bind(this)
    this.state = {

    }
  }

  closeDrawer() {
    this._drawer && this._drawer.closeDrawer();
  }

  openDrawer() {
    this._drawer && this._drawer.openDrawer();
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
