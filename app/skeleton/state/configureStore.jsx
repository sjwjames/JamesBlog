import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import normalizrMiddleware from './middlewares/normalizr'
import blogApp from '../reducers/blogApp'

const loggerMiddleware = createLogger()

export default function configureStore(preloadedState={}) {
  return createStore(
    blogApp,
    preloadedState,
    applyMiddleware(
      thunkMiddleware,
      // normalizrMiddleware,
      loggerMiddleware
    )
  )
}