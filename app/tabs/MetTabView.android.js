'use strict'
import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MetDrawerLayout from '../MetComponents/MetDrawerLayout'
import {Home} from '../components'

class MetTabView extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  renderNavigationView() {
    return (
      <View style={styles.drawer}>
        <Text>Item 1</Text>
      </View>
    )
  }

  renderContent() {
    switch (this.props.tabs) {
      case 'home':
        return <Home />
    }
    throw new Error(`Unknown tab ${this.props.tab}`)
  }

  render() {
    return(
      <F8DrawerLayout
        ref="drawer"
        drawerWidth={290}
        drawerPosition="left"
        renderNavigationView={this.renderNavigationView}>
        <View style={styles.content} key={this.props.tab}>
          {this.renderContent()}
        </View>
      </F8DrawerLayout>
    )
  }
}

const styles = StyleSheet.create({
  drawer: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
  },
  header: {
    padding: 20,
    justifyContent: 'flex-end',
  },
  name: {
    marginTop: 10,
    color: 'white',
    fontSize: 12,
  },
  loginPrompt: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 10,
  },
  loginText: {
    fontSize: 12,
    color: F8Colors.lightText,
    textAlign: 'center',
    marginBottom: 10,
  },
});
