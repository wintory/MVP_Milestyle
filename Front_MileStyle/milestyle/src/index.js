import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home'
import 'bootstrap/dist/css/bootstrap.css';
import { Router, Route, Link , browserHistory} from 'react-router'
import SearchDetail from './Search'
ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Home}/>
      <Route path="/search/city/:city" component={SearchDetail}/>
  </Router>,
  document.getElementById('root')
);
