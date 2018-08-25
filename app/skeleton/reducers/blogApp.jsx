import { combineReducers } from 'redux'
import * as navBarReducer from './navBarReducer'
import * as homeReducer from './homeReducer'
import * as timeLineReducer from './timeLineReducer'
import * as digestReducer from './digestReducer'
import { routerReducer } from 'react-router-redux'

const blogApp = combineReducers(Object.assign({router:routerReducer},
    navBarReducer,
    homeReducer,
    timeLineReducer,
    digestReducer
));

export default blogApp