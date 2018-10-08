import React from 'react';

const UserList = (props) =>
  (<div>
    <img src={props.user.picture.thumbnail} alt={`${props.user.name.first} ${props.user.name.last}`}></img>
    <h3>{`${props.user.name.first} ${props.user.name.last}`}</h3>
    <p>{props.user.email}</p>
  </div>)

export default UserList;