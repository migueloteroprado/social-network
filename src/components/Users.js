import { Redirect } from 'react-router-dom';
import React from 'react';
import { connect }  from 'react-redux';

const Users = (props) => {
  console.log(props);
  return (
    props.users.currentUser 
      ? <h1>Users</h1>
      : <Redirect to="/login" />
  )
}
export default connect(
  (state) => ({ users: state.users})
)(Users);
