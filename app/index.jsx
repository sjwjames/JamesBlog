import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import Root from 'containers/root'
import { AppContainer } from 'react-hot-loader'
import 'semantic-ui-css/semantic.min.css'

const renderRoot = (Component) => {
  render(
    <AppContainer>
      <Root />
    </AppContainer>,
    document.getElementById('root')
  )
}

renderRoot(Root);

if (module.hot) {
  module.hot.accept('containers/root',function(){
    renderRoot(Root)
  });
}