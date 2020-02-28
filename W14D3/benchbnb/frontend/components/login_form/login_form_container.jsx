import { connect } from 'react-redux';
import React from 'react';
import SessionForm from './session_form'
import { loginUser } from '../../actions/session_actions'

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors,
    formType: "login"
  }
}

const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(loginUser(user))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm)