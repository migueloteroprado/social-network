import { LOAD_ARTICLES, ADD_ARTICLE } from '../actionTypes';
import store from '..';

// Action Creators

export const actionLoadArticles = (articles) => ({
  type: LOAD_ARTICLES,
  payload: articles
})

export const actionAddArticle = (article) => ({
  type: ADD_ARTICLE,
  payload: article
})

// Action Dispatchers

export const dispatchLoadArticles = (articles) => {
  store.dispatch(actionLoadArticles(articles));
}

export const dispatchAddArticle = (article) => dispatch => {
  dispatch(actionAddArticle(article));
  localStorage.setItem('social.articles', JSON.stringify(store.getState().articles.articles));
};
