import React from 'react'
import ReactDom from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import promise from 'redux-promise'

import reducers from './reducers'

// const store = createStore(reducers)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

const store = applyMiddleware(promise)(createStore)(reducers, composeEnhancers())

import App from './main/app'


ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>
    
, document.getElementById('app'))