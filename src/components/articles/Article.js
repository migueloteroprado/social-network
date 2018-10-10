import React from 'react';

const Article = (props) =>
  (<article>
    <header>
      <h5>{props.article.title}</h5>
    </header>
    <div>
      <p>{props.article.content}</p>
    </div>
  </article>)

export default Article;