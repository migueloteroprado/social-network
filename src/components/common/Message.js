import React from 'react'
import styled from 'styled-components'

const Message = (props) => 
  <header className={props.className}>
    <h4>{props.message}</h4>
    {
      props.showButton 
        ? <button className='btn btn-primary' onClick={() => props.closeFn()}>{props.buttonCaption || 'OK'}</button>
        : null
    }
  </header>

export default styled(Message)`
  padding: 15px 20px 15px 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin: 20px;
  background: white;
  box-shadow: 2px 2px 3px 0px #ccc;
  h4 {
    padding-bottom: 10px;
  }
`