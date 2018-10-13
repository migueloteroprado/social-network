import { Redirect } from 'react-router-dom'
import React from 'react'
import { connect }  from 'react-redux'
import Author from './Author'
import styled from 'styled-components'

const AuthorsPage = ({ authors, currentAuthor, ...props }) => {
  return (
    currentAuthor
      ? <div>
          <header className="page-title">
            <h4>Authors</h4>
          </header>
          <section className={props.className}>
            {
              // Order authors by subscription state, subscribed first
              authors
              .map(author => (
                author.login.uuid === currentAuthor.login.uuid
                  ? null
                  : <Author author={author} key={author.login.uuid} />
              ))
            }
          </section>
        </div>
      : <Redirect to="/login" />
  )
}
export default styled(
  connect(
    state => ({ authors: state.authors.authors, currentAuthor: state.login.currentAuthor, subscriptions: state.subscriptions.subscriptions})
  )(AuthorsPage)
)`
  display: flex;
  flex-direction: column;
  @media (min-width: 992px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`