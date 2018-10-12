import React from 'react';
import Article from './Article'
import './ArticleList.scss'

const ArticleList = ({articles}) =>
  <section className="articles-list">
    <header className="articles-header">
      <h5>Articles</h5>
    </header>
    {
      articles.length === 0
      ? <h5>No articles</h5>
      : articles.map(article => (
        <Article article={article} key={article.id} />
      ))
    }
  </section>

export default ArticleList;