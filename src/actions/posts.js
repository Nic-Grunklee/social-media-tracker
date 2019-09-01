import { GET_POSTS, UPDATE_CHECK } from './types';
import uuid from 'uuid';
import { setAlert } from '../actions/alert';

export const getPosts = () => dispatch => {
  dispatch({
    type: GET_POSTS
  });
};

// Change post check
export const updateCheck = id => dispatch => {
  dispatch({
    type: UPDATE_CHECK,
    payload: id
  });
  dispatch(setAlert('Post Completed', 'success'));
};
