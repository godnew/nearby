import React from 'react';
import ReactDOM from 'react-dom';
import './static/css/reset.css'
import './static/css/common.css'
import RouterView from './router'
import initReactFastClick from 'react-fastclick'

import registerServiceWorker from './registerServiceWorker';

initReactFastClick()
ReactDOM.render(<RouterView/>, document.getElementById('root'));
registerServiceWorker();
