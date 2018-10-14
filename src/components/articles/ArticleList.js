import React from 'react';
import Article from './Article'
import styled from 'styled-components'

const ArticleList = ({articles, ...props}) =>
  <section className={props.className}>
    <header className="articles-header">
      <h5>Articles</h5>
    </header>
    {
      articles.length === 0
      ? <h5>No articles</h5>
      : articles.map(article => (
        <Article article={article} key={article.id} className="" {...props}/>
      ))
    }
  </section>

export default styled(ArticleList)`
  padding: 20px 20px 5px 20px;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 5px;
  background: ${props => props.theme.colors.background.content};
  margin-bottom: 15px;
  box-shadow: 2px 2px 3px 0px #ccc;
  position: relative;
  font-size: 1.2rem;
  header.articles-header > h5 {
    padding: ${props => props.theme.padding.header};
    margin: 0 0 20px;
    background: ${props => props.theme.colors.background.title};
    border-radius: 5px;
    color: white;
  }
`