import React from 'react'
import AuthorDetail from './AuthorDetail'

const AuthorDetailPage = ({location: {state: {author}}}) => 
  <React.Fragment>
    <header className="page-title">
      <h3>Author Detail</h3>
    </header>
    <AuthorDetail author={author} type="author-detail" />
  </React.Fragment>

export default AuthorDetailPage
