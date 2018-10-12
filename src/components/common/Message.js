import React from 'react'
import './Message.scss';

const Message = (props) => 
  <header className="message">
    <h4>{props.message}</h4>
    {
      props.showButton 
        ? <button className='btn btn-primary' onClick={() => props.closeFn()}>{props.buttonCaption || 'OK'}</button>
        : null
    }
    
  </header>

export default Message;