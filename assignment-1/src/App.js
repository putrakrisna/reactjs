import React, { useState, Component, useEffect } from "react";
import logo from './logo.svg';
import minicarticon from './images/minicarticon.png';
//import './App.css';
import './assesment1.css';

import Home from "./pages/Home";
import CatalogCategory from "./pages/CatalogCategory";
import Cart from "./pages/Cart";
//import WidgetBanner from "./widget/WidgetBanner";
//import WidgetProductList from "./widget/WidgetProductList";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <style jsx="true">{`
          .App-logo {
            display:inline-block;
            width:75px;
            height:75px;
          }
          .App-logo img, .header-link img {
            width:100%;
            height:auto;
          }
          .header-link {
            width:45px;
            float:right;
          }
          .App-header-menu {
            display:block;
          }
          .App-header-menu ul li {
            margin-left:10px;
            display:inline-block;
          }
          .App-header-menu ul li:first-child {
            margin-left:0;
          }
          .App-header-menu ul li a {
            color: #000000;
            text-decoration: none;
          }
        `}</style>
        <header className="App-header">
          <Link to="/" className="App-logo"><img src={logo}  alt="logo" /></Link>
          <div className="header-link"><Link to="/Cart" className="minicart"><img src={minicarticon}/></Link></div>
          <div className="App-header-menu">
            <ul>
              <li><Link to="/">Home</Link></li>
            </ul>
              
          </div>
          
        </header>
        <div className="page-main">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/CatalogCategory">
              <CatalogCategory />
            </Route>
            <Route path="/Cart">
              <Cart />
            </Route>
          </Switch>
        </div>
        <footer className="page-footer"></footer>
      </Router>
    </div>
  );
}

export default App;
