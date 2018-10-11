import React from 'react';

const Article = ({article}) =>
  (<article>
    <header>
      <h5>{article.title}</h5>
    </header>
    <div>
      <p>{article.content}</p>
    </div>
  </article>)

export default Article;