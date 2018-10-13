import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import ViewFeeling1 from '../ViewFeeling1/ViewFeeling1';
import ViewUnderstanding2 from '../ViewUnderstanding2/ViewUnderstanding2';
import ViewSupport3 from '../ViewSupport3/ViewSupport3';
import ViewComments4 from '../ViewComments4/ViewComments4';
import ViewThankYou5 from '../ViewThankYou5/ViewThankYou5';
import Admin from '../Admin/Admin';

import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../Header/Header';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <CssBaseline />
          <Header />
          <Route exact path="/" component={ViewFeeling1} />
          <Route path="/2" component={ViewUnderstanding2} />
          <Route path="/3" component={ViewSupport3} />
          <Route path="/4" component={ViewComments4} />
          <Route path="/5" component={ViewThankYou5} />
          <Route path="/admin" component={Admin} />
          <br />
          <h3>Dev Nav</h3>
          <p><Link to="/">Page One</Link></p>
          <p><Link to="/2">Page Two</Link></p>
          <p><Link to="/3">Page Three</Link></p>
          <p><Link to="/4">Page Four</Link></p>
          <p><Link to="/5">Page Five</Link></p>
          <p><Link to="/admin">Admin</Link></p>
        </div>
      </Router>
    );
  }
}

export default App;
