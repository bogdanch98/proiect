import React from 'react';
import { Router, Route } from 'react-router';
import { createBrowserHistory } from 'history';
import Dashboard from './components/general/Dashboard/Dashboard';
import Products from './components/particular/Products/Products';
import './App.css';
import Cart from './components/particular/Cart/Cart';

function App() {
  return (
    <div className="App">
      <Router history={createBrowserHistory()}>
          <Route path={'/'} component={Dashboard} />
          <Route path={'/products'} component={Products} />
          <Route path={'/cart'} component={Cart} />
      </Router>
    </div>
  );
}

export default App;
