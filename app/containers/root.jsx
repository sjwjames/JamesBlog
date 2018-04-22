import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router';
import configureStore from '../skeleton/state/configureStore'
import App from './app'

const store = configureStore();
export default class Root extends Component {
    render() {
      return (
        <Provider store={store}>
          <App />
        </Provider>
      )
    }
  }