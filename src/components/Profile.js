import { Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import { connect }  from 'react-redux';
import { dispatchAddArticle } from '../store/actions/articles';
import UserDetail from './UserDetail'
import Article from './Article';
import ArticleForm from './ArticleForm';

class Profile extends Component {
  state = {
    user: this.props.login.currentUser,
    articleAdded: false
  }
  render() {
    const user = this.state.user || null;
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
                this.state.articles === null 
                  ? <h5>Loading...</h5>
                  : this.props.articles.articles.length === 0
                    ? <h5>No articles</h5>
                    : this.props.articles.articles.map(article => (
                      <Article article={article} key={article.id} />
                    ))
              }
            </section>
          </div>
        : <Redirect to="/login" />
    )
  }

  getName = (user) => (`${user.name.first} ${user.name.last}`)

  componentDidMount() {
    if (this.state.user) {
      const articles = this.props.articles.articles;
      const filteredArticles = articles.filter(article => article.author === this.state.user.login.uuid)
      this.setState({ ...this.state, articles: filteredArticles })
    }
  }

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