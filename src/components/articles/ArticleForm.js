import React, { Component } from 'react';
import styled from 'styled-components'

class ArticleForm extends Component {

  state = {
    title: '',
    content: '',
    showMessage: false
  }

  handleInput = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.onAddArticle(this.state.title, this.state.content)
    this.setState({showMessage: true})
    document.querySelector('#articleForm').reset();
  }

  resetMessage = () => {
    this.setState({showMessage: false })
  }

  render() {
    return (
      <form id="articleForm" className={this.props.className} onSubmit={this.handleSubmit}>
        <header>
          <h5>Add a new Article</h5>
        </header>
        <div className="form-group">
          <label htmlFor="title">
          Title 
          <input type="text" className="form-control" name="title" id="title" onChange={this.handleInput} required /></label>
        </div>
        <div className="form-group">
          <label htmlFor="content">
          Content 
          <textarea className="form-control" name="content" id="content" onChange={this.handleInput} required /></label>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">Add Article</button>
        </div>
        <div>
          {this.state.showMessage
            ? <div className="alert alert-success alert-dismissible fade show" role="alert">
                <strong>Article Added</strong>
                <button className="close" data-dismiss="alert" aria-label="Close" onClick={this.resetMessage}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            : ''
          }
        </div>
      </form>
    )
  }
}

export default styled(ArticleForm)`
  padding: 20px 20px 5px 20px;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 5px;
  background: ${props => props.theme.colors.background.content};
  margin-bottom: 15px;
  box-shadow: 2px 2px 3px 0px #ccc;
  position: relative;
  font-size: 1.2rem;
  header > h5 {
    padding: 10px 10px 10px 15px;
    margin: 0 0 20px;
    background: #343a40;
    border-radius: 5px;
    color: white;
  }
  .form-group {
    label, input {
      min-width: 100%;
    }
  }
`