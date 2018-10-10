import { Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import { connect }  from 'react-redux';
import { dispatchAddArticle } from '../store/actions/articles';
import UserDetail from './UserDetail'
import Article from './Article';
import ArticleForm from './ArticleForm';

class Profile extends Component {
  state = {
    articleAdded: false
  }
  render() {
    const user = this.props.login.currentUser

    let filteredArticles = [];
    if (user) {
      const articles = this.props.articles.articles;
      filteredArticles = articles.filter(article => article.author === user.login.uuid)
    }

    return (
      this.props.login.currentUser 
        ? <div>
            <header>
              <h3>Profile</h3>
            </header>
            <section>
              <UserDetail user={user} />
            </section>
            <section>
              <header>
                <h4>Articles</h4>
              </header>
              <ArticleForm onAddArticle={this.onAddArticle} showMessage={this.state.articleAdded}/>
              {
                this.props.articles.articles.length === 0
                  ? <h5>No articles</h5>
                  : filteredArticles.map(article => (
                    <Article article={article} key={article.id} />
                  ))
              }
            </section>
          </div>
        : <Redirect to="/login" />
    )
  }

  getName = (user) => (`${user.name.first} ${user.name.last}`)

  onAddArticle = (title, content) => {
    const article = { id: this.props.articles.id+1, author: this.props.login.currentUser.login.uuid, title, content }
    this.props.addArticle(article);
    this.setState({articleAdded: true})
  }
}

export default connect(
  state => ({ users: state.users, login: state.login, articles: state.articles}),
  dispatch => ({
    addArticle: (article) => dispatchAddArticle(article)
  })
)(Profile);