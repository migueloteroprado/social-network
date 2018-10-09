import { Redirect } from 'react-router-dom';
import React from 'react';
import { connect }  from 'react-redux';
import User from './User';

const Users = (props) => {
  return (
    props.login.currentUser 
      ? <div>
          <h3>Users</h3>
          <div>
            {
              props.users.userList.map(user => (<User user={user} key={user.login.uuid} {...props}/>))
            }
          </div>
        </div>
      : <Redirect to="/login" />
  )
}
export default connect(
  state => ({ users: state.users, login: state.login})
)(Users);
