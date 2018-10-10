import { SET_AUTHORS } from '../actionTypes';
import store from '..';

// Action Creators

export const actionSetAuthors = authors => ({
  type: SET_AUTHORS,
  authors
});

// Action Dispatchers

export const dispatchSetAuthors = (authors) => {
  store.dispatch(actionSetAuthors(authors));
};
