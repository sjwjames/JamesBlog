import { combineReducers } from 'redux'
import * as navBarReducer from './navBarReducer'
import * as homeReducer from './homeReducer'
import { routerReducer } from 'react-router-redux'

const blogApp = combineReducers(Object.assign({router:routerReducer},
    navBarReducer,
    homeReducer
));

export default blogApp