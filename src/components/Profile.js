import { Redirect } from 'react-router-dom';
import React from 'react';
import { connect }  from 'react-redux';

const Profile = (props) => {
  console.log(props);
  return (
    props.users.currentUser 
      ? <h1>Profile</h1>
      : <Redirect to="/login" />
  )
}
export default connect(
  (state) => ({ users: state.users})
)(Profile);