import React, { createContext, useState } from 'react';
import './App.css';
import Header from './conpunents/Header/Header';
import Shop from './conpunents/Shop/Shop';
import Review from "./conpunents/Review/Review"
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Inventory from './conpunents/Inventory/Inventory';
import Notfound from './conpunents/Notfound/Notfound';
import ProductDetail from './conpunents/ProductDetail/ProductDetail';
import Shipment from './conpunents/Shipment/Shipment';
import Login from './conpunents/Login/Login';
import PrivateRoute from './conpunents/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]} className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path='/review'>
            <Review></Review>
          </Route>
          <PrivateRoute path='/orders'>
            <Inventory></Inventory>
          </PrivateRoute>
          <PrivateRoute path='/shipment'>
            <Shipment></Shipment>
          </PrivateRoute>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route exact path='/' >
            <Shop></Shop>
          </Route>
          <Route path="/product/:productKey" >
            <ProductDetail></ProductDetail>
          </Route>
          <Route path='*' >
            <Notfound></Notfound>
          </Route>
        </Switch>
      </Router>


    </UserContext.Provider>
  );
}

export default App;
