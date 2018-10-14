import React from 'react';
import styled from 'styled-components'

const NotFound = (props) =>
  <div className={props.className}>
    <h4>Page Not Found</h4>
    <button className="btn btn-primary btn-sm" onClick={() => props.history.goBack()}>Go Back</button>
  </div>

export default styled(NotFound)`
  padding: 20px;
  background: ${props => props.theme.colors.background.content};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 5px;
  margin-top: 20px;
  h4 {
    margin-bottom: 15px;
  }
`;