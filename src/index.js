import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SearchBox from './lib/searchBox';
import './index.css'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

const Index = () => (
  <Router>
    <div>
      <Route exact path="/" component={App} />

    </div>
  </Router>
)

ReactDOM.render(<Index />, document.getElementById('root'))
