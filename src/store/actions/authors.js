import API_URL from '../../config';
import getAuthors from '../../API'
import { LOAD_AUTHORS_STARTED, LOAD_AUTHORS_ERROR, LOAD_AUTHORS_COMPLETED, SET_AUTHORS } from '../actionTypes'
import store from '..';

// Action Creators

export const actionSetAuthors = authors => ({
  type: SET_AUTHORS,
  payload: authors
});

export const actionLoadAuthorsStarted = () => ({
  type: LOAD_AUTHORS_STARTED
});

export const actionLoadAuthorsCompleted = (authors) => ({
  type: LOAD_AUTHORS_COMPLETED,
  payload: authors
});

export const actionLoadAuthorsError = (error) => ({
  type: LOAD_AUTHORS_ERROR,
  payload: error
});


// Action Dispatchers

export const dispatchSetAuthors = (authors) => {
  store.dispatch(actionSetAuthors(authors));
};

export const dispatchLoadAuthorsStarted = () => async dispatch => {
  dispatch(actionLoadAuthorsStarted());
  try {
    const authors = await getAuthors(API_URL);
    dispatchLoadAuthorsCompleted(authors.results);
  } catch (error) {
    dispatchLoadAuthorsError(error.message);
  }
};

export const dispatchLoadAuthorsCompleted = (authors) => {
  store.dispatch(actionLoadAuthorsCompleted(authors))
}
export const dispatchLoadAuthorsError = (error) => {
  store.dispatch(actionLoadAuthorsError(error))
}

