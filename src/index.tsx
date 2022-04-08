import React from 'react'
import ReactDOM from 'react-dom' 
import App from './App'

import GlobalContext from './context'

import TagManager from 'react-gtm-module'

const tagManagerArgs = {
  gtmId: process.env.REACT_APP_GTM,
}

TagManager.initialize(tagManagerArgs)

ReactDOM.render(
  <React.StrictMode>
    <GlobalContext>
      <App /> 
    </GlobalContext>
  </React.StrictMode>,
  document.getElementById('root')
) 