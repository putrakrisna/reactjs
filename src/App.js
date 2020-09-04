import React, { useState, Component, useEffect } from "react";
import logo from './logo.svg';
import minicarticon from './images/minicarticon.png';
//import './App.css';
import './assesment1.css';

import HomePage from "./pages/home";
import UserPage from "./pages/user";
import CatalogCategory from "./pages/category";
import Cart from "./pages/cart";
import { Provider } from "react-redux";
import store from "./redux/stores";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Header() {
  return (
    <>
      <style jsx="true">{`
          .App-header {
            border-bottom:1px solid #c1c1c1;
            
          }
          .App-logo {
            display:inline-block;
            width:75px;
            height:75px;
          }
          .App-logo img, .header-link img {
            width:100%;
            height:auto;
          }
          .headertoplink {
            text-align:right;
          }
          .headertoplink ul {
            margin-top:0;
            padding-top:5px;
            padding-bottom:5px;
            border-bottom:1px solid #c1c1c1;
          }
          .headertoplink ul li {
            display: inline-block;
            margin-left:10px;
            vertical-align:middle;
          }
          .headertoplink ul li a {
            display: block;
          }
          
          .headertoplink ul li.myaccount a, .headertoplink ul li.minicart a {
            width:24px;
            height:24px;
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
          <div className="headertoplink">
            <ul>
              
              <li className="myaccount"><Link to="/user"><img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI2IDI2IiBpZD0i0KHQu9C+0LlfMSIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMjYgMjYiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik0yNSwxM2MwLTYuNjE2Njk5Mi01LjM4MjgxMjUtMTItMTItMTJTMSw2LjM4MzMwMDgsMSwxM2MwLDMuMzgzNjA2LDEuNDEzMjA4LDYuNDM4NjU5NywzLjY3MzY0NSw4LjYyMjI1MzQgIGMwLjA1MjkxNzUsMC4wNjg5MDg3LDAuMTE1NjAwNiwwLjEyNDc1NTksMC4xODg5NjQ4LDAuMTcxODE0QzcuMDAzODQ1MiwyMy43NzY5MTY1LDkuODU4Mjc2NCwyNSwxMywyNSAgczUuOTk2MTU0OC0xLjIyMzA4MzUsOC4xMzczOTAxLTMuMjA1OTMyNmMwLjA3MzM2NDMtMC4wNDcwNTgxLDAuMTM2MDQ3NC0wLjEwMjkwNTMsMC4xODg5NjQ4LTAuMTcxODE0ICBDMjMuNTg2NzkyLDE5LjQzODY1OTcsMjUsMTYuMzgzNjA2LDI1LDEzeiBNMTMsMi41YzUuNzkwMDM5MSwwLDEwLjUsNC43MTA0NDkyLDEwLjUsMTAuNSAgYzAsMi40NTQ5NTYxLTAuODUzMjcxNSw0LjcxMDgxNTQtMi4yNzAyNjM3LDYuNTAwODU0NWMtMC42NTA1MTI3LTIuMDk3ODM5NC0yLjUwNzYyOTQtMy43NDAxMTIzLTUuMDI4MTM3Mi00LjQ5NTc4ODYgIGMxLjM3MzU5NjItMC45OTQwNzk2LDIuMjcyMDMzNy0yLjYwNDYxNDMsMi4yNzIwMzM3LTQuNDI0NDk5NWMwLTMuMDE0MTYwMi0yLjQ1NTA3ODEtNS40NjYzMDg2LTUuNDczNjMyOC01LjQ2NjMwODYgIHMtNS40NzM2MzI4LDIuNDUyMTQ4NC01LjQ3MzYzMjgsNS40NjYzMDg2YzAsMS44MTk4ODUzLDAuODk4NDM3NSwzLjQzMDQxOTksMi4yNzIwMzM3LDQuNDI0NDk5NSAgYy0yLjUyMDUwNzgsMC43NTU2NzYzLTQuMzc3NjI0NSwyLjM5Nzk0OTItNS4wMjgxMzcyLDQuNDk1Nzg4NkMzLjM1MzI3MTUsMTcuNzEwODE1NCwyLjUsMTUuNDU0OTU2MSwyLjUsMTMgIEMyLjUsNy4yMTA0NDkyLDcuMjA5OTYwOSwyLjUsMTMsMi41eiBNOS4wMjYzNjcyLDEwLjU4MDU2NjRjMC0yLjE4NzAxMTcsMS43ODIyMjY2LTMuOTY2MzA4NiwzLjk3MzYzMjgtMy45NjYzMDg2ICBzMy45NzM2MzI4LDEuNzc5Mjk2OSwzLjk3MzYzMjgsMy45NjYzMDg2UzE1LjE5MTQwNjMsMTQuNTQ2ODc1LDEzLDE0LjU0Njg3NVM5LjAyNjM2NzIsMTIuNzY3NTc4MSw5LjAyNjM2NzIsMTAuNTgwNTY2NHogICBNNi4wMzA3NjE3LDIwLjgzMTk3MDJDNi4yNTYyMjU2LDE4LjA4MjAzMTMsOS4xNzIzNjMzLDE2LjA0Njg3NSwxMywxNi4wNDY4NzVzNi43NDM3NzQ0LDIuMDM1MTU2Myw2Ljk2OTIzODMsNC43ODUwOTUyICBDMTguMTEzMDk4MSwyMi40ODU1MzQ3LDE1LjY3NTcyMDIsMjMuNSwxMywyMy41UzcuODg2OTAxOSwyMi40ODU1MzQ3LDYuMDMwNzYxNywyMC44MzE5NzAyeiIgZmlsbD0iIzFEMUQxQiIvPjwvc3ZnPg=="/></Link></li>
              <li className="minicart"><Link to="/Cart" className="minicart"><img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI2IDI2IiBpZD0i0KHQu9C+0LlfMSIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMjYgMjYiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik0yMi42ODM1OTM4LDcuMTM1NzQyMmMtMC4wMjUzOTA2LTAuMzk1NTA3OC0wLjM1MjUzOTEtMC43MDMxMjUtMC43NDkwMjM0LTAuNzAzMTI1aC0zLjk2OTcyNjZWNS4yNTk3NjU2ICBDMTcuOTY0ODQzOCwyLjkxMTEzMjgsMTUuNzM3MzA0NywxLDEzLDFTOC4wMzUxNTYzLDIuOTExMTMyOCw4LjAzNTE1NjMsNS4yNTk3NjU2djEuMTcyODUxNkg0LjA2NTQyOTcgIGMtMC4zOTY0ODQ0LDAtMC43MjM2MzI4LDAuMzA3NjE3Mi0wLjc0OTAyMzQsMC43MDMxMjVMMi4yNTA5NzY2LDI0LjIwMzEyNSAgYy0wLjAxMjY5NTMsMC4yMDcwMzEzLDAuMDYwNTQ2OSwwLjQwOTE3OTcsMC4yMDIxNDg0LDAuNTYwNTQ2OUMyLjU5NDcyNjYsMjQuOTE0MDYyNSwyLjc5Mjk2ODgsMjUsMywyNWgyMCAgYzAuMjA3MDMxMywwLDAuNDA1MjczNC0wLjA4NTkzNzUsMC41NDY4NzUtMC4yMzYzMjgxYzAuMTQxNjAxNi0wLjE1MTM2NzIsMC4yMTQ4NDM4LTAuMzUzNTE1NiwwLjIwMjE0ODQtMC41NjA1NDY5ICBMMjIuNjgzNTkzOCw3LjEzNTc0MjJ6IE05LjUzNTE1NjMsNS4yNTk3NjU2QzkuNTM1MTU2MywzLjczODI4MTMsMTEuMDg5ODQzOCwyLjUsMTMsMi41czMuNDY0ODQzOCwxLjIzODI4MTMsMy40NjQ4NDM4LDIuNzU5NzY1NiAgdjEuMTcyODUxNkg5LjUzNTE1NjNWNS4yNTk3NjU2eiBNOC4wMzUxNTYzLDcuOTMyNjE3MnYxLjYyODkwNjNjMCwwLjQxNDA2MjUsMC4zMzU5Mzc1LDAuNzUsMC43NSwwLjc1czAuNzUtMC4zMzU5Mzc1LDAuNzUtMC43NSAgVjcuOTMyNjE3Mmg2LjkyOTY4NzV2MS42Mjg5MDYzYzAsMC40MTQwNjI1LDAuMzM1OTM3NSwwLjc1LDAuNzUsMC43NXMwLjc1LTAuMzM1OTM3NSwwLjc1LTAuNzVWNy45MzI2MTcyaDMuMjY0NjQ4NCAgbDAuNjQ5ODQxMywxMC40MDAzOTA2SDQuMTIwNjY2NUw0Ljc3MDUwNzgsNy45MzI2MTcySDguMDM1MTU2M3ogTTMuNzk3ODUxNiwyMy41bDAuMjYwMzc2LTQuMTY2OTkyMmgxNy44ODM1NDQ5TDIyLjIwMjE0ODQsMjMuNSAgSDMuNzk3ODUxNnoiIGZpbGw9IiMxRDFEMUIiLz48L3N2Zz4="/></Link></li>
            </ul>
          </div>
          <Link to="/" className="App-logo"><img src={logo}  alt="logo" /></Link>
          <div className="App-header-menu">
            <ul>
              <li><Link to="/">Home</Link></li>
              
            </ul>
              
          </div>
          
        </header>
    </>
  );
}

function Content() {
  return (
    <>
      <div className="page-main">
          <Switch>
            <Route exact path="/">
              <HomePage/>
            </Route>
            <Route path="/user">
              <UserPage />
            </Route>
            <Route path="/category">
              <CatalogCategory />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
          </Switch>
        </div>
    </>
  );
}

function Footer() {
  return (
    <>
      <footer className="page-footer"></footer>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Header />
          <Content />
          <Footer />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
