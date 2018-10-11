import React from 'react';

const Message = (props) => 
  <div>
    <h3>{props.message}</h3>
    {
      props.showButton 
        ? <button className='btn btn-secondary' onClick={props.onClose}>{props.buttonCaption || 'OK'}</button>
        : null
    }
    
  </div>

export default Message;