import { Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import { connect }  from 'react-redux';
import { dispatchAddArticle } from '../../store/actions/articles';
import AuthorDetail from '../authors/AuthorDetail'
import ArticleList from '../articles/ArticleList'
import ArticleForm from '../articles/ArticleForm';

class Profile extends Component {
  state = {
    articleAdded: false
  }
  render() {
    const author = this.props.login.currentAuthor

    let filteredArticles = [];
    if (author) {
      const articles = this.props.articles.articles;
      filteredArticles = articles.filter(article => article.author === author.login.uuid)
    }

    return (
      author
        ? <div>
            <header>
              <h3>Profile</h3>
            </header>
            <section>
              <AuthorDetail author={author} />
            </section>
            <section>
              <ArticleForm onAddArticle={this.onAddArticle} showMessage={this.state.articleAdded}/>
              <ArticleList articles={filteredArticles} />
            </section>
          </div>
        : <Redirect to="/login" />
    )
  }

  onAddArticle = (title, content) => {
    const article = { id: this.props.articles.id+1, author: this.props.login.currentAuthor.login.uuid, title, content }
    this.props.addArticle(article);
    this.setState({articleAdded: true})
  }
}

export default connect(
  state => ({ authors: state.authors, login: state.login, articles: state.articles}),
  dispatch => ({
    addArticle: (article) => dispatchAddArticle(article)
  })
)(Profile);