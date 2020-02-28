import { connect } from 'react-redux';
import React from 'react';
import SessionForm from './session_form'
import { signupUser } from '../../actions/session_actions'

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors,
  formType: "signup"
})

const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(signupUser(user))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm)