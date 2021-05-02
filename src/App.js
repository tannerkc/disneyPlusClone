import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Detail from './components/Detail';
import Login from './components/Login';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/detail" component={Detail} />
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
