import React,{Component} from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory,hashHistory,IndexLink } from 'react-router'
import App from './components/App';
import './common/main.css';

import Home from './pages/home/Home';
import Message from './pages/message//message';
import Find from './pages/find/find';
import Mine from './pages/mine/mine';
import Edit from './pages/edit/edit';
var router =
<Router history={browserHistory}>
    <Route  path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/home" component={Home}  />
      <Route path="/message" component={Message}  />
      <Route path="/find" component={Find}  />
      <Route path="/mine" component={Mine}  />     
    </Route>
    <Route path="/edit" component={Edit}  />
</Router>


render((
router
), document.getElementById('root'))
