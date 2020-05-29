import React from 'react';
import './App.css';
import Header from './Component/Header/Header';
import Shop from './Component/Shop/Shop';
import {  BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Review from './Component/Review/Review';
import Inventory from './Component/Inventory/Inventory';
import Nomatch from './Component/Nomatch/Nomatch';
import ProductDetail from './Component/ProductDetail/ProductDetail';

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
          <Route 
            exact path="/"
            component={Shop}>
          </Route>
          <Route 
            path="/shop"
            component={Shop}>
          </Route>
          <Route
            path="/review"
            component={Review}>
          </Route>
          <Route
            path="/inventory"
            component={Inventory}>
          </Route>
          <Route 
            path="/product/:productKey"
            component={ProductDetail}> 
          </Route>
          <Route
            path="*"
            component={Nomatch}>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;

