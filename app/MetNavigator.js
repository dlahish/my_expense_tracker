'use strict'

import React, { Component } from 'react'
import { StyleSheet, Navigator } from 'react-native'
import MetTabView from './tabs/MetTabView'
import { connect } from 'react-redux'

class MetNavigator extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  renderScene(route, navigator) {
    return <MetTabView navigator={navigator} />
  }

  render() {
    return(
      <Navigator
        ref="Navigator"
        style={styles.container}
        initialRoute={{}}
        renderScene={this.renderScene}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  }
})

function select(store) {
  return {
    tab: store.navigation.tab
  }
}

export default connect(select)(MetNavigator)
