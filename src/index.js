import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import configureStore from './store/store'
import './static/css/reset.css'
import './static/css/common.css'
import RouterView from './router'
import initReactFastClick from 'react-fastclick'

// import registerServiceWorker from './registerServiceWorker';

initReactFastClick()
const store=configureStore()
ReactDOM.render(
  <Provider store={store}>
    <RouterView/>
  </Provider>
  , document.getElementById('root'));
// registerServiceWorker();
