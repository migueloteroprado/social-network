import React from 'react'
import AuthorDetail from './AuthorDetail'

const AuthorDetailPage = ({location: {state: {author}}}) => 
  <AuthorDetail author={author}/>

export default AuthorDetailPage
