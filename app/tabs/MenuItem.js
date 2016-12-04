'use strict'

import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MetTouchable from '../MetComponents/MetTouchable'

class MenuItem extends React.Component {
  render() {
    // var icon = this.props.selected ? this.props.selectedIcon : this.props.icon
    var selectedTitleStyle = this.props.selected && styles.selectedTitle
    // var badge
    // if (this.props.badge) {
    //   badge = (
    //     <View style={styles.badge}>
    //       <Text style={styles.badgeText}>
    //         {this.props.badge}
    //       </Text>
    //     </View>
    //   )
    // }
    return (
      <MetTouchable onPress={this.props.onPress}>
        <View style={styles.container}>
          {/* <Image style={styles.icon} source={icon} /> */}
          <Text style={[styles.title, selectedTitleStyle]}>
            {this.props.title}
          </Text>
          {/* {badge} */}
        </View>
      </MetTouchable>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  icon: {
    marginRight: 20,
  },
  title: {
    flex: 1,
    fontSize: 17,
    // color: F8Colors.lightText,
  },
  selectedTitle: {
    // color: F8Colors.darkText,
    color: '#333'
  },
  badge: {
    backgroundColor: '#DC3883',
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 10,
  },
  badgeText: {
    fontSize: 12,
    color: 'white',
  },
})

module.exports = MenuItem
