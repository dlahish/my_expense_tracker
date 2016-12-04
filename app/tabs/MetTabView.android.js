'use strict'
import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MetDrawerLayout from '../MetComponents/MetDrawerLayout'
import MenuItem from './MenuItem'
import { Home, Settings } from '../components'
import { connect } from 'react-redux'
import { switchTab } from '../actions/navigation'

class MetTabView extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  onTabSelect(tab) {
    if (this.props.tab !== tab) {
      this.props.onTabSelect(tab)
    }
    this.refs.drawer.closeDrawer()
  }

  renderNavigationView() {
    return (
      <View style={styles.drawer}>
        <MenuItem
          title="Home"
          selected={this.props.tab === 'home'}
          onPress={this.onTabSelect.bind(this, 'home')}
          // icon={scheduleIcon}
          // selectedIcon={scheduleIconSelected}
        />
        <MenuItem
          title="Settings"
          selected={this.props.tab === 'settings'}
          onPress={this.onTabSelect.bind(this, 'settings')}
          // icon={scheduleIcon}
          // selectedIcon={scheduleIconSelected}
        />
      </View>
    )
  }

  renderContent() {
    switch (this.props.tab) {
      case 'home':
        return <Home />
      case 'settings':
        return <Settings />
    }
    throw new Error(`Unknown tab ${this.props.tab}`)
  }

  render() {
    return(
      <MetDrawerLayout
        ref="drawer"
        drawerWidth={290}
        drawerPosition="left"
        renderNavigationView={this.renderNavigationView.bind(this)}>
        <View style={styles.content} key={this.props.tab}>
          {this.renderContent()}
        </View>
      </MetDrawerLayout>
    )
  }
}

const styles = StyleSheet.create({
  drawer: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1
  }
});

function select(store) {
  return {
    tab: store.navigation.tab
  }
}

function actions(dispatch) {
  return {
    onTabSelect: (tab) => dispatch(switchTab(tab))
  }
}

export default connect(select, actions)(MetTabView)
