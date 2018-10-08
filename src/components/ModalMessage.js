import React from 'react';

const ModalMessage = (props) => 
  <div>
    <h1>{props.message}</h1>
    <button onClick={props.onClose}>OK</button>
  </div>

export default ModalMessage;