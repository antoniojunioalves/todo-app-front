import React from 'react'
import ReactDom from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducers from './reducers'

// const store = createStore(reducers)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

const store = createStore(reducers, composeEnhancers())

import App from './main/app'


ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>
    
, document.getElementById('app'))