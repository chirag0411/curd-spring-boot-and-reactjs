import createHashHistory from 'history/createHashHistory';
import React from 'react';
import ReactDOM from 'react-dom';
import { syncHistoryWithStore } from 'react-router-redux';
import Root from './containers/root';
import * as serviceWorker from './serviceWorker';
import store from './stores';

const hashHistory = createHashHistory();
const history = syncHistoryWithStore(hashHistory, store)
const target = document.getElementById('root');
const node = <Root store={store} routerHistory={history} />;

ReactDOM.render(node, target);
serviceWorker.unregister();