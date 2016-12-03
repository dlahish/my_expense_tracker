import React, { Component } from 'react'
import { View, StyleSheet, StatusBar } from 'react-native'
import MetNavigator from './MetNavigator'

export default class MyExpenseTracker extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    return(
      <View style={styles.container}>
        <StatusBar
          translucent={true}
          backgroundColor="rgba(0, 0, 0, 0.2)"
          barStyle="default"
        />
        <MetNavigator />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
