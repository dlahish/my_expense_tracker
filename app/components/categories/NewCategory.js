import React, { Component, PropTypes } from 'react'
import { NewCategoryForm } from '../../components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Actions } from 'react-native-router-flux'
import * as dataActionCreators from '../../actions/data'
import { View, Text, StyleSheet } from 'react-native'

class NewCategory extends Component {
  constructor(props) {
    super(props)
    this.state = {
      category: {
        name: '',
        type: 'Income'
      }
    }
  }

  componentDidMount() {
    this.setState({category: {type: this.props.categoryType }})
  }

  onInputChange = (field, value) => {
    this.setState({
      ...this.state,
      category: {...this.state.category, [field]:value}
     })
  }

  onSaveNewCategory = () => {
    this.props.addNewCategory(this.state.category)
    Actions.pop()
  }

  onTypeChange = (type) => {
    this.setState({ category: {type: type }})
  }

  render() {
    return (
      <View style={styles.container}>
        <CustomNavBar
          onLeftPress={Actions.pop}
          onRightPress={this.onSaveNewCategory}
          title='New Category'
          leftButton='Cancel'
          rightButton='Save'
        />
        <NewCategoryForm
          onInputChange={this.onInputChange}
          categoryType={this.state.category.type}
          onTypeChange={this.onTypeChange}
        />
      </View>
    )
  }
}

NewCategory.PropTypes = {
  categoryType: PropTypes.string,
  addNewCategory: PropTypes.func.isRequired
}

const styles = {
  container: {
    flex: 1
  }
}

export default connect(
  (state) => ({}),
  (dispatch) => (bindActionCreators(dataActionCreators, dispatch))
)(NewCategory)
