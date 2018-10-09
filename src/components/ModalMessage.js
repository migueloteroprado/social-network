import React from 'react';

const ModalMessage = (props) => 
  <div>
    <h3>{props.message}</h3>
    <button onClick={props.onClose}>{props.buttonCaption || 'OK'}</button>
  </div>

export default ModalMessage;