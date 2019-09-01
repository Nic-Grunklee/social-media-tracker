import { GET_POSTS, UPDATE_CHECK } from '../actions/types';
import store from './initialState';

const initialState = {
  loading: true,
  postItems: store.posts
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        loading: false
      };
    case UPDATE_CHECK:
      return {
        ...state,
        postItems: state.postItems.map(post =>
          post.id === payload ? { ...post, posted: !post.posted } : post
        ),
        loading: false
      };
    default:
      return state;
  }
}
