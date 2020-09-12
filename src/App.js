import React from 'react';
import './App.css';
import Header from './conpunents/Header/Header';
import Shop from './conpunents/Shop/Shop';
import Review from "./conpunents/Review/Review"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Inventory from './conpunents/Inventory/Inventory';
import Notfound from './conpunents/Notfound/Notfound';
import ProductDetail from './conpunents/ProductDetail/ProductDetail';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path='/review'>
            <Review></Review>
          </Route>
          <Route path='/menege'>
            <Inventory></Inventory>
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


    </div>
  );
}

export default App;
