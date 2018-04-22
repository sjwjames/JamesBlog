import { combineReducers } from 'redux'
import * as navBarReducers from './navBarReducer';

const blogApp = combineReducers(navBarReducers);

export default blogApp