import React  from 'react';
import './App.css';
import Header from './Component/Header/Header';
import Shop from './Component/Shop/Shop';
import {  BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Review from './Component/Review/Review';
import Inventory from './Component/Inventory/Inventory';
import Nomatch from './Component/Nomatch/Nomatch';
import ProductDetail from './Component/ProductDetail/ProductDetail';
import Login from './Component/LogIn/Login';
import { AuthContextProvider, PrivateRoute } from './Component/LogIn/useAuth';
import Shipment from './Component/Shipment/Shipment';


function App() {
  return (
    <div>
      <AuthContextProvider>
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
            <PrivateRoute path="/shipment">
              <Shipment></Shipment>
            </PrivateRoute>
            <Route
              path="/login"
              component={Login}>
            </Route>
            <Route
              path="*"
              component={Nomatch}>
            </Route>
          </Switch>
        </Router>
      </AuthContextProvider>
    </div>
  )
}

export default App;

