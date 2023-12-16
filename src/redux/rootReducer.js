// src/redux/rootReducer.js

import { combineReducers } from 'redux';
import authReducer from './authReducers';

const rootReducer = combineReducers({
  auth: authReducer,
  // Add more reducers as needed
});

export default rootReducer;
