import React from 'react';
import Article from './Article'

const ArticleList = ({articles}) =>
  <section>
    <header>
      <h4>Articles</h4>
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