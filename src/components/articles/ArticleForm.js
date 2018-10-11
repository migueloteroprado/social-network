import React, { Component } from 'react';

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
      <form id="articleForm" onSubmit={this.handleSubmit}>
        <h4>Add a new Article:</h4>
        <div>
          <label htmlFor="title">Title <input type="text" name="title" id="title" onChange={this.handleInput} required /></label>
        </div>
        <div>
          <label htmlFor="content">Content <textarea name="content" id="content" onChange={this.handleInput} required /></label>
        </div>
        <div>
          <input type="submit" value="Add Article" />
        </div>
        <div>
          {this.state.showMessage
            ? <div className="alert alert-success alert-dismissible fade show" role="alert">
                <strong>Article Added</strong>
                <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={this.resetMessage}>
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

export default ArticleForm;