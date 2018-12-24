import { combineReducers } from 'redux'
import * as navBarReducer from './navBarReducer'
import * as homeReducer from './homeReducer'
import * as timeLineReducer from './timeLineReducer'
import * as digestReducer from './digestReducer'
import * as postReducer from './postReducer'
import { routerReducer } from 'react-router-redux'

const blogApp = combineReducers(Object.assign({router:routerReducer},
    navBarReducer,
    homeReducer,
    timeLineReducer,
    digestReducer,
    postReducer
));

export default blogApp