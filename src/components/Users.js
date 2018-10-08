import { Redirect } from 'react-router-dom';
import React from 'react';
import { connect }  from 'react-redux';
import UserList from './UserList';

const Users = (props) => {
  console.log(props);
  return (
    props.users.currentUser 
      ? <div>
          <h1>Users</h1>
          <div>
            {
              props.users.userList.map(user => (<UserList user={user} key={user.login.uuid}/>))
            }
          </div>
        </div>
      : <Redirect to="/login" />
  )
}
export default connect(
  (state) => ({ users: state.users})
)(Users);
