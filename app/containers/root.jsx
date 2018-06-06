import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import { Switch } from 'react-router'
import createBrowserHistory from "history/createBrowserHistory"
import configureStore from '../skeleton/state/configureStore'
import App from './app'
import {ConnectedRouter } from 'react-router-redux'

const store = configureStore();
const supportsHistory = 'pushState' in window.history
const browserHistory = createBrowserHistory({
  forceRefresh:!supportsHistory
});

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={browserHistory}>
          <App/>
        </ConnectedRouter>
      </Provider>
    )
  }
}