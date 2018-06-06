import { combineReducers } from 'redux'
import * as navBarReducers from './navBarReducer'
import { routerReducer } from 'react-router-redux'

const blogApp = combineReducers(Object.assign({router:routerReducer},
    navBarReducers
));

export default blogApp