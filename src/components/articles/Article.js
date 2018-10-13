import React from 'react'
import styled from 'styled-components'

const Article = ({article, className}) =>
  <article className={className}>
    <header>
      <h5>{article.title}</h5>
    </header>
    <div className="article-content">
      <div dangerouslySetInnerHTML={{ __html: article.content }} />
    </div>
  </article>
  
export default styled(Article)`
  padding: 15px 20px 15px 15px;
  background-color: white !important;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 5px;
  margin-bottom: 15px;
  header > h5 {
    font-size: 1.3rem;
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid #eee;
  }
  .article-content {
    padding-left: 10px;
    font-size: 0.9rem;
  }
`
