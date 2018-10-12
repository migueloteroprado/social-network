import React from 'react';
import './Article.scss'

const Article = ({article}) =>
  (<article>
    <header>
      <h5>{article.title}</h5>
    </header>
    <div className="article-content">
      <div dangerouslySetInnerHTML={{ __html: article.content }} />
    </div>
  </article>)

export default Article;