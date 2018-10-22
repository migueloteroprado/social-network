import { LOAD_ARTICLES, ADD_ARTICLE } from '../actionTypes';

const initialState = {
  articles: null,
  id: 1
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ARTICLES:
      return {
        articles: action.payload.articles,
        id: action.payload.id
      }    
    case ADD_ARTICLE:
      const articles = [...state.articles, action.payload]
      return {
        articles,
        id: action.payload.id
      }
    default:
      return state
  }
}