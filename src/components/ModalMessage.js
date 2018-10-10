import React from 'react';

const ModalMessage = (props) => 
  <div>
    <h3>{props.message}</h3>
    {
      props.showButton 
        ? <button onClick={props.onClose}>{props.buttonCaption || 'OK'}</button>
        : null
    }
    
  </div>

export default ModalMessage;