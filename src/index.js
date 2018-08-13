import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Play from './container/Play/index'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import store from './store'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<Provider store={store}>
    <Router>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/play" component={Play} />
        </Switch>
    </Router>
</Provider>, document.getElementById('root'));
registerServiceWorker();
