import React, { useState, Component, useEffect } from "react";
import "./index.css";
import FunctionVsClass from "./components/FunctionVsClass";
import OrderSimpleNested from "./components/OrderSimpleNested";
import OrderByUrlParam from "./components/OrderByUrlParam";
import OrderByQueryParam from "./components/OrderByQueryParam";

import Home from "./pages/home/index";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/home/index";


function Navigation() {
  return (
    <>
    <Router>
      <div>
        <ul>
          <li> <Link to="/">Home</Link> </li>
          <li> <Link to="/FunctionVsClass">FunctionVsClass</Link> </li>
          <li> <Link to="/OrderSimpleNested">OrderSimpleNested</Link> </li>
          <li> <Link to="/OrderByUrlParam">OrderByUrlParam</Link> </li>
          <li> <Link to="/OrderByQueryParam">OrderByQueryParam</Link> </li>
        </ul>

        <Switch>
          <Route exact path="/">
            home
          </Route>
          <Route path="/FunctionVsClass">
            <FunctionVsClass />
          </Route>
          <Route path="/OrderSimpleNested">
            <OrderSimpleNested />
          </Route>
          <Route path="/OrderByUrlParam">
            <OrderByUrlParam />
          </Route>
          <Route path="/OrderByQueryParam">
            <OrderByQueryParam />
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  )
}

function App() {
  return (
    <div className="App">
      {/*tes*/}
      {/*<FunctionVsClass/>*/}
      <Navigation/>
    </div>
  );
}

export default App;
