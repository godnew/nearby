import React from 'react';
import ReactDOM from 'react-dom';
import './static/css/reset.css'
import './static/css/common.css'
import RouterView from './router'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<RouterView/>, document.getElementById('root'));
registerServiceWorker();
