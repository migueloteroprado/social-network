import { Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import { connect }  from 'react-redux';
import { dispatchAddArticle } from '../../store/actions/articles';
import AuthorDetail from '../authors/AuthorDetail'
import ArticleList from '../articles/ArticleList'
import ArticleForm from '../articles/ArticleForm';

class ProfilePage extends Component {
  state = {
    articleAdded: false
  }

  render() {

    const {
      articles: {
        articles
      },
      currentAuthor
    } = this.props

    let filteredArticles = []
    if (currentAuthor) {
      filteredArticles = articles.filter(article => article.author === currentAuthor.login.uuid)
    }

    return (
      currentAuthor
        ? <div>
            <header>
              <h3>Profile</h3>
            </header>
            <section>
              <AuthorDetail author={currentAuthor} />
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
    const article = { id: this.props.articles.id+1, author: this.props.currentAuthor.login.uuid, title, content }
    this.props.addArticle(article);
    this.setState({articleAdded: true})
  }
}

export default connect(
  state => ({ currentAuthor: state.login.currentAuthor, articles: state.articles}),
  dispatch => ({
    addArticle: (article) => dispatchAddArticle(article)
  })
)(ProfilePage);