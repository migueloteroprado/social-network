import React, { Component}  from 'react'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'
import { getAuthorByUUID } from '../../utils/utils'
import AuthorDetail from './AuthorDetail'
import NotFound from '../common/NotFound'


class AuthorDetailPage extends Component { 
  render() {
    const author = this.getAuthor()
    return (
      this.props.currentAuthor
      ?  author
        ? <React.Fragment>
            <header className="page-title">
              <h4>Author Detail</h4>
            </header>
            <AuthorDetail author={author} type="author-detail" />
          </React.Fragment>
        : <NotFound /> 
      : <Redirect to="/login" />
    )
  }

  getAuthor = () => {
    const uuid = this.props.match.params.uuid;
    if (!uuid) {
      return null
    }
    return getAuthorByUUID(uuid, this.props.authors);
  }
  
}

export default withRouter(
  connect(
    state => ({currentAuthor: state.login.currentAuthor, authors: state.authors.authors})
  )(AuthorDetailPage)
)
