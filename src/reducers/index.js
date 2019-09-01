import { combineReducers } from 'redux';
import posts from './posts';
import alert from './alert';

export default combineReducers({ posts, alert });
