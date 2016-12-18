'use strict'

import React, { Component } from 'react'

import {
  View,
  StyleSheet,
  ScrollView,
  ViewPagerAndroid,
  Platform
} from 'react-native'

class ViewPager extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    this.adjustCardSize = this.adjustCardSize.bind(this);
  }

  render() {
    if (Platform.OS === 'ios') {
      return this.renderIOS()
    } else {
      return this.renderAndroid()
    }
  }

  renderIOS() {
    return (
      <ScrollView
        ref='scrollview'
        contentOffset={{
          x: this.state.width,
          y: 0
        }}
        style={[styles.scrollview, this.props.style]}
        onLayout={this.adjustCardSize}>
        {this.renderContent()}
      </ScrollView>
    )
  }

  renderAndroid() {
    return (
      <ViewPagerAndroid
        ref='scrollview'
        style={styles.container}>
        {this.renderContent()}
      </ViewPagerAndroid>
    )
  }

  adjustCardSize() {
    this.setState({
      width: e.nativeEvent.layout.width,
      height: e.nativeEvent.layout.height,
    });
  }

  renderContent() {
    const {width, height} = this.state
    const style = Platform.OS === 'ios' && styles.card
    return React.Children.map(this.props.children, (child, i) => (
      <View style={[style, {width, height}]} key={'r_' + i}>
        {child}
      </View>
    ))
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollview: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  card: {
    backgroundColor: 'transparent',
  }
});
