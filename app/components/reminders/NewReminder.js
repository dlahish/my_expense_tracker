import React, { Component, PropTypes } from 'react'
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as remindersActions from '../../actions/reminders'
import { Actions } from 'react-native-router-flux'
import NewReminderForm from './NewReminderForm'
import moment from 'moment'

class NewReminder extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        name: '',
        type: '',
        amount: '',
        date: new Date(),
        notes: ''
      }
    }
  }

  handleValueChange = (values) => {
    values.date = this.state.form.date
    values.completed = false
    this.setState({ form: values })
  }

  onDateChange = (date) => {
    let dateParts = date.split('-')
    let formattedDate = new Date(dateParts[2], (dateParts[1] - 1), dateParts[0])
    this.setState({ ...this.state, form: {...this.state.form, date: formattedDate } })
  }

  onSubmitReminder = (isValid) => {
    if (isValid) {
      this.props.actions.reminders.setNewReminder(this.state.form)
      Actions.pop()
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <NewReminderForm
          date={this.state.form.date}
          name={this.state.form.name}
          type={this.state.form.type}
          amount={this.state.form.amount}
          notes={this.state.form.notes}
          handleValueChange={this.handleValueChange}
          onDateChange={this.onDateChange}
          onSubmitReminder={this.onSubmitReminder}
        />
      </View>
    )
  }
}


var styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 64,
    backgroundColor: 'rgb(253,253,253)',
  }
})

export default connect(
  (state) => ({}),
  (dispatch) => ({
    actions: {
      reminders: bindActionCreators(remindersActions, dispatch)
    }
  })
)(NewReminder)