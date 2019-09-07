import { combineReducers } from "redux";
import { postReducer } from './postReducer';
import { googleAuthReducer } from './googleAuthReducer';

export const rootReducer = combineReducers({
  posts: postReducer,
  auth: googleAuthReducer
});
