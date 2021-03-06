import API_URL from '../../config';
import getAuthors from '../../API'
import { LOAD_AUTHORS_STARTED, LOAD_AUTHORS_ERROR, LOAD_AUTHORS_SUCCESS } from '../actionTypes'
import store from '..';

// Action Creators

export const actionLoadAuthorsStarted = () => ({
  type: LOAD_AUTHORS_STARTED
});

export const actionLoadAuthorsSuccess = (authors) => ({
  type: LOAD_AUTHORS_SUCCESS,
  payload: authors
});

export const actionLoadAuthorsError = (error) => ({
  type: LOAD_AUTHORS_ERROR,
  payload: error
});

// Action Dispatchers

export const dispatchLoadAuthorsStarted = () => async dispatch => {
  dispatch(actionLoadAuthorsStarted());
  try {
    const authors = await getAuthors(API_URL);
    if (!authors.error && authors.results) {
      dispatchLoadAuthorsSuccess(authors.results);
    } else {
      dispatchLoadAuthorsError(authors.message);  
    }
  } catch (error) {
    dispatchLoadAuthorsError(error.message);
  }
};

export const dispatchLoadAuthorsSuccess = (authors) => {
  store.dispatch(actionLoadAuthorsSuccess(authors))
}
export const dispatchLoadAuthorsError = (error) => {
  store.dispatch(actionLoadAuthorsError(error))
}
